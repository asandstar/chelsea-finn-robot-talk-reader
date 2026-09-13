window.SITE_DATA = {
  "brand": "Chelsea Finn · Physical Intelligence Research Reader",
  "shortBrand": "PI Research Reader",
  "titleLead": "Two talks.",
  "titleFocus": "One evolving research program.",
  "deck": "把 Chelsea Finn 在 2025 和 2026 年的两场演讲与 Physical Intelligence 的公开论文放进同一阅读框架：既可沿模型主线纵向阅读，也可围绕训练、泛化、部署学习与记忆横向对照。",
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
      "thesis": "以 π0、π0.5 与 Hi Robot 为核心，解释通用 VLA 如何获得动作能力、利用多源数据，并在未见环境中进行层级决策。",
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
      "thesis": "以 RECAP、长时间自治、Multi-Scale Embodied Memory 与 π0.7 为核心，讨论部署数据如何回流训练，以及通用模型如何维持长程状态并组合已有能力。",
      "accent": "blue",
      "topics": ["RECAP", "Memory", "π0.7", "World Model", "Compositionality"]
    }
  ],
  "research": {
    "overview": {
      "eyebrow": "Research evolution",
      "title": "从通用动作模型走向可部署的机器人系统",
      "description": "两场演讲展示了同一研究路线在不同阶段的重点：2025 关注动作能力、训练效率、开放世界泛化与层级控制；2026 转向部署经验回流、长程状态，以及如何把多种能力整合进同一个可控策略。",
      "linkLabel": "Open the four-track comparison →",
      "steps": [
        {"label":"建立通用动作底座","detail":"π0 用一个 VLA 学习多机器人、多任务数据，并通过 flow-matching action expert 输出连续动作。"},
        {"label":"提高训练效率与泛化能力","detail":"FAST 改进动作表示，Hi Robot 引入层级语言控制，π0.5 进一步面向开放世界泛化。"},
        {"label":"让部署经验回流训练","detail":"RECAP 将示范、人类纠正、自主尝试和结果反馈纳入训练，以提升真实部署中的成功率和吞吐量。"},
        {"label":"处理长程状态，整合异质数据","detail":"MEM 研究多时间尺度记忆；π0.7 则用多模态条件组织不同来源、不同质量的数据与部署经验。"}
      ]
    },
    "map": {
      "eyebrow": "Official paper map · verified dates",
      "title": "一条模型主线，五条方法与系统分支",
      "description": "主线按公开版本和研究目标组织；分支收纳动作表示、层级控制、训练方法、部署学习与记忆研究。每条关系都标注证据强度，避免把阅读线索误作官方继承关系。",
      "mainlineLabel": "Model line",
      "branchLabel": "Method / system branches",
      "branchDescription": "这些工作解决不同层面的问题；它们与主版本的关系，以各自的关系类型和证据标记为准。",
      "sourceNote": "日期采用 Physical Intelligence 官方发布日期；来源只链接 PI 官方页面、官方论文与 arXiv。"
    },
    "confidenceLabels": {
      "explicit": "Explicit",
      "strong-inference": "Inferred",
      "interpretive": "Interpretive"
    },
    "categoryLabels": {
      "foundation-model": "Foundation model",
      "training-method": "Training method",
      "architecture-method": "Architecture method",
      "memory": "Memory",
      "rl": "Reinforcement learning",
      "action-representation": "Action representation",
      "language-interaction": "Language interaction"
    },
    "relationTypeLabels": {
      "version-successor": "Version successor",
      "research-line-successor": "Research-line successor",
      "method-branch": "Method branch",
      "adopted-by": "Adopted by",
      "extends": "Extends",
      "incorporated-into": "Incorporated into",
      "experience-distilled-into": "Experience distilled into",
      "builds-on": "Builds on",
      "applied-to": "Applied to",
      "builds-on-concept": "Builds on concept",
      "evaluated-with": "Evaluated with",
      "related-method": "Related method"
    },
    "concepts": [
      {"id":"memory","label":"Memory","summary":"跨多个时间尺度保存与选择对当前动作有用的历史。","researchQuestions":["如何主动选择值得保留或更新的记忆，而不是持续累积全部历史？","如何避免策略因历史动作与结果的相关性产生 causal confusion？","短期 observation memory 如何保留遮挡、运动与操作细节？","长期 semantic / textual memory 如何压缩任务进度而不过度丢失信息？","策略如何可靠追踪多阶段任务进度？","怎样在 context efficiency、推理延迟与记忆精度之间权衡？"],"provenance":{"sourceLabel":"MEM paper","sourceUrl":"https://www.pi.website/download/Mem.pdf","sourceType":"paper","note":"这些条目是依据论文问题设定、方法与 related work 整理的问题索引；不表示 MEM 已解决其中全部问题。"}},
      {"id":"rl","label":"RL / deployment experience","summary":"把示范、纠错、自主 rollout 与结果反馈转化为策略改进信号。参考 RECAP。"},
      {"id":"compositionality","label":"Compositionality","summary":"将已见技能、对象、指令和 embodiment 重组到训练中未直接覆盖的组合。参考 π0.7。"},
      {"id":"world-model","label":"World model / visual subgoal","summary":"用预测的视觉子目标补充语言指令，同时保留对可达性和错误传播的审慎区分。"}
    ],
    "works": [
      {"id":"pi0","label":"π0","fullTitle":"π0: A Vision-Language-Action Flow Model for General Robot Control","year":"2024","publicationDate":"2024-10-31","category":"foundation-model","summary":"以预训练 VLM 和 flow-matching action expert 构成跨任务、跨机器人平台的通用 VLA。","researchQuestion":"一个模型如何在继承视觉语言知识的同时输出高频、连续且灵巧的机器人动作？","officialUrl":"https://www.pi.website/blog/pi0","paperUrl":"https://www.pi.website/download/pi0.pdf","arxivUrl":"https://arxiv.org/abs/2410.24164","tags":["VLA","flow matching","action expert","cross-embodiment"],"stage":"通用策略底座","displayOnMap":true},
      {"id":"fast","label":"FAST","fullTitle":"FAST: Efficient Action Tokenization for Vision-Language-Action Models","year":"2025","publicationDate":"2025-01-16","category":"action-representation","summary":"以频域压缩方式把连续 action chunk 表示为更短的离散 token 序列，用于高效训练自回归 VLA。","researchQuestion":"怎样为高频、灵巧的机器人动作设计可扩展且训练高效的离散表示？","officialUrl":"https://www.pi.website/research/fast","paperUrl":"https://www.pi.website/download/fast.pdf","arxivUrl":"https://arxiv.org/abs/2501.09747","tags":["action tokenization","DCT","autoregressive VLA","training efficiency"],"displayOnMap":true},
      {"id":"hi-robot","label":"Hi Robot","fullTitle":"Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models","year":"2025","publicationDate":"2025-02-26","category":"language-interaction","summary":"用高层 VLM 解释开放指令、情境反馈并生成子任务，再由低层 VLA 执行动作。","researchQuestion":"机器人如何把开放语言、执行中的用户纠正和场景语义转化为可执行的低层步骤？","officialUrl":"https://www.pi.website/research/hirobot","paperUrl":"https://www.pi.website/download/hirobot.pdf","arxivUrl":"https://arxiv.org/abs/2502.19417","tags":["hierarchical control","situated language","human feedback","VLM"],"displayOnMap":true},
      {"id":"pi05","label":"π0.5","fullTitle":"π0.5: a Vision-Language-Action Model with Open-World Generalization","year":"2025","publicationDate":"2025-04-22","category":"foundation-model","summary":"以异质 co-training、高层语义预测、web data 与机器人数据提升在未见家庭中的开放世界泛化。","researchQuestion":"VLA 如何把视觉语言知识、跨机器人经验和层级决策迁移到未见场景与对象？","officialUrl":"https://www.pi.website/blog/pi05","paperUrl":"https://www.pi.website/download/pi05.pdf","arxivUrl":"https://arxiv.org/abs/2504.16054","tags":["open-world generalization","co-training","web data","hierarchy"],"stage":"开放世界泛化","displayOnMap":true},
      {"id":"knowledge-insulation","label":"Knowledge Insulation","fullTitle":"Knowledge Insulating Vision-Language-Action Models: Train Fast, Run Fast, Generalize Better","year":"2025","publicationDate":"2025-05-28","category":"training-method","summary":"隔离 continuous action expert 对 VLM backbone 的梯度干扰，同时用 FAST token 学习动作表征。","researchQuestion":"为 VLM 接入连续动作输出时，如何保留其 web-scale 语义知识并兼顾训练与推理效率？","officialUrl":"https://www.pi.website/research/knowledge_insulation","paperUrl":"https://www.pi.website/download/pi05_KI.pdf","arxivUrl":"https://arxiv.org/abs/2505.23705","tags":["knowledge transfer","gradient isolation","FAST","action expert"],"displayOnMap":true},
      {"id":"pi06","label":"π0.6","fullTitle":null,"year":null,"publicationDate":null,"category":"foundation-model","summary":"PI 在 RECAP 与 MEM 材料中引用的通用 VLA；本站未找到独立的 π0.6 发布页，因此仅作为关系图中的参考模型节点。","researchQuestion":null,"officialUrl":null,"paperUrl":null,"arxivUrl":null,"tags":["referenced model"],"displayOnMap":false},
      {"id":"recap","label":"π*0.6 / RECAP","fullTitle":"π*0.6: a VLA that Learns from Experience","year":"2025","publicationDate":"2025-11-17","category":"rl","summary":"以 demonstrations、human corrections 与 autonomous experience 训练任务 specialist，优化真实部署中的成功率和吞吐量。","researchQuestion":"如何让 VLA 高效利用物理部署中的纠错、自主尝试与结果反馈持续改进？","officialUrl":"https://www.pi.website/blog/pistar06","paperUrl":"https://www.pi.website/download/pistar06.pdf","arxivUrl":"https://arxiv.org/abs/2511.14759","tags":["RECAP","reinforcement learning","corrections","deployment experience"],"displayOnMap":true},
      {"id":"mem","label":"MEM","fullTitle":"MEM: Multi-Scale Embodied Memory for Vision Language Action Models","year":"2026","publicationDate":"2026-03-03","category":"memory","summary":"组合短期视频记忆与长期文本记忆，以不同粒度表示操作细节和多阶段任务进度。","researchQuestion":"在有限 context 与实时推理约束下，VLA 应如何选择、压缩并使用跨秒到分钟尺度的历史？","officialUrl":"https://www.pi.website/research/memory","paperUrl":"https://www.pi.website/download/Mem.pdf","arxivUrl":"https://arxiv.org/abs/2603.03596","tags":["active memory selection","causal confusion","short-term observation memory","long-term textual memory","task-progress tracking","context efficiency"],"displayOnMap":true},
      {"id":"pi07","label":"π0.7","fullTitle":"π0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities","year":"2026","publicationDate":"2026-04-16","category":"foundation-model","summary":"以多模态 prompt 和异质数据训练单一 steerable generalist，并评估组合任务与跨 embodiment 泛化。","researchQuestion":"一个通用 checkpoint 如何利用不同质量与来源的数据，同时保持可控性、灵巧性和组合泛化？","officialUrl":"https://www.pi.website/blog/pi07","paperUrl":"https://www.pi.website/download/pi07.pdf","arxivUrl":"https://arxiv.org/abs/2604.15483","tags":["steerability","compositional generalization","visual subgoal","metadata conditioning"],"stage":"可控与组合泛化","displayOnMap":true}
    ],
    "relations": [
      {"from":"pi0","to":"pi05","type":"version-successor","description":"π0.5 是基于 π0 开发的新模型。","evidence":{"sourceLabel":"π0.5 official page","sourceUrl":"https://www.pi.website/blog/pi05","sourceType":"official-blog","note":"官方页面明确称 π0.5 is based on the π0 VLA。"},"confidence":"explicit"},
      {"from":"pi05","to":"pi07","type":"research-line-successor","description":"本站将 π0.7 作为 π0.5 所属研究与 model family 的后续阅读节点；这表示 research lineage，不表示 π0.7 直接继承 π0.5 架构。","evidence":{"sourceLabel":"π0.7 official page","sourceUrl":"https://www.pi.website/blog/pi07","sourceType":"official-blog","note":"编号与研究目标支持把两者组织为研究主线，但页面未直接说明 π0.7 在架构上继承 π0.5。"},"confidence":"strong-inference"},
      {"from":"fast","to":"pi0","type":"applied-to","description":"FAST 动作表示方法应用于 π0，组合成 π0-FAST，用于比较离散自回归动作输出与原始 flow-matching action expert。","evidence":{"sourceLabel":"FAST official page","sourceUrl":"https://www.pi.website/research/fast","sourceType":"official-research-page","note":"官方页面明确介绍 π0-FAST，并与原始 π0 比较训练和推理特性。"},"confidence":"explicit"},
      {"from":"fast","to":"pi05","type":"adopted-by","description":"π0.5 在预训练阶段使用 FAST-tokenized actions，随后在 post-training 阶段使用 flow-matching action expert。","evidence":{"sourceLabel":"π0.5 paper","sourceUrl":"https://www.pi.website/download/pi05.pdf","sourceType":"paper","note":"论文明确描述 hybrid training procedure 及 FAST-tokenized pre-training。"},"confidence":"explicit"},
      {"from":"hi-robot","to":"pi0","type":"builds-on","description":"Hi Robot 将 π0 用作低层 VLA，由高层 VLM 生成语言子任务。","evidence":{"sourceLabel":"Hi Robot official page","sourceUrl":"https://www.pi.website/research/hirobot","sourceType":"official-research-page","note":"官方页面明确将 π0 描述为两层系统中的低层 System 1。"},"confidence":"explicit"},
      {"from":"hi-robot","to":"pi05","type":"adopted-by","description":"π0.5 沿用 Hi Robot 的层级推理思路，但由同一个模型同时生成高层文本动作和低层连续动作。","evidence":{"sourceLabel":"π0.5 official page","sourceUrl":"https://www.pi.website/blog/pi05","sourceType":"official-blog","note":"官方页面明确写道该方法 follows the Hi Robot system，并说明单模型差异。"},"confidence":"explicit"},
      {"from":"hi-robot","to":"pi07","type":"builds-on-concept","description":"π0.7 延续 Hi Robot 所代表的 high-level policy 与 hierarchical language-control 思路；这不表示其完整采用 Hi Robot 架构。","evidence":{"sourceLabel":"π0.7 official page","sourceUrl":"https://www.pi.website/blog/pi07","sourceType":"official-blog","note":"页面使用 high-level policy 并链接 Hi Robot，支持概念上的延续，但未声明完整采用 Hi Robot architecture。"},"confidence":"strong-inference"},
      {"from":"knowledge-insulation","to":"pi05","type":"extends","description":"Knowledge Insulation 将 π0.5 的混合训练思路形式化并细化为 π0.5 + KI。","evidence":{"sourceLabel":"Knowledge Insulation official page","sourceUrl":"https://www.pi.website/research/knowledge_insulation","sourceType":"official-research-page","note":"官方页面明确称其 formalizes the method used in π0.5，并扩展为 refined single-stage recipe。"},"confidence":"explicit"},
      {"from":"recap","to":"pi06","type":"extends","description":"RECAP 被用于改进 π0.6，并形成针对具体任务优化的 π*0.6 specialist。","evidence":{"sourceLabel":"RECAP official page","sourceUrl":"https://www.pi.website/blog/pistar06","sourceType":"official-blog","note":"官方页面明确称使用 RECAP improve π0.6。"},"confidence":"explicit"},
      {"from":"recap","to":"pi07","type":"experience-distilled-into","description":"RECAP 训练产生的部署经验通过 strategy metadata 蒸馏进 π0.7。","evidence":{"sourceLabel":"π0.7 official page","sourceUrl":"https://www.pi.website/blog/pi07","sourceType":"official-blog","note":"官方页面明确说明 distilling experience generated during RECAP training into π0.7。"},"confidence":"explicit"},
      {"from":"mem","to":"pi06","type":"evaluated-with","description":"MEM 被集成到 π0.6 上进行长短期记忆与长程任务评估。","evidence":{"sourceLabel":"MEM paper","sourceUrl":"https://www.pi.website/download/Mem.pdf","sourceType":"paper","note":"论文明确写道 To evaluate MEM, we integrate it into the π0.6 model。"},"confidence":"explicit"},
      {"from":"mem","to":"pi07","type":"related-method","description":"MEM 是在 π0.6 上明确评估的 memory 方法；π0.7 使用 memory/context 作为输入的一部分，但现有官方材料不足以证明其集成完整 MEM 方法，因此本站仅将两者标为概念相关。","evidence":{"sourceLabel":"π0.7 official page","sourceUrl":"https://www.pi.website/blog/pi07","sourceType":"official-blog","note":"π0.7 材料展示 memory/context 输入，但未声明集成 MEM architecture；这条关系是本站为研究阅读建立的 conceptual relationship。"},"confidence":"interpretive"}
    ]
  },
  "compare": {
    "route": "compare/",
    "title": "One Year of Physical Intelligence",
    "subtitle": "沿四条问题线索对照 2025 与 2026：部署经验如何进入训练，记忆与视觉子目标如何进入系统，泛化目标又如何扩展。",
    "tracks": [
      {
        "id":"rl-experience",
        "label":"Post-training → Deployment experience",
        "centralQuestion":"机器人如何从“模仿一套好策略”变成“利用自己的失败与恢复持续变好”？",
        "then":{"time":"31:29–34:16","chapter":"qa-posttraining-rl","title":"精选 demonstration + online RL 是下一步","note":"2025 的结论仍是研究方向：BC 给出起点，在线交互应当提升成功率与速度。"},
        "now":{"time":"07:43–14:20","chapter":"rl-for-robotics","title":"RECAP 将部署经验变成可用训练信号","note":"人类及时纠正 dead end；跨任务价值函数摊薄 rollout 成本；自主经验进入 advantage-conditioned policy。"},
        "technicalShift":"从行为一致性的数据筛选，转向 demonstrations + interventions + autonomous episodes + reward/value feedback 的闭环训练。",
        "bottleneck":"物理 rollout 昂贵，奖励稀疏且硬件会停机；效率来自尽早终止无效轨迹和跨 prompt 共享价值估计，而不是照搬大规模 GRPO。",
        "workIds":["recap"]
      },
      {
        "id":"memory",
        "label":"Memory hypothesis → Multi-timescale memory",
        "centralQuestion":"长程任务失败究竟需要更多数据、层级规划，还是显式历史？需要怎样的历史才值得付出推理成本？",
        "then":{"time":"08:31–09:36","chapter":"memory-hypotheses","title":"Memory 只是多个可检验假设之一","note":"2025 列出 history、hierarchy、control、calibration 与 data interventions，没有把失败单因归结为记忆。"},
        "now":{"time":"17:36–21:21","chapter":"multi-timescale-memory","title":"短期视频 + 长期文本成为明确系统设计","note":"短期压缩视频记忆保留运动细节，文本记忆以更高抽象层级记录分钟级任务进度。"},
        "technicalShift":"从“是否缺 history”的诊断问题，转向 token/latency 约束下的双存储介质与双更新时间尺度。",
        "bottleneck":"记忆不是越长越好；系统必须决定写什么、何时更新、怎样避免错误摘要累积，以及策略是否真的利用检索结果。",
        "workIds":["mem","pi05"]
      },
      {
        "id":"generalization",
        "label":"Unseen homes → Compositional generalization",
        "centralQuestion":"泛化是“换一个场景仍完成见过的任务”，还是能把已学概念与技能重新组合成未见过的任务？",
        "then":{"time":"21:33–25:35","chapter":"unseen-homes-eval","title":"π0.5 在未见家庭测试环境泛化","note":"跨房间多样性、web 数据与高低层联合推理让复杂清洁任务转移到新家。"},
        "now":{"time":"31:21–37:48","chapter":"compositional-generalization","title":"π0.7 组合任务、物体与机器人平台","note":"测试把已见技能放进罕见 appliance，并把折衣技能迁移到没有折衣数据的不同 embodiment。"},
        "technicalShift":"评价轴从 environment shift 扩展为 language × object、task × embodiment 的 held-out 组合，并要求 out-of-the-box 使用。",
        "bottleneck":"训练集覆盖极难审计；少量 air-fryer 相关 episode 提醒我们必须区分真正零样本、极低样本和组合重用。",
        "workIds":["pi05","pi07"]
      },
      {
        "id":"world-model",
        "label":"World-model question → Visual subgoal conditioning",
        "centralQuestion":"预测未来画面怎样真正帮助动作选择，而不是在分布外状态里生成一段看起来会成功的幻觉？",
        "then":{"time":"34:17–37:22","chapter":"qa-world-model","title":"2025 强调 model bias 与失败状态覆盖","note":"只从成功 demonstration 学到的 predictive model，可能在错误动作后仍幻觉出成功未来。"},
        "now":{"time":"27:35–30:19","chapter":"all-data-context","title":"轻量 world model 生成视觉 subgoal","note":"π0.7 用 subgoal image 描述数秒后的目标状态，并与语言、策略、质量和时长 metadata 一起条件化动作。"},
        "technicalShift":"world model 从独立的未来预测器，变成 steerable VLA 的 prompt 生成模块；预测目标被压缩成策略可消费的视觉子目标。",
        "bottleneck":"subgoal 的可达性、时序一致性与错误传播仍未消失；生成得像不等于动力学上可执行。",
        "workIds":["pi07"]
      }
    ]
  }
};
