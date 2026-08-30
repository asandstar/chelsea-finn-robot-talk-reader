window.SITE_DATA = {
  "brand": "Chelsea Finn · Physical Intelligence Research Reader",
  "shortBrand": "PI Research Reader",
  "titleLead": "Two talks.",
  "titleFocus": "One evolving research program.",
  "deck": "把 Chelsea Finn 2025 与 2026 的演讲放在同一个可检索、可跳转、可对照的研究阅读器里：从通用 VLA 的数据与后训练配方，走到部署经验、长期自治、多尺度记忆与 π0.7 的组合泛化。",
  "talks": [
    {
      "slug": "2025-building-robots",
      "year": "2025",
      "route": "talks/2025-building-robots/",
      "title": "Building Robots That Can Do Anything",
      "zhTitle": "构建能做任何事的机器人",
      "date": "June 17, 2025",
      "duration": "44:52",
      "format": "98 段完整双语逐字稿 · 17 章",
      "thesis": "先把机器人 foundation model 的能力、数据规模、开放世界泛化与层级交互问题讲清楚，再把 memory、RL 与 world model 留作下一阶段假设。",
      "accent": "coral",
      "topics": ["π0", "π0.5", "Hi Robot", "FAST", "Post-training"]
    },
    {
      "slug": "2026-next-decade",
      "year": "2026",
      "route": "talks/2026-next-decade/",
      "title": "The Next Decade in Robotics",
      "zhTitle": "机器人学的下一个十年",
      "date": "August 12, 2026",
      "duration": "58 min",
      "format": "15 个官方时间戳 · 双语研究摘要",
      "thesis": "问题从“模型能否完成任务”升级为“能否可靠部署并持续自我改进”：RECAP、13 小时自治、多尺度记忆、π0.7 与组合泛化组成新的主线。",
      "accent": "blue",
      "topics": ["RECAP", "Memory", "π0.7", "World Model", "Compositionality"]
    }
  ],
  "researchPaths": [
    {"label":"Capability → Reliability","detail":"从可展示的灵巧任务，转向吞吐量、成功率和长时间自治。"},
    {"label":"Curation → Experience","detail":"从精选 demonstration post-training，转向部署尝试、纠错与 advantage-conditioned RL。"},
    {"label":"Memory hypothesis → Memory system","detail":"从失败归因中的一个假设，转向短期视频 + 长期文本的多时间尺度架构。"},
    {"label":"Generalization → Composition","detail":"从新家庭里的环境泛化，推进到任务 × 物体 × embodiment 的组合泛化。"}
  ],
  "compare": {
    "route": "compare/",
    "title": "One Year of Physical Intelligence",
    "subtitle": "2025 → 2026：四条研究路线如何从假设、配方和 demo 发展为部署指标、系统模块与新的泛化证据。",
    "tracks": [
      {
        "id":"rl-experience",
        "label":"Post-training → Deployment experience",
        "centralQuestion":"机器人如何从“模仿一套好策略”变成“利用自己的失败与恢复持续变好”？",
        "then":{"time":"31:29–34:16","chapter":"qa-posttraining-rl","title":"精选 demonstration + online RL 是下一步","note":"2025 的结论仍是研究方向：BC 给出起点，在线交互应当提升成功率与速度。"},
        "now":{"time":"07:43–14:20","chapter":"rl-for-robotics","title":"RECAP 将部署经验变成可用训练信号","note":"人类及时纠正 dead end；跨任务价值函数摊薄 rollout 成本；自主经验进入 advantage-conditioned policy。"},
        "technicalShift":"从行为一致性的数据筛选，转向 demonstrations + interventions + autonomous episodes + reward/value feedback 的闭环训练。",
        "bottleneck":"物理 rollout 昂贵，奖励稀疏且硬件会停机；效率来自尽早终止无效轨迹和跨 prompt 共享价值估计，而不是照搬大规模 GRPO。",
        "papers":[{"label":"π*0.6 / RECAP","url":"https://www.pi.website/blog/pistar06"},{"label":"RECAP paper","url":"https://www.pi.website/download/pistar06.pdf"}]
      },
      {
        "id":"memory",
        "label":"Memory hypothesis → Multi-timescale memory",
        "centralQuestion":"长程任务失败究竟需要更多数据、层级规划，还是显式历史？需要怎样的历史才值得付出推理成本？",
        "then":{"time":"08:31–09:36","chapter":"memory-hypotheses","title":"Memory 只是多个可检验假设之一","note":"2025 列出 history、hierarchy、control、calibration 与 data interventions，没有把失败单因归结为记忆。"},
        "now":{"time":"17:36–21:21","chapter":"multi-timescale-memory","title":"短期视频 + 长期文本成为明确系统设计","note":"约 10 秒压缩视频记忆保留运动细节，文本笔记压缩分钟到小时级任务进度。"},
        "technicalShift":"从“是否缺 history”的诊断问题，转向 token/latency 约束下的双存储介质与双更新时间尺度。",
        "bottleneck":"记忆不是越长越好；系统必须决定写什么、何时更新、怎样避免错误摘要累积，以及策略是否真的利用检索结果。",
        "papers":[{"label":"PI Memory","url":"https://www.pi.website/research/memory"},{"label":"π0.5 hierarchy","url":"https://www.pi.website/blog/pi05"}]
      },
      {
        "id":"generalization",
        "label":"Unseen homes → Compositional generalization",
        "centralQuestion":"泛化是“换一个场景仍完成见过的任务”，还是能把已学概念与技能重新组合成未见过的任务？",
        "then":{"time":"21:33–25:35","chapter":"unseen-homes-eval","title":"π0.5 在未见家庭测试环境泛化","note":"跨房间多样性、web 数据与高低层联合推理让复杂清洁任务转移到新家。"},
        "now":{"time":"31:21–37:48","chapter":"compositional-generalization","title":"π0.7 组合任务、物体与机器人平台","note":"测试把已见技能放进罕见 appliance，并把折衣技能迁移到没有折衣数据的不同 embodiment。"},
        "technicalShift":"评价轴从 environment shift 扩展为 language × object、task × embodiment 的 held-out 组合，并要求 out-of-the-box 使用。",
        "bottleneck":"训练集覆盖极难审计；“三条 air-fryer episode”提醒我们必须区分真正零样本、极低样本和组合重用。",
        "papers":[{"label":"π0.5","url":"https://www.pi.website/blog/pi05"},{"label":"π0.7","url":"https://www.pi.website/blog/pi07"}]
      },
      {
        "id":"world-model",
        "label":"World-model question → Visual subgoal conditioning",
        "centralQuestion":"预测未来画面怎样真正帮助动作选择，而不是在分布外状态里生成一段看起来会成功的幻觉？",
        "then":{"time":"34:17–37:22","chapter":"qa-world-model","title":"2025 强调 model bias 与失败状态覆盖","note":"只从成功 demonstration 学到的 predictive model，可能在错误动作后仍幻觉出成功未来。"},
        "now":{"time":"27:35–30:19","chapter":"all-data-context","title":"轻量 world model 生成视觉 subgoal","note":"π0.7 用 subgoal image 描述数秒后的目标状态，并与语言、策略、质量和时长 metadata 一起条件化动作。"},
        "technicalShift":"world model 从独立的未来预测器，变成 steerable VLA 的 prompt 生成模块；预测目标被压缩成策略可消费的视觉子目标。",
        "bottleneck":"subgoal 的可达性、时序一致性与错误传播仍未消失；生成得像不等于动力学上可执行。",
        "papers":[{"label":"π0.7","url":"https://www.pi.website/blog/pi07"},{"label":"π0.7 arXiv","url":"https://arxiv.org/abs/2604.15483"}]
      }
    ]
  },
  "paperMap": [
    {"year":"2024","label":"π0","url":"https://www.pi.website/blog/pi0","note":"Generalist VLA · flow-matching action expert"},
    {"year":"2025","label":"FAST","url":"https://www.pi.website/research/fast","note":"Efficient robot action tokenization"},
    {"year":"2025","label":"Hi Robot","url":"https://www.pi.website/research/hirobot","note":"Situated language and hierarchical control"},
    {"year":"2025","label":"π0.5","url":"https://www.pi.website/blog/pi05","note":"Open-world generalization in unseen homes"},
    {"year":"2025","label":"Knowledge Insulation","url":"https://www.pi.website/research/knowledge_insulation","note":"Preserve VLM knowledge while learning actions"},
    {"year":"2025","label":"π*0.6 / RECAP","url":"https://www.pi.website/blog/pistar06","note":"RL from deployment experience and corrections"},
    {"year":"2026","label":"Memory","url":"https://www.pi.website/research/memory","note":"Efficient short- and long-term VLA memory"},
    {"year":"2026","label":"π0.7","url":"https://www.pi.website/blog/pi07","note":"Steerable generalist with compositional generalization"}
  ]
};
