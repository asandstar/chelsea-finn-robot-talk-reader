from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
segs = json.loads((ROOT / "data/segments_en.json").read_text(encoding="utf-8"))
translations = {
    row["idx"]: row["zh"]
    for row in (
        json.loads(line)
        for line in (ROOT / "data/translations.jsonl").read_text(encoding="utf-8").splitlines()
        if line.strip()
    )
}
chapters = json.loads((ROOT / "data/chapters.json").read_text(encoding="utf-8"))

for i, segment in enumerate(segs):
    segment["id"] = f"seg-{i:02d}"
    segment["index"] = i
    segment["zh"] = translations[i]
    segment["chapterId"] = next(c["id"] for c in chapters if c["start"] <= i <= c["end"])

meta = {
    "title": "Chelsea Finn: Building Robots That Can Do Anything",
    "subtitle": "Bilingual transcript + VLA / robot learning research annotations",
    "date": "June 17, 2025",
    "duration": "44:52",
    "videoId": "a8-QsBHoH94",
    "videoUrl": "https://www.youtube.com/watch?v=a8-QsBHoH94",
    "speaker": "Chelsea Finn",
    "venue": "Y Combinator AI Startup School, San Francisco",
    "sourceNote": "English transcript supplied by the reader from a TextPurr transcript copy. Chinese translation and research annotations are study notes.",
    "paperSources": [
        {"label": "π0", "url": "https://www.physicalintelligence.company/download/pi0.pdf"},
        {"label": "π0.5", "url": "https://www.physicalintelligence.company/download/pi05.pdf"},
        {"label": "Hi Robot", "url": "https://www.physicalintelligence.company/download/hirobot.pdf"},
        {"label": "FAST", "url": "https://www.physicalintelligence.company/download/fast.pdf"},
    ],
}

payload = {"meta": meta, "chapters": chapters, "segments": segs}
(ROOT / "data/talk-data.js").write_text(
    "window.TALK_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)
print(f"Built {len(segs)} segments and {len(chapters)} chapters.")
