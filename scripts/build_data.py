from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]


def build_talk(data_dir: Path) -> tuple[int, int]:
    meta = json.loads((data_dir / "meta.json").read_text(encoding="utf-8"))
    segments = json.loads((data_dir / "segments_en.json").read_text(encoding="utf-8"))
    chapters = json.loads((data_dir / "chapters.json").read_text(encoding="utf-8"))
    translations = {
        row["idx"]: row["zh"]
        for row in (
            json.loads(line)
            for line in (data_dir / "translations.jsonl").read_text(encoding="utf-8").splitlines()
            if line.strip()
        )
    }

    expected = set(range(len(segments)))
    if set(translations) != expected:
        missing = sorted(expected - set(translations))
        extra = sorted(set(translations) - expected)
        raise ValueError(f"{data_dir}: translation index mismatch; missing={missing}, extra={extra}")

    chapter_for_index = {}
    for chapter in chapters:
        if chapter["start"] > chapter["end"]:
            raise ValueError(f"{data_dir}: invalid range in {chapter['id']}")
        for index in range(chapter["start"], chapter["end"] + 1):
            if index in chapter_for_index:
                raise ValueError(f"{data_dir}: segment {index} appears in multiple chapters")
            chapter_for_index[index] = chapter["id"]

    if set(chapter_for_index) != expected:
        missing = sorted(expected - set(chapter_for_index))
        extra = sorted(set(chapter_for_index) - expected)
        raise ValueError(f"{data_dir}: chapter coverage mismatch; missing={missing}, extra={extra}")

    enriched = []
    for index, raw_segment in enumerate(segments):
        segment = dict(raw_segment)
        segment.update(
            id=f"seg-{index:02d}",
            index=index,
            zh=translations[index],
            chapterId=chapter_for_index[index],
        )
        enriched.append(segment)

    payload = {"meta": meta, "chapters": chapters, "segments": enriched}
    (data_dir / "talk-data.js").write_text(
        "window.TALK_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    return len(enriched), len(chapters)


def main() -> None:
    for data_dir in sorted((ROOT / "talks").glob("*/data")):
        if not (data_dir / "meta.json").exists():
            continue
        segment_count, chapter_count = build_talk(data_dir)
        print(f"Built {data_dir.parent.name}: {segment_count} segments, {chapter_count} chapters")


if __name__ == "__main__":
    main()
