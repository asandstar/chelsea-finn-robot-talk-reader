window.TALK_DATA = {
  "meta": {
    "slug": "2026-next-decade",
    "year": "2026",
    "pageTitle": "Chelsea Finn · The Next Decade in Robotics · Research Reader",
    "description": "Timestamped bilingual research notes for Chelsea Finn's 2026 talk on robot reliability, deployment RL, memory, π0.7, world models, and compositional generalization.",
    "eyebrow": "2026 research reading companion · Reliability / Memory / π0.7",
    "titleLead": "Chelsea Finn:",
    "titleFocus": "The Next Decade in Robotics",
    "subtitle": "按 Root Access 官方章节时间戳组织的双语研究摘要：从可靠性与部署经验强化学习，到 13 小时自治、多时间尺度记忆、π0.7、视觉子目标与组合泛化。",
    "speaker": "Chelsea Finn",
    "date": "August 12, 2026",
    "duration": "58 min",
    "videoId": "cRZNwgvcWUg",
    "videoUrl": "https://www.youtube.com/watch?v=cRZNwgvcWUg",
    "venue": "Y Combinator Startup School 2026",
    "contentKind": "Curated bilingual research notes",
    "sourceLabel": "Official Root Access article + transcript",
    "sourceUrl": "https://www.ycrootaccess.com/p/chelsea-finn-on-the-next-decade-in",
    "sourceNote": "This page does not republish the full transcript. It provides original English and Chinese research summaries aligned to Root Access's official timestamp boundaries, with short attributed talk claims and supplemental PI research links.",
    "startLabel": "Start the 2026 reader",
    "randomLabel": "Jump to a key result",
    "route": [
      "Reliability",
      "Efficient robot RL",
      "Deployment experience",
      "Long-term autonomy",
      "Multi-timescale memory",
      "π0.7",
      "Compositional generalization"
    ],
    "keyInsights": [
      "reliability-problem",
      "learning-from-failures",
      "self-improvement-loop",
      "thirteen-hour-autonomy",
      "multi-timescale-memory",
      "all-data-context",
      "generalist-beats-specialists",
      "compositional-generalization"
    ],
    "paperSources": [
      {
        "year": "2025",
        "label": "π*0.6 / RECAP",
        "url": "https://www.pi.website/blog/pistar06",
        "note": "Deployment RL with demonstrations, corrections, autonomous experience, rewards, and advantage conditioning."
      },
      {
        "year": "2026",
        "label": "Memory",
        "url": "https://www.pi.website/research/memory",
        "note": "Efficient short-term video memory and long-term textual task-progress memory."
      },
      {
        "year": "2026",
        "label": "π0.7",
        "url": "https://www.pi.website/blog/pi07",
        "note": "Steerable generalist VLA with diverse context, visual subgoals, and compositional generalization."
      },
      {
        "year": "2026",
        "label": "π0.7 paper",
        "url": "https://arxiv.org/abs/2604.15483",
        "note": "Architecture, training mixture, ablations, out-of-box performance, and cross-embodiment evaluation."
      }
    ],
    "footer": {
      "title": "Research notes, not a transcript mirror",
      "note": "Timestamps and talk framing follow the official Root Access page. The English and Chinese prose here is editorial synthesis; PI paper details are supplemental research context and should not be read as verbatim claims from the stage.",
      "links": [
        {
          "label": "Root Access transcript ↗",
          "url": "https://www.ycrootaccess.com/p/chelsea-finn-on-the-next-decade-in"
        },
        {
          "label": "Original video ↗",
          "url": "https://www.youtube.com/watch?v=cRZNwgvcWUg"
        },
        {
          "label": "PI research ↗",
          "url": "https://www.pi.website/research"
        }
      ]
    }
  },
  "chapters": [
    {
      "id": "state-of-pi",
      "start": 0,
      "end": 0,
      "time": "00:00–01:22",
      "title": "From capability demos to a deployment benchmark",
      "zhTitle": "从能力 demo 转向部署基准",
      "summary": "The opening changes the unit of progress: isolated task coverage is no longer enough; a useful generalist must combine breadth with unattended real-world operation.",
      "concepts": [
        "capability vs reliability",
        "general-purpose robot",
        "deployment benchmark",
        "physical intelligence"
      ],
      "why": "2025 的主线是 foundation VLA 能做到什么；2026 的主线是这些能力能否在真实工作流里持续产生价值。这个变化会重新定义数据收集、训练目标和评价指标。",
      "takeaway": "机器人研究从 task repertoire 进入 reliability × autonomy × generality 的三维评价。",
      "papers": [
        {
          "label": "π0.7 overview",
          "url": "https://www.pi.website/blog/pi07",
          "note": "single-model breadth and out-of-box performance"
        }
      ],
      "tags": [
        "Research Agenda",
        "Deployment",
        "Generalist"
      ]
    },
    {
      "id": "useful-real-world",
      "start": 1,
      "end": 1,
      "time": "01:23–05:10",
      "title": "Physical AI has a harsher error budget",
      "zhTitle": "物理 AI 的错误预算更苛刻",
      "summary": "Recommendation systems leave the final action to a user; autonomous robots directly alter the world. That moves reliability from a product refinement to a precondition for usefulness.",
      "concepts": [
        "human-in-the-loop",
        "autonomy",
        "error budget",
        "real-world decision making",
        "trust"
      ],
      "why": "在数字系统里，错误 token 的成本常常很低；在机器人里，失败会打断流程、损坏物体或触发安全风险。成功率必须和任务长度、恢复能力、干预频率一起看。",
      "takeaway": "越少依赖人类做最终决定，系统就越需要把罕见错误与恢复纳入设计中心。",
      "papers": [
        {
          "label": "Physical Intelligence layer",
          "url": "https://www.pi.website/blog/partner",
          "note": "partner deployments and production-oriented metrics"
        }
      ],
      "tags": [
        "Reliability",
        "Autonomy",
        "Deployment"
      ]
    },
    {
      "id": "reliability-problem",
      "start": 2,
      "end": 2,
      "time": "05:11–07:42",
      "title": "Reliability is a data-loop problem",
      "zhTitle": "可靠性本质上是数据闭环问题",
      "summary": "Espresso combines precision, force, liquids, timing, and cleanup. Manual dataset iteration improves the mean case but struggles to exhaust the long tail of model-specific failures.",
      "concepts": [
        "long-tail failures",
        "edge-case mining",
        "success rate",
        "workflow reliability",
        "espresso manipulation"
      ],
      "why": "可靠性不是简单“再收一些数据”。高价值数据来自当前 policy 最容易失败的状态；因此训练流程必须能主动发现、标记和修正自己的 failure distribution。",
      "takeaway": "从 90% 走向更高可靠性，需要自动寻找失败分布，而不是无限延长人工数据 curation。",
      "papers": [
        {
          "label": "π*0.6 / RECAP",
          "url": "https://www.pi.website/blog/pistar06",
          "note": "real-world tasks, throughput, and failure-rate improvements"
        }
      ],
      "tags": [
        "Reliability",
        "Data Loop",
        "Long Tail"
      ]
    },
    {
      "id": "rl-for-robotics",
      "start": 3,
      "end": 3,
      "time": "07:43–09:34",
      "title": "Why robot RL cannot copy language-model RL",
      "zhTitle": "机器人 RL 为什么不能照搬语言模型 RL",
      "summary": "Physical rollouts consume time, hardware, setup, and recovery labor. The million-rollout logic behind some language RL recipes becomes hundreds of robot-days even for short tasks.",
      "concepts": [
        "sample efficiency",
        "physical rollout cost",
        "PPO",
        "GRPO",
        "hardware utilization"
      ],
      "why": "机器人 RL 的关键约束不是 GPU token budget，而是 wall-clock、硬件并行度、复位成本与安全。算法价值要按每小时有效经验和下游吞吐量衡量。",
      "takeaway": "可扩展 robot RL 的第一目标是减少每个能力所需的真实尝试，而不是最大化 rollout 数。",
      "papers": [
        {
          "label": "RECAP paper",
          "url": "https://www.pi.website/download/pistar06.pdf",
          "note": "advantage-conditioned RL for VLAs"
        }
      ],
      "tags": [
        "RL",
        "Sample Efficiency",
        "Hardware"
      ]
    },
    {
      "id": "learning-from-failures",
      "start": 4,
      "end": 4,
      "time": "09:35–12:42",
      "title": "Interventions and a reusable value model",
      "zhTitle": "人类纠正与可复用价值模型",
      "summary": "Interventions turn dead ends into recovery examples. A value model trained across robot video estimates progress toward success and shares that knowledge across tasks instead of demanding many repeats per prompt.",
      "concepts": [
        "expert intervention",
        "recovery data",
        "value function",
        "time-to-success",
        "cross-task amortization"
      ],
      "why": "失败数据并非天然有用：长时间困在无效状态只会浪费硬件。干预负责把轨迹拉回有学习价值的区域，value model 则把稀疏终局信号变成更密集的相对进展。",
      "takeaway": "高效失败学习 = 及时纠正不可恢复状态 + 跨任务共享“是否在前进”的判断。",
      "papers": [
        {
          "label": "π*0.6 / RECAP",
          "url": "https://www.pi.website/blog/pistar06",
          "note": "corrections, autonomous episodes, rewards, and advantage"
        }
      ],
      "tags": [
        "RL",
        "Intervention",
        "Value Function",
        "Recovery"
      ],
      "crossLinks": [
        {
          "kicker": "Origin · 2025",
          "title": "Where does RL fit after curated post-training?",
          "href": "../2025-building-robots/#chapter-qa-posttraining-rl",
          "note": "2025 还把 online RL 作为下一阶段判断；2026 给出可运行的 experience-and-corrections recipe。"
        }
      ]
    },
    {
      "id": "self-improvement-loop",
      "start": 5,
      "end": 5,
      "time": "12:43–14:20",
      "title": "A robot that creates its next training set",
      "zhTitle": "机器人开始生成自己的下一轮训练集",
      "summary": "Pretraining, demonstrations, autonomous execution, interventions, rewards, and advantage conditioning form a repeatable improvement loop rather than a one-off fine-tuning run.",
      "concepts": [
        "self-improvement",
        "on-policy data",
        "offline RL",
        "advantage conditioning",
        "deployment loop"
      ],
      "why": "这里的“自我改进”不是无监督递归自改代码，而是部署系统不断暴露当前 policy 的状态分布，再由纠正与 reward 将经验转成训练信号。人类仍负责关键监督与安全边界。",
      "takeaway": "部署不再只是推理终点，而是持续产生更贴近 test distribution 的训练阶段。",
      "papers": [
        {
          "label": "RECAP paper",
          "url": "https://www.pi.website/download/pistar06.pdf",
          "note": "RL with Experience and Corrections via Advantage-conditioned Policies"
        }
      ],
      "tags": [
        "Self-improvement",
        "Deployment",
        "RECAP",
        "Online Learning"
      ]
    },
    {
      "id": "thirteen-hour-autonomy",
      "start": 6,
      "end": 6,
      "time": "14:21–17:35",
      "title": "Thirteen hours changes what counts as evidence",
      "zhTitle": "13 小时自治改变了证据标准",
      "summary": "The espresso system is evaluated as a long-running service, while laundry and box assembly connect the same recipe to variable objects and a factory workflow. Throughput combines speed and success into a deployment-facing metric.",
      "concepts": [
        "long-term autonomy",
        "throughput",
        "intervention rate",
        "continuous evaluation",
        "production workflow"
      ],
      "why": "单次 success 容易隐藏重置、人工干预和速度问题。连续运行会暴露误差累积、边缘状态与基础设施故障，也更接近用户真正购买的“每小时成功产出”。",
      "takeaway": "真实可靠性要用长时间、未剪辑、包含速度和失败的运行统计来证明。",
      "papers": [
        {
          "label": "π*0.6 / RECAP",
          "url": "https://www.pi.website/blog/pistar06",
          "note": "hours-long real-world runs and quantitative results"
        }
      ],
      "tags": [
        "Autonomy",
        "Evaluation",
        "Throughput",
        "RECAP"
      ]
    },
    {
      "id": "multi-timescale-memory",
      "start": 7,
      "end": 7,
      "time": "17:36–21:21",
      "title": "Memory at two media and timescales",
      "zhTitle": "两种介质、两个时间尺度的记忆",
      "summary": "Recent visual dynamics are compressed by an efficient video encoder; longer task history is represented as textual notes. The split preserves motion detail without paying the token cost of replaying hours of video.",
      "concepts": [
        "short-term video memory",
        "long-term textual memory",
        "causal temporal attention",
        "task-progress notes",
        "token compression"
      ],
      "why": "短期记忆回答“刚才物体怎么动”，长期记忆回答“哪些子任务已经完成”。把不同问题塞进同一种存储会浪费 context，也会让实时控制受延迟影响。",
      "takeaway": "机器人 memory 的设计变量不是只有长度，还包括表示介质、更新频率、压缩损失和进入 policy 的接口。",
      "papers": [
        {
          "label": "PI Memory",
          "url": "https://www.pi.website/research/memory",
          "note": "efficient long- and short-term memory for VLAs"
        }
      ],
      "tags": [
        "Memory",
        "Long Horizon",
        "Video Encoder",
        "Hierarchy"
      ],
      "crossLinks": [
        {
          "kicker": "Origin · 2025",
          "title": "Memory was one hypothesis among many",
          "href": "../2025-building-robots/#chapter-memory-hypotheses",
          "note": "2025 强调先诊断 missing history；2026 把它实现成面向 latency 与 token budget 的多时间尺度模块。"
        }
      ]
    },
    {
      "id": "general-purpose-model",
      "start": 8,
      "end": 8,
      "time": "21:22–25:01",
      "title": "The BERT-to-GPT analogy for robotics",
      "zhTitle": "机器人领域的 BERT → GPT 类比",
      "summary": "Chelsea distinguishes a pretrained model that still needs per-task fine-tuning from a model that works directly from prompts. Compositional generalization adds evidence that the model represents reusable concepts rather than memorized task bundles.",
      "concepts": [
        "pretraining",
        "fine-tuning",
        "out-of-box inference",
        "compositional generalization",
        "foundation model"
      ],
      "why": "“通用”不能只指同一个 checkpoint 可被多次 fine-tune。更强的标准是：一个统一策略直接工作，并能把已学对象、动作、语言与 embodiment 以未见组合重新使用。",
      "takeaway": "generalist 的门槛从“可适配”提高到“可直接使用且可组合”。",
      "papers": [
        {
          "label": "π0.7 paper",
          "url": "https://arxiv.org/abs/2604.15483",
          "note": "steerability, out-of-box tasks, and compositional tests"
        }
      ],
      "tags": [
        "Foundation Model",
        "Out-of-box",
        "Compositionality"
      ]
    },
    {
      "id": "out-of-box-model",
      "start": 9,
      "end": 9,
      "time": "25:02–27:34",
      "title": "Replacing the specialist without losing mastery",
      "zhTitle": "不牺牲专门能力地替代 specialist",
      "summary": "The target is not a broad but mediocre model. π0.7 must retain the speed and robustness that π*0.6 obtained through task-specific RL while serving many tasks from one checkpoint.",
      "concepts": [
        "specialist vs generalist",
        "fine-tuning",
        "distillation",
        "task mastery",
        "deployment cost"
      ],
      "why": "一个 generalist 若每到现场仍需昂贵 fine-tuning，就没有完全改变机器人应用开发成本。反过来，若只展示 breadth 而不比较 specialist 的吞吐量，也无法证明通用化没有稀释能力。",
      "takeaway": "真正的 out-of-box 评价必须用最强 specialist 作基线，而不是只和旧通用模型比较。",
      "papers": [
        {
          "label": "π0.7 overview",
          "url": "https://www.pi.website/blog/pi07",
          "note": "generalist vs RECAP-trained specialist comparison"
        }
      ],
      "tags": [
        "π0.7",
        "Generalist",
        "Specialist",
        "Evaluation"
      ]
    },
    {
      "id": "all-data-context",
      "start": 10,
      "end": 10,
      "time": "27:35–30:19",
      "title": "Use all the data—by telling the model what it means",
      "zhTitle": "利用所有数据，但要告诉模型每条数据意味着什么",
      "summary": "π0.7 mixes high- and low-quality demonstrations, autonomous failures, human video, and web data. Rich context—strategy, quality, duration, subtasks, memory, and visual subgoals—prevents the policy from treating every trajectory as equally desirable.",
      "concepts": [
        "heterogeneous data",
        "metadata conditioning",
        "visual subgoal",
        "world model",
        "steerability",
        "data quality"
      ],
      "why": "naive mixture 会把不同策略、质量和控制方式平均在一起。conditioning 把数据歧义显式化，使失败经验可以贡献动力学与恢复信息，却不必被模型当成理想行为照抄。",
      "takeaway": "数据多样性只有在 context 能解释行为差异时，才会转化为可控的策略能力。",
      "papers": [
        {
          "label": "π0.7 overview",
          "url": "https://www.pi.website/blog/pi07",
          "note": "diverse conditioning and synthetic visual subgoals"
        },
        {
          "label": "π0.7 paper",
          "url": "https://arxiv.org/abs/2604.15483",
          "note": "training mixture and ablations"
        }
      ],
      "tags": [
        "π0.7",
        "World Model",
        "Data",
        "Conditioning"
      ],
      "crossLinks": [
        {
          "kicker": "Origin · 2025",
          "title": "Can a future image guide the VLA?",
          "href": "../2025-building-robots/#chapter-qa-world-model",
          "note": "2025 关注成功数据训练的 world model 会在失败状态 hallucinate；2026 将轻量 world model 接入 visual-subgoal conditioning。"
        }
      ]
    },
    {
      "id": "generalist-beats-specialists",
      "start": 11,
      "end": 11,
      "time": "30:20–31:20",
      "title": "One model against RL-trained specialists",
      "zhTitle": "一个模型对比多个 RL specialist",
      "summary": "π0.7 absorbs autonomous and specialist experience into a unified training mixture, then matches or exceeds specialist throughput and success on espresso, laundry, and box building.",
      "concepts": [
        "experience distillation",
        "multi-task training",
        "normalized throughput",
        "success rate",
        "capability consolidation"
      ],
      "why": "这是“generalist beats specialist”主张的核心证据：比较对象是通过真实机器人 RL 优化过的强基线，指标同时包含速度与成功。它也暗示不同任务经验可能在统一模型中产生正迁移。",
      "takeaway": "部署经验既可提升一个任务，也可作为预训练材料被整合回下一代 generalist。",
      "papers": [
        {
          "label": "π0.7 overview",
          "url": "https://www.pi.website/blog/pi07",
          "note": "quantitative comparison with π*0.6 specialists"
        },
        {
          "label": "π*0.6 / RECAP",
          "url": "https://www.pi.website/blog/pistar06",
          "note": "specialist baseline and experience data source"
        }
      ],
      "tags": [
        "π0.7",
        "RECAP",
        "Distillation",
        "Evaluation"
      ]
    },
    {
      "id": "compositional-generalization",
      "start": 12,
      "end": 12,
      "time": "31:21–37:48",
      "title": "Composing language, objects, tasks, and bodies",
      "zhTitle": "组合语言、物体、任务与机器人身体",
      "summary": "π0.7 is tested on rare object–skill pairings and on task–embodiment pairings absent from robot-specific training. Diversity and metadata ablations probe whether the result comes from the proposed recipe.",
      "concepts": [
        "compositional generalization",
        "cross-embodiment transfer",
        "zero-shot task transfer",
        "equivariance",
        "data ablation"
      ],
      "why": "组合泛化减少了训练集必须穷举的组合数量。不过“未见”需要严格审计：air fryer 后来被发现有三条 episode，说明应报告完全 held-out、极低频与重组概念之间的差别。",
      "takeaway": "比 environment shift 更强的测试，是有意 hold out task × object 或 task × embodiment 的交叉组合。",
      "papers": [
        {
          "label": "π0.7 paper",
          "url": "https://arxiv.org/abs/2604.15483",
          "note": "compositional task and cross-embodiment evaluations"
        }
      ],
      "tags": [
        "π0.7",
        "Generalization",
        "Cross-Embodiment",
        "Ablation"
      ],
      "crossLinks": [
        {
          "kicker": "Origin · 2025",
          "title": "π0.5 in entirely new homes",
          "href": "../2025-building-robots/#chapter-unseen-homes-eval",
          "note": "2025 主要测 environment shift；2026 把测试推进到任务、物体与 embodiment 的 held-out 组合。"
        }
      ]
    },
    {
      "id": "gpt-era",
      "start": 13,
      "end": 13,
      "time": "37:49–39:48",
      "title": "A GPT era without software-speed distribution",
      "zhTitle": "进入 GPT 能力阶段，但不会以软件速度分发",
      "summary": "The capability analogy is a unified model that works across applications. The product analogy breaks because adoption requires hardware, integration, safety, service, and site-specific operations.",
      "concepts": [
        "GPT era",
        "physical distribution",
        "robot deployment",
        "cross-embodiment",
        "production adaptation"
      ],
      "why": "foundation model 可以压缩算法开发成本，却不会消除硬件供应、现场流程、故障维护与安全验证。判断“机器人 GPT 时刻”时，应把 capability breakthrough 与 adoption curve 分开。",
      "takeaway": "模型可能已经跨过通用能力门槛，但物理世界决定了商业扩散仍是一条慢曲线。",
      "papers": [
        {
          "label": "Physical Intelligence layer",
          "url": "https://www.pi.website/blog/partner",
          "note": "real deployment partners and embodiment coverage"
        }
      ],
      "tags": [
        "Deployment",
        "Foundation Model",
        "Industry"
      ]
    },
    {
      "id": "qa-next-decade",
      "start": 14,
      "end": 14,
      "time": "39:49–end",
      "title": "Q&A: data, open source, speed, and the remaining frontier",
      "zhTitle": "问答：数据、开源、速度与剩余前沿",
      "summary": "Chelsea separates capability from distribution, argues that robot experience remains essential, and identifies hardware/data costs, runtime speed, infrastructure, and long-horizon reliability as constraints on broad adoption.",
      "concepts": [
        "robot experience",
        "open source",
        "human video transfer",
        "policy speed",
        "teleoperation ceiling",
        "research careers"
      ],
      "why": "web 与人类视频提供语义和视觉先验，但动作能力仍需要真实 embodiment 经验；开源权重也不自动带来数据、机器人和评测设施。这些系统约束决定小团队应优先从强模型 fine-tune，而不是复制 frontier pretraining。",
      "takeaway": "未来数据集将越来越多来自部署中的机器人尝试，但这些经验仍需奖励、纠正和基础设施才能变成学习。",
      "papers": [
        {
          "label": "Human-to-robot transfer",
          "url": "https://www.pi.website/research/human_to_robot",
          "note": "how human video helps after sufficient robot-scale pretraining"
        },
        {
          "label": "OpenPI",
          "url": "https://www.pi.website/blog/openpi",
          "note": "open models, code, and practical adaptation limits"
        }
      ],
      "tags": [
        "Q&A",
        "Data",
        "Open Source",
        "Deployment"
      ]
    }
  ],
  "segments": [
    {
      "time": "00:00:00",
      "speaker": "Chelsea Finn · summarized",
      "en": "A year after presenting π0 and π0.5, Chelsea reframes the frontier. Robots can now perform many striking manipulation tasks; the harder benchmark is whether a general-purpose system can be trusted to do useful work in ordinary environments without constant human supervision.",
      "id": "seg-00",
      "index": 0,
      "zh": "在展示 π0 与 π0.5 一年后，Chelsea 重新定义了研究前沿。机器人已经能完成许多令人惊艳的操作任务；更难的基准，是通用系统能否在日常环境中可靠地做有价值的工作，而且不需要人持续看护。",
      "chapterId": "state-of-pi"
    },
    {
      "time": "00:01:23",
      "speaker": "Chelsea Finn · summarized",
      "en": "Digital AI products can remain useful while a person catches occasional errors. A physical agent acts directly on the world, so usefulness depends much more strongly on autonomy and a low error rate. Generality and real-world reliability therefore become separate, equally necessary axes.",
      "id": "seg-01",
      "index": 1,
      "zh": "数字 AI 即使偶尔出错，只要用户能识别和纠正，仍可能很有用；物理智能体却会直接改变现实世界。因此，实用性更依赖长期自治和极低错误率。通用性与现实可靠性成为两条独立、同样必要的坐标轴。",
      "chapterId": "useful-real-world"
    },
    {
      "time": "00:05:11",
      "speaker": "Chelsea Finn · summarized",
      "en": "Espresso exposes the reliability problem: precise forceful insertion, liquid handling, timing, cleanup, and a long chain of dependencies. Manual data iteration helps at first, but a human-curated loop becomes the bottleneck before the system reaches the 90–99% regime needed for deployment.",
      "id": "seg-02",
      "index": 2,
      "zh": "浓缩咖啡把可靠性难题暴露得很完整：需要精确且有力的插入动作、液体操作、时间判断、清洁，以及一长串相互依赖的步骤。人工迭代数据在早期有效，但在系统逼近部署所需的 90–99% 可靠性之前，人工精选循环本身就会成为瓶颈。",
      "chapterId": "reliability-problem"
    },
    {
      "time": "00:07:43",
      "speaker": "Chelsea Finn · summarized",
      "en": "Naively importing language-model RL is physically expensive. One million one-minute trials would consume roughly 700 robot-days. A viable robotics recipe must extract more learning signal from each real attempt, reduce wasted rollouts, and reuse evaluation knowledge across tasks and prompts.",
      "id": "seg-03",
      "index": 3,
      "zh": "把语言模型的强化学习配方原样搬到机器人上，在物理上代价高昂。一百万次、每次一分钟的尝试大约需要 700 个机器人日。可行的机器人 RL 必须从每次真实尝试中提取更多信号，减少无效 rollout，并在任务和 prompt 之间复用评价知识。",
      "chapterId": "rl-for-robotics"
    },
    {
      "time": "00:09:35",
      "speaker": "Chelsea Finn · summarized",
      "en": "Human interventions rescue trajectories before the robot spends minutes in dead ends and teach recovery from the model's own state distribution. A general value model estimates progress across different tasks, amortizing the cost of repeated rollouts instead of estimating every prompt from scratch.",
      "id": "seg-04",
      "index": 4,
      "zh": "人类 intervention 会在机器人陷入死路之前接管，并示范如何从模型自己造成的状态中恢复。一个跨任务的通用价值模型估计任务进展，把重复 rollout 的成本摊到不同任务上，而不是为每个 prompt 从头估计价值。",
      "chapterId": "learning-from-failures"
    },
    {
      "time": "00:12:43",
      "speaker": "Chelsea Finn · summarized",
      "en": "The resulting improvement loop begins with a broadly pretrained VLA, adds demonstrations, gathers autonomous attempts with corrections, learns reward or value signals, and conditions the policy on advantage. The research object is no longer a frozen dataset but a deployment system that creates its next training data.",
      "id": "seg-05",
      "index": 5,
      "zh": "由此形成的改进闭环从广泛预训练的 VLA 开始，加入 demonstrations，收集带纠正的自主尝试，学习 reward 或 value 信号，再用 advantage 条件化策略。研究对象不再是一份冻结的数据集，而是一个会生成下一轮训练数据的部署系统。",
      "chapterId": "self-improvement-loop"
    },
    {
      "time": "00:14:21",
      "speaker": "Chelsea Finn · summarized",
      "en": "Reliability is measured as sustained operation, not a selected demo. The espresso policy ran for roughly 13 hours; related policies folded unfamiliar laundry and assembled real packaging. RECAP-style post-training increased both success and speed, with about 2× throughput attributed to the RL stage in the talk.",
      "id": "seg-06",
      "index": 6,
      "zh": "可靠性要用持续运行衡量，而不是挑选一次成功 demo。浓缩咖啡策略连续运行约 13 小时；相关策略还处理了未见衣物和真实包装盒。演讲把成功率与速度一起纳入评价，并报告 RL 阶段带来了约 2 倍吞吐量提升。",
      "chapterId": "thirteen-hour-autonomy"
    },
    {
      "time": "00:17:36",
      "speaker": "Chelsea Finn · summarized",
      "en": "Long, non-repetitive work requires knowing what has already happened. PI combines an efficient short-term video memory of about ten seconds with compressed textual notes for events across minutes or hours. This supports autonomous multi-step kitchen cleaning without feeding the full camera history back into the VLA.",
      "id": "seg-07",
      "index": 7,
      "zh": "非重复的长任务需要知道已经发生了什么。PI 把约十秒的高效短期视频记忆，与覆盖数分钟到数小时事件的压缩文本笔记结合起来。这样，VLA 不必重新读取完整摄像历史，也能自主完成多步骤厨房清洁。",
      "chapterId": "multi-timescale-memory"
    },
    {
      "time": "00:21:22",
      "speaker": "Chelsea Finn · summarized",
      "en": "Chelsea places robotics on the trajectory from task-specific training, to pretrained models that still require fine-tuning, to models that work directly from prompts. The target adds a second requirement: compositional generalization, where concepts and skills can be recombined without collecting every possible pairing.",
      "id": "seg-08",
      "index": 8,
      "zh": "Chelsea 把机器人模型放到一条熟悉的演进线上：从任务专用训练，到仍需微调的预训练模型，再到直接通过 prompt 工作的模型。机器人还多一个要求：组合泛化，也就是不用收集所有可能组合，就能重组概念与技能。",
      "chapterId": "general-purpose-model"
    },
    {
      "time": "00:25:02",
      "speaker": "Chelsea Finn · summarized",
      "en": "π0.5 and task-specialized policies still obtained their best results after downstream fine-tuning. The next milestone is a single out-of-the-box policy that retains the breadth of pretraining while reaching the dexterity, speed, and robustness previously obtained only by specialist post-training.",
      "id": "seg-09",
      "index": 9,
      "zh": "π0.5 和任务专用策略要达到最好结果，仍依赖下游 fine-tuning。下一里程碑是一套开箱即用的单一策略：既保留预训练的广度，也达到过去只有 specialist post-training 才能得到的灵巧性、速度与鲁棒性。",
      "chapterId": "out-of-box-model"
    },
    {
      "time": "00:27:35",
      "speaker": "Chelsea Finn · summarized",
      "en": "π0.7 trains on demonstrations, lower-quality robot data, autonomous rollouts, human video, and web data. Diverse conditioning disambiguates how each example should be imitated: instructions, subtasks, quality and duration metadata, memory, strategy, and optional visual subgoals generated by a lightweight world model.",
      "id": "seg-10",
      "index": 10,
      "zh": "π0.7 同时训练于 demonstrations、较低质量机器人数据、自主 rollout、人类视频和 web 数据。多样化条件告诉模型每条数据应如何被利用：指令、子任务、质量与时长 metadata、memory、策略，以及由轻量 world model 生成的可选视觉子目标。",
      "chapterId": "all-data-context"
    },
    {
      "time": "00:30:20",
      "speaker": "Chelsea Finn · summarized",
      "en": "The same π0.7 checkpoint matches or exceeds the task-specific π*0.6 specialists on laundry, espresso, and box building. The important comparison is not merely breadth: deployment experience from specialist training is distilled into a unified model without giving up task-level throughput and success.",
      "id": "seg-11",
      "index": 11,
      "zh": "同一个 π0.7 checkpoint 在叠衣、咖啡和折盒任务上匹配或超过任务专用的 π*0.6。关键不只是覆盖面更广：specialist 训练期间产生的部署经验被蒸馏回统一模型，同时保住了单任务吞吐量与成功率。",
      "chapterId": "generalist-beats-specialists"
    },
    {
      "time": "00:31:21",
      "speaker": "Chelsea Finn · summarized",
      "en": "The talk tests composition across language and objects, and across tasks and robot bodies. π0.7 handles a scarcely represented appliance and transfers clothing-folding behavior to an industrial arm that had no folding data. Diverse-data and metadata-conditioning ablations are presented as evidence for the mechanism.",
      "id": "seg-12",
      "index": 12,
      "zh": "演讲从两类组合测试泛化：language × object，以及 task × robot body。π0.7 能操作训练集中极少出现的 appliance，也能把叠衣技能迁移到没有叠衣数据的工业机械臂。多样数据与 metadata conditioning 的消融被用来解释这种能力来源。",
      "chapterId": "compositional-generalization"
    },
    {
      "time": "00:37:49",
      "speaker": "Chelsea Finn · summarized",
      "en": "Chelsea argues that robotic foundation models have entered a GPT-like capability phase: one model can work across skills, scenes, and embodiments, while deployment partners adapt it to production workflows. Distribution will remain slower than software because capability must travel through physical hardware.",
      "id": "seg-13",
      "index": 13,
      "zh": "Chelsea 认为机器人 foundation model 已进入类似 GPT 的能力阶段：同一模型跨技能、场景与 embodiment 工作，部署伙伴再把它适配到生产流程。但物理硬件决定了分发速度不可能像纯软件那样快。",
      "chapterId": "gpt-era"
    },
    {
      "time": "00:39:49",
      "speaker": "Chelsea Finn · summarized",
      "en": "The Q&A sharpens the limits: physical deployment slows any ChatGPT-style adoption moment; robot experience remains irreplaceable even when human video and web data help; open source faces embodied-data costs; speed may require learning beyond slow teleoperation; and useful systems still need better reliability, infrastructure, and long-horizon behavior.",
      "id": "seg-14",
      "index": 14,
      "zh": "问答进一步限定了结论：物理部署会拖慢类似 ChatGPT 的普及时刻；即使人类视频和 web 数据有帮助，机器人自身经验仍不可替代；开源会受到具身数据成本限制；速度可能要求策略超越缓慢遥操作；可靠性、基础设施与长程行为仍有大量未解问题。",
      "chapterId": "qa-next-decade"
    }
  ]
};
