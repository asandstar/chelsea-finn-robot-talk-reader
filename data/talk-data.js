window.TALK_DATA = {
  "meta": {
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
      {
        "label": "π0",
        "url": "https://www.physicalintelligence.company/download/pi0.pdf"
      },
      {
        "label": "π0.5",
        "url": "https://www.physicalintelligence.company/download/pi05.pdf"
      },
      {
        "label": "Hi Robot",
        "url": "https://www.physicalintelligence.company/download/hirobot.pdf"
      },
      {
        "label": "FAST",
        "url": "https://www.physicalintelligence.company/download/fast.pdf"
      }
    ]
  },
  "chapters": [
    {
      "id": "general-purpose",
      "start": 0,
      "end": 3,
      "time": "00:00–01:51",
      "title": "Why general-purpose robots?",
      "zhTitle": "为什么要做通用机器人",
      "summary": "Chelsea frames robotics as an application-by-application engineering problem and proposes a foundation-model style alternative: one generalist policy that can be adapted across robots, tasks, and environments.",
      "concepts": [
        "robot foundation model",
        "generalist vs specialist",
        "application-specific engineering",
        "transfer learning"
      ],
      "why": "这几分钟定义了 PI 的研究纲领：把机器人开发的基本单位从“一个任务一套系统”改成“一个广泛预训练的通用策略，再适配具体任务”。后面 π0、π0.5 与 Hi Robot 都是在补足这条路线的不同能力缺口。",
      "quote": "develop a general-purpose model that can enable any robot to do any task in any environment",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "generalist VLA / cross-embodiment pretraining"
        }
      ],
      "tags": [
        "Foundation Model",
        "π0"
      ]
    },
    {
      "id": "scale-data",
      "start": 4,
      "end": 8,
      "time": "01:52–04:35",
      "title": "Scale is necessary, but data type matters",
      "zhTitle": "规模重要，但什么数据更重要",
      "summary": "Industrial automation has scale without behavioral diversity; YouTube has semantic diversity without robot actions; simulation scales but has a reality gap. PI therefore emphasizes diverse embodied interaction data.",
      "concepts": [
        "data scaling",
        "behavioral diversity",
        "embodiment gap",
        "sim-to-real",
        "teleoperation",
        "real-robot data"
      ],
      "why": "这是理解机器人 foundation model 数据瓶颈的核心。机器人没有现成的“互联网级 action corpus”。真正需要的数据同时包含视觉、机器人状态、动作和后续物理结果，且还要覆盖足够多的任务和环境。",
      "quote": "you need scale, but it's not sufficient for the entire problem",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "multi-robot data + Internet-pretrained VLM"
        }
      ],
      "tags": [
        "Data",
        "Scaling",
        "Embodiment"
      ]
    },
    {
      "id": "laundry-curriculum",
      "start": 9,
      "end": 16,
      "time": "04:36–08:30",
      "title": "Laundry as a long-horizon dexterity stress test",
      "zhTitle": "叠衣服为什么是长程灵巧操作压力测试",
      "summary": "The team starts from a single flat shirt, then adds crumpling, variable garments, a laundry basket, and sequential folding. Performance collapses as state variability and recovery demands increase.",
      "concepts": [
        "deformable-object manipulation",
        "imitation learning",
        "50 Hz control",
        "curriculum",
        "long-horizon manipulation",
        "error recovery"
      ],
      "why": "衣物是高维可变形物体，状态很难用简单 pose 表示。任务持续十分钟左右，任何中间错误都可能影响后续步骤，因此它同时测试 perception、dexterity、closed-loop recovery 和 long-horizon robustness。",
      "quote": "we frequently were getting 0% success rate",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "laundry folding is one of π0's flagship dexterous tasks"
        }
      ],
      "tags": [
        "Long Horizon",
        "Dexterity",
        "Imitation Learning",
        "π0"
      ]
    },
    {
      "id": "memory-hypotheses",
      "start": 17,
      "end": 18,
      "time": "08:31–09:36",
      "title": "The failure-hypothesis moment: memory, hierarchy, control, data",
      "zhTitle": "失败归因时刻：memory、hierarchy、control、data",
      "summary": "After months of near-zero success, the team considers many hypotheses: memory/history, longer training, end-effector control, calibration, extra conditioning, hierarchy, higher-resolution images, and interventions.",
      "concepts": [
        "history dependence",
        "memory",
        "hierarchical policy",
        "credit assignment",
        "control representation",
        "data intervention"
      ],
      "why": "对研究方法很重要：看到长程任务失败时，不能自动把原因归结为 memory。这里 memory 只是多个可检验 hypothesis 之一。真正的 breakthrough 随后来自训练数据组织方式。这提示做 robot memory 研究时要先证明失败确实来自 missing history。",
      "quote": "maybe the robot needs memory, needs history in some way",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "the eventual system improved primarily through pretraining + post-training"
        }
      ],
      "tags": [
        "Memory",
        "Hierarchy",
        "Research Method"
      ]
    },
    {
      "id": "posttraining-breakthrough",
      "start": 19,
      "end": 22,
      "time": "09:37–11:24",
      "title": "The breakthrough: pretraining + curated post-training",
      "zhTitle": "真正的突破：预训练 + 精选数据后训练",
      "summary": "Broad pretraining provides coverage, while a smaller curated and strategy-consistent demonstration set sharpens task execution. Five-item folding falls from about 20 minutes to 12 minutes as curation improves.",
      "concepts": [
        "pretraining",
        "post-training",
        "data curation",
        "behavior cloning",
        "strategy consistency",
        "task specialization"
      ],
      "why": "这段把 VLA 的训练范式和 LLM 的 pretrain/post-train recipe 对齐。规模数据负责 breadth，高质量一致数据负责 reliability。后面的 π0 把这种 recipe 放到更强的 VLM-backed generalist model 上。",
      "quote": "pre-train on all the data and then fine-tune on a curated, consistent, high-quality set",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "specialized post-training for difficult downstream tasks"
        }
      ],
      "tags": [
        "Post-training",
        "Data",
        "π0"
      ]
    },
    {
      "id": "pi0-architecture",
      "start": 23,
      "end": 28,
      "time": "11:25–14:36",
      "title": "π0: VLM backbone + action expert + flow matching",
      "zhTitle": "π0 架构：VLM backbone、action expert 与 flow matching",
      "summary": "π0 starts from a 3B PaliGemma VLM, adds robot state, and predicts chunks of 50 continuous actions using a flow-matching action head. Pretraining over all robot data improves speed, generalization to new clothes, and recovery behavior.",
      "concepts": [
        "Vision-Language-Action model",
        "PaliGemma",
        "action chunking",
        "flow matching",
        "continuous control",
        "closed-loop policy"
      ],
      "why": "这是从“普通 imitation policy”升级成 foundation VLA 的关键节点。VLM 提供语义与视觉先验，action expert 负责高频连续控制，action chunking 让模型一次规划短时间段的动作，同时仍然通过新观测不断闭环修正。",
      "quote": "predict a chunk of 50 actions into the future",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "architecture and flow-matching action expert"
        },
        {
          "label": "π0 research page",
          "url": "https://www.physicalintelligence.company/blog/pi0",
          "note": "videos and accessible overview"
        }
      ],
      "tags": [
        "VLA",
        "π0",
        "Flow Matching",
        "Action Chunking"
      ]
    },
    {
      "id": "ablation-transfer",
      "start": 29,
      "end": 34,
      "time": "14:37–17:33",
      "title": "Ablations, task transfer, and cross-embodiment adaptation",
      "zhTitle": "消融、任务迁移与跨机器人适配",
      "summary": "Ablations show both pretraining and curated post-training matter. The same recipe transfers beyond laundry to table cleanup, coffee, box assembly, candle lighting, and a robot Chelsea had never physically seen.",
      "concepts": [
        "ablation study",
        "partial-progress evaluation",
        "cross-task transfer",
        "cross-embodiment transfer",
        "fine-tuning"
      ],
      "why": "这部分把“好看 demo”推进到可检验的科学主张。消融证明性能提升确实依赖 recipe，跨任务与跨 embodiment 则对应 foundation model 最核心的复用价值。",
      "quote": "nothing in this recipe is specific to laundry",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "multi-task and multi-robot evaluation"
        }
      ],
      "tags": [
        "Evaluation",
        "Transfer",
        "Cross-Embodiment",
        "π0"
      ]
    },
    {
      "id": "open-world-data",
      "start": 35,
      "end": 39,
      "time": "17:34–20:10",
      "title": "From in-environment success to open-world generalization",
      "zhTitle": "从见过的环境走向 open-world generalization",
      "summary": "The next limitation is environment shift. PI collects mobile-manipulation data across over 100 rooms and mixes it with static robot data, high-level semantics, and web data. The target mobile data is only a small fraction of the total mixture.",
      "concepts": [
        "distribution shift",
        "environment generalization",
        "mobile manipulation",
        "heterogeneous co-training",
        "data mixture"
      ],
      "why": "π0.5 的科学问题在这里出现：训练环境和测试环境不同。真正有用的 household robot 不能依赖在每个新家重新收大量数据，因此核心指标从 task success 转向 unseen-home generalization。",
      "quote": "how can robots actually succeed in places that they've never been?",
      "papers": [
        {
          "label": "π0.5 paper",
          "url": "https://www.physicalintelligence.company/download/pi05.pdf",
          "note": "open-world generalization and heterogeneous co-training"
        }
      ],
      "tags": [
        "π0.5",
        "Generalization",
        "Data",
        "Mobile Manipulation"
      ]
    },
    {
      "id": "knowledge-insulation",
      "start": 40,
      "end": 42,
      "time": "20:11–21:32",
      "title": "Preserving language ability while learning actions",
      "zhTitle": "学习动作时如何保住 VLM 的语言能力",
      "summary": "A randomly initialized action head can damage pretrained VLM capabilities. The π0.5 recipe adds tokenized-action supervision and blocks harmful gradient flow, improving language-following from roughly 20% to 80% in the described experiment.",
      "concepts": [
        "catastrophic interference",
        "gradient flow",
        "action tokenization",
        "knowledge insulation",
        "multi-objective training"
      ],
      "why": "VLA 训练并不只是给 VLM 多接一个 action head。机器人控制损失可能改坏原有的语义能力。π0.5 把这个问题显式变成 optimization / representation transfer 问题，这也是 VLA 架构设计非常核心的一层。",
      "quote": "prevent this deterioration",
      "papers": [
        {
          "label": "π0.5 paper",
          "url": "https://www.physicalintelligence.company/download/pi05.pdf",
          "note": "hybrid discrete-action pretraining + flow-matching post-training"
        },
        {
          "label": "Knowledge Insulation note",
          "url": "https://www.physicalintelligence.company/download/pi05_KI.pdf",
          "note": "gradient-flow details"
        },
        {
          "label": "FAST paper",
          "url": "https://www.physicalintelligence.company/download/fast.pdf",
          "note": "action tokenization used by π0.5 pretraining"
        }
      ],
      "tags": [
        "π0.5",
        "Action Tokenization",
        "Optimization",
        "FAST"
      ]
    },
    {
      "id": "unseen-homes-eval",
      "start": 43,
      "end": 51,
      "time": "21:33–25:35",
      "title": "Unseen homes: evaluation, diversity scaling, and failure modes",
      "zhTitle": "新家庭测试：泛化、数据多样性与失败模式",
      "summary": "The robot is tested in three unseen Airbnbs, with new layouts and objects. Quantitative ablations show the broader mixture and more diverse locations improve performance. Success is around 80%, leaving reliability, partial observability, planning, and speed as open problems.",
      "concepts": [
        "out-of-distribution evaluation",
        "generalization gap",
        "data diversity curve",
        "failure analysis",
        "partial observability",
        "long-term planning"
      ],
      "why": "这段很适合学习 benchmark 思维：泛化不能只靠几个 demo 宣称，需要 unseen environments、数据消融、环境数量 scaling 和 failure taxonomy。Chelsea 也明确指出 partial observability 与 long-term planning 仍未解决。",
      "quote": "it's really helpful to actually measure how well these things work",
      "papers": [
        {
          "label": "π0.5 paper",
          "url": "https://www.physicalintelligence.company/download/pi05.pdf",
          "note": "novel-home evaluation and generalization analysis"
        }
      ],
      "tags": [
        "π0.5",
        "Evaluation",
        "Generalization",
        "Partial Observability"
      ]
    },
    {
      "id": "hi-robot",
      "start": 52,
      "end": 60,
      "time": "25:36–30:04",
      "title": "Hi Robot: open-ended prompts, hierarchy, and synthetic relabeling",
      "zhTitle": "Hi Robot：开放语言、层级策略与合成重标注",
      "summary": "A high-level VLM policy turns open-ended user requests into language subtasks, while a low-level VLA executes them. Existing robot trajectories are relabeled with synthetic hypothetical user prompts to scale interaction supervision.",
      "concepts": [
        "hierarchical VLA",
        "task decomposition",
        "situated language",
        "synthetic relabeling",
        "high-level policy",
        "low-level control"
      ],
      "why": "它把 VLA 从固定 instruction following 推向 situated interaction。高层模型需要结合当前场景、用户约束和任务进度产生下一子任务，低层模型负责可靠执行。这里的 hierarchy 也为后续 long-horizon memory / agent architecture 提供了很自然的接口。",
      "quote": "break down the prompt into intermediate verbal responses and intermediate atomic language commands",
      "papers": [
        {
          "label": "Hi Robot paper",
          "url": "https://www.physicalintelligence.company/download/hirobot.pdf",
          "note": "hierarchical VLA and synthetic prompt generation"
        },
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "low-level VLA used by Hi Robot"
        }
      ],
      "tags": [
        "Hi Robot",
        "Hierarchy",
        "Language",
        "Synthetic Data"
      ]
    },
    {
      "id": "wrapup",
      "start": 61,
      "end": 64,
      "time": "30:05–31:28",
      "title": "The research program in one slide",
      "zhTitle": "整条研究路线的总结",
      "summary": "Chelsea summarizes three frontiers: dexterous long-horizon behavior, unseen-environment generalization, and open-ended interaction. The broader claim is that real-world scale helps, but research remains necessary before open-world deployment is reliable.",
      "concepts": [
        "capability",
        "generalization",
        "interaction",
        "open-world robotics",
        "research agenda"
      ],
      "why": "这三层可以直接作为阅读 PI 系列论文的索引：π0 偏 capability，π0.5 偏 open-world generalization，Hi Robot 偏 language-mediated interaction。它们合起来仍然没有完全解决 memory、planning、online learning 和 safety。",
      "quote": "large-scale data in the real world is really helpful ... necessary but not sufficient",
      "papers": [
        {
          "label": "π0",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "capability"
        },
        {
          "label": "π0.5",
          "url": "https://www.physicalintelligence.company/download/pi05.pdf",
          "note": "generalization"
        },
        {
          "label": "Hi Robot",
          "url": "https://www.physicalintelligence.company/download/hirobot.pdf",
          "note": "interaction"
        }
      ],
      "tags": [
        "Research Agenda",
        "π0",
        "π0.5",
        "Hi Robot"
      ]
    },
    {
      "id": "qa-posttraining-rl",
      "start": 65,
      "end": 72,
      "time": "31:29–34:16",
      "title": "Q&A: what is high-quality post-training data, and where does RL fit?",
      "zhTitle": "Q&A：高质量后训练数据是什么，RL 放在哪里",
      "summary": "Chelsea emphasizes consistent, efficient, reliable strategies in demonstrations. She expects online reinforcement learning to improve both success rate and speed beyond imitation-only training.",
      "concepts": [
        "demonstration quality",
        "online data",
        "reinforcement learning",
        "imitation learning",
        "post-training"
      ],
      "why": "这段把未来 VLA post-training 的路线说得很清楚：BC 提供起点，online interaction 让机器人接触自己的 state distribution，再通过 RL 或相关自改进方法提升 reliability。",
      "quote": "reinforcement learning can play a very large role ... in post-training",
      "papers": [
        {
          "label": "π0 paper",
          "url": "https://www.physicalintelligence.company/download/pi0.pdf",
          "note": "imitation/pretraining baseline context"
        }
      ],
      "tags": [
        "RL",
        "Post-training",
        "Online Learning"
      ]
    },
    {
      "id": "qa-world-model",
      "start": 73,
      "end": 77,
      "time": "34:17–37:22",
      "title": "Q&A: VLA × world models, plus deployment infrastructure",
      "zhTitle": "Q&A：VLA × World Model，以及部署基础设施",
      "summary": "Chelsea describes predicting an intermediate future/subgoal image before action as one natural VLA–world-model connection, while warning about distribution shift and hallucinated successful futures. She also stresses real-time inference and multimodal data infrastructure.",
      "concepts": [
        "world model",
        "subgoal prediction",
        "model bias",
        "out-of-distribution actions",
        "real-time inference",
        "multimodal infrastructure"
      ],
      "why": "这里给出了一个很重要的区分：world model 只有在能正确预测 policy 实际会访问的失败/偏离状态时才真正有决策价值。只在成功 demonstration 上学到的 predictive model，拿来评估错误动作时可能非常不可靠。",
      "quote": "the world model will hallucinate a video of completing the task successfully",
      "papers": [],
      "tags": [
        "World Model",
        "VLA",
        "Infrastructure"
      ]
    },
    {
      "id": "qa-retrieval-open-source",
      "start": 78,
      "end": 87,
      "time": "37:23–40:16",
      "title": "Q&A: retrieval, model size, and open-source infrastructure",
      "zhTitle": "Q&A：检索、模型规模与开源基础设施",
      "summary": "Chelsea is cautious about retrieval-based division of labor because models may ignore retrieved information. She highlights underdeveloped robot-side infrastructure and open-source opportunities in data, models, fine-tuning, and tooling.",
      "concepts": [
        "retrieval-augmented systems",
        "model capacity",
        "robot runtime",
        "open-source robotics",
        "fine-tuning infrastructure"
      ],
      "why": "对于 robot memory 也有直接启发：外挂 memory / retrieval 并不会自动被 policy 正确使用。真正难点包括写什么、何时检索、检索后模型是否信任、以及 retrieved state 如何进入 action generation。",
      "quote": "sometimes the model will ignore the retrieved content",
      "papers": [],
      "tags": [
        "Retrieval",
        "Memory",
        "Infrastructure",
        "Open Source"
      ]
    },
    {
      "id": "qa-synthetic",
      "start": 88,
      "end": 92,
      "time": "40:17–42:26",
      "title": "Q&A: synthetic data, simulation, and self-improvement",
      "zhTitle": "Q&A：合成数据、仿真与机器人自我改进",
      "summary": "Real robot data remains indispensable. Chelsea sees simulation as especially useful for scalable evaluation, while arguing that the closer robotics analogue of LLM synthetic data may be robot-generated online experience through reinforcement learning.",
      "concepts": [
        "synthetic data",
        "simulation",
        "evaluation scaling",
        "self-generated experience",
        "online RL"
      ],
      "why": "这是非常值得记的一句话：把 LLM 的 synthetic data 简单类比为 robotics simulation 会漏掉“模型自己产生训练分布”的关键。在机器人里，更接近的对应物可能是自主尝试、失败和纠正形成的 online experience。",
      "quote": "the analog of synthetic data in language models is ... closer to something like reinforcement learning",
      "papers": [],
      "tags": [
        "Synthetic Data",
        "Simulation",
        "RL",
        "Evaluation"
      ]
    },
    {
      "id": "qa-academia-fast",
      "start": 93,
      "end": 97,
      "time": "42:27–44:52",
      "title": "Q&A: academia vs industry, then FAST action tokenization",
      "zhTitle": "Q&A：学术界与工业界，以及 FAST action tokenizer",
      "summary": "Academia has lower data/eval/compute throughput but can attack algorithmic questions; industry can study scale. The final architecture question points to FAST, which compresses high-frequency action sequences into tokens suitable for autoregressive VLA training.",
      "concepts": [
        "research resource regimes",
        "scaling experiments",
        "action tokenization",
        "DCT compression",
        "autoregressive VLA"
      ],
      "why": "FAST 回答了一个基础架构问题：语言模型天然处理离散 token，而机器人动作是高频连续信号。怎样把动作表示成适合 Transformer 学习的序列，会直接影响训练效率、动作精度和跨 embodiment 泛化。",
      "quote": "we tokenized the actions ... take a look at the FAST tokenizer paper",
      "papers": [
        {
          "label": "FAST paper",
          "url": "https://www.physicalintelligence.company/download/fast.pdf",
          "note": "frequency-space action sequence tokenization"
        }
      ],
      "tags": [
        "FAST",
        "Action Tokenization",
        "Autoregressive VLA"
      ]
    }
  ],
  "segments": [
    {
      "time": "00:00:00",
      "speaker": "Chelsea Finn",
      "en": "Hi everyone. I'm really excited to talk about developing general-purpose robots and how we might truly develop and bring intelligence into the physical world. So, to start off, I'd like to talk about this problem, which is that if you want to truly solve a robotics application, you essentially need to build an entire company around that application. You need to build a different company for logistics, for wet lab automation, for robots in kitchens, for surgical robots, and so on.",
      "id": "seg-00",
      "index": 0,
      "zh": "大家好。我很兴奋能和大家聊聊如何开发通用机器人，以及我们怎样真正把智能带到物理世界中。先从一个现实问题讲起：如果你想真正解决一个机器人应用，往往几乎需要围绕这个应用建立一整家公司。物流、湿实验室自动化、厨房机器人、手术机器人等领域，都像是需要各自独立的一套公司和技术栈。",
      "chapterId": "general-purpose"
    },
    {
      "time": "00:00:31",
      "speaker": "Chelsea Finn",
      "en": "And this is really, really hard to do because that company needs to make new hardware, develop custom software, design unique movement primitives for that application, handle edge cases, and so on. And you have to do all of that from scratch if you want to solve a robotics problem. As a result, a lot of robotics companies haven't been very successful in actually bringing robots into the physical world successfully in our daily lives.",
      "id": "seg-01",
      "index": 1,
      "zh": "这件事非常困难，因为公司需要制造新的硬件、开发定制软件、为特定应用设计独有的运动原语、处理各种边缘情况等等。每解决一个新的机器人问题，很多环节都得从头开始。因此，很多机器人公司至今仍很难真正让机器人成功进入我们的日常物理世界。",
      "chapterId": "general-purpose"
    },
    {
      "time": "00:00:57",
      "speaker": "Chelsea Finn",
      "en": "I co-founded a company called Physical Intelligence that's trying to solve this problem. In particular, we're trying to develop a general-purpose model that can enable any robot to do any task in any environment. We think that this sort of generalist model may work better and be easier to use than purpose-built models, just like we've seen in the development of foundation models for language and other applications.",
      "id": "seg-02",
      "index": 2,
      "zh": "我共同创办了 Physical Intelligence，希望解决这个问题。我们的目标是开发一种通用模型，让任何机器人都能在任何环境里完成任何任务。我们认为，这类通才模型可能比专用模型更有效，也更容易使用，就像语言等领域的基础模型已经展现出的趋势一样。",
      "chapterId": "general-purpose"
    },
    {
      "time": "00:01:24",
      "speaker": "Chelsea Finn",
      "en": "For example, if you want to build a coding assistant, you don't nowadays develop something specifically for coding; you develop and build on models that were trained on large amounts of data, not just on code. Essentially, this is the problem of trying to develop these sorts of foundation models and bring this sort of intelligence into the physical world rather than the digital world where they largely are today. So how do we do this? In this talk, I'd like to talk about how we go about doing this.",
      "id": "seg-03",
      "index": 3,
      "zh": "例如，现在如果你想做一个编程助手，通常不会只为写代码单独训练一个模型，而会建立在经过海量、多样数据训练的通用模型之上，而这些数据远不只包含代码。我们要解决的，本质上就是如何把这种基础模型式的智能从今天主要存在的数字世界带进物理世界。这场演讲会介绍我们是怎样尝试做到这一点的。",
      "chapterId": "general-purpose"
    },
    {
      "time": "00:01:52",
      "speaker": "Chelsea Finn",
      "en": "If we were to take a lesson from language models, we know that language models have taught us the importance of scale. So one possible conclusion would be that perhaps scale is the most important ingredient for developing these models. If you were to say this conclusion is true, then you might look to certain data sources for large-scale data. For example, we might look at data from industrial automation, where you get tons and tons of data of robots doing tasks over and over again like this. But this sort of data isn't going to allow robots to go into disaster zones, make a sandwich, or bag groceries. So this massive scale doesn't have the diversity of behaviors that we need in order to solve this general problem.",
      "id": "seg-04",
      "index": 4,
      "zh": "如果从语言模型吸取经验，一个显而易见的结论是规模很重要。于是我们可能会认为，规模就是开发这类模型最重要的要素。如果沿着这个思路，可以去寻找大规模数据源，例如工业自动化中机器人日复一日重复执行任务所产生的海量数据。但这类数据无法直接教会机器人进入灾区、做三明治或装袋杂货。它拥有规模，却缺少解决通用问题所需要的行为多样性。",
      "chapterId": "scale-data"
    },
    {
      "time": "00:02:42",
      "speaker": "Chelsea Finn",
      "en": "Alternatively, maybe we look at data from YouTube, which has also a massive data source and many videos of humans doing tasks that could be useful for training robots. But at the same time, we don't learn how to write by watching other people write, and we don't become expert tennis players by watching Wimbledon. And so, even though there's a massive scale of data here, it's very challenging to use, and there's also a gap between the embodiment of robots and humans.",
      "id": "seg-05",
      "index": 5,
      "zh": "另一种可能是利用 YouTube。那里有海量人类执行任务的视频，看起来很适合训练机器人。但我们并不会只靠看别人写字就学会写字，也不会只看温网就变成网球高手。虽然这类数据规模巨大，真正利用起来却很困难，同时人类身体和机器人身体之间还存在明显的 embodiment gap，也就是具身差异。",
      "chapterId": "scale-data"
    },
    {
      "time": "00:03:04",
      "speaker": "Chelsea Finn",
      "en": "Lastly, we might look at data from simulation. You can also get a massive scale of data here, but this data lacks realism and also has a gap from reality. So I think the lesson here is that scale is necessary for developing these models that can generalize in open-world conditions, but they're subordinate to actually solving the problem. So you need scale, but it's not sufficient for the entire problem.",
      "id": "seg-06",
      "index": 6,
      "zh": "最后还可以考虑仿真。仿真同样可以产生极大规模的数据，可它缺少真实感，并且和现实之间存在差距。因此我的结论是：如果希望模型能在开放世界条件下泛化，规模是必要条件，但最终仍然要服从于真正解决问题这一目标。我们需要规模，规模本身还不足以解决全部问题。",
      "chapterId": "scale-data"
    },
    {
      "time": "00:03:28",
      "speaker": "Chelsea Finn",
      "en": "At Physical Intelligence, this is an example of a data episode that we've collected. This is in honor of our first anniversary, which was a few months ago. Here you can see a teleoperator in person who's operating some leader arms to control the robot to light a match and light a candle with the match. With this sort of data, we can train robots to do a variety of different tasks.",
      "id": "seg-07",
      "index": 7,
      "zh": "这里展示的是 Physical Intelligence 收集的一段数据，算是纪念我们几个月前的一周年。可以看到，一位遥操作员通过主臂控制机器人划火柴，再用火柴点燃蜡烛。利用这种真实机器人交互数据，我们可以训练机器人完成各种不同任务。",
      "chapterId": "scale-data"
    },
    {
      "time": "00:03:54",
      "speaker": "Chelsea Finn",
      "en": "So what I'd like to talk about is some of our recent results at trying to develop sort of physical intelligence with large-scale real robot data. I should mention this is large-scale by today's robot standards and arguably a minuscule amount of data compared to the sorts of robot data that we should have in the years to come. In particular, we'll be looking at whether robots can do a variety of dextrous long-horizon tasks, whether robots can succeed in places they've never been, and whether robots can respond to open-ended prompts and interjections. Even if you're not excited about robotics, I think that the lessons that we've learned from trying to address these problems are applicable outside of the physical world.",
      "id": "seg-08",
      "index": 8,
      "zh": "接下来我会介绍我们利用大规模真实机器人数据发展 physical intelligence 的一些近期结果。这里的“大规模”只是相对于今天的机器人研究而言；和未来几年我们真正应该拥有的数据量相比，它可能仍然非常小。我们会看三个问题：机器人能否完成多种灵巧的长程任务，能否在从未到过的地方成功工作，以及能否响应开放式提示和任务中途的插话。即使你并不特别关心机器人，我认为这里得到的经验也能迁移到物理世界之外。",
      "chapterId": "scale-data"
    },
    {
      "time": "00:04:36",
      "speaker": "Chelsea Finn",
      "en": "So, can we develop robots that can complete dextrous long-horizon tasks? In particular, in this first part, I'd like to talk about how we trained a Pi Zero foundation model to do this task, which is to unload a dryer and fold laundry. To date, I think this is the most impressive thing that I've seen a robot do in the physical world. It's really hard.",
      "id": "seg-09",
      "index": 9,
      "zh": "第一个问题是：我们能不能让机器人完成灵巧的长程任务？我想介绍我们如何训练 π0 基础模型去做一件事：从烘干机里取出衣物并把它们折好。到目前为止，这可能是我亲眼见过机器人在现实世界里完成的最令人印象深刻的事情，因为它真的非常难。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:05:04",
      "speaker": "Chelsea Finn",
      "en": "This is an incredibly difficult problem. You can see that it's not perfect. Here is making some miscrops, making some mistakes, but it's really, really hard because you have to deal with the variability in the clothes and the way in which they might be positioned and crumpled, and be able to handle all those sorts of things. As you're doing this task, which takes about 10 minutes for the robot, there's many opportunities to fail—to fail catastrophically. For example, dropping things on the ground, which is hard to recover from. You have to be able to recover from even small mistakes.",
      "id": "seg-10",
      "index": 10,
      "zh": "这是一个极其困难的问题。你能看到机器人并不完美，会抓偏，也会犯错。困难来自衣物本身的巨大变化，包括不同衣服的形状、摆放方式和褶皱状态。整个任务大约需要机器人执行十分钟，这期间存在大量失败机会，甚至可能灾难性失败。例如把东西掉到地上之后就很难恢复。因此系统必须能够从许多细小失误中恢复。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:05:34",
      "speaker": "Chelsea Finn",
      "en": "I was personally actually working quite a bit on this laundry folding robot along with Michael and Siraj, and of course supported and with contributions from the whole Physical Intelligence team. So how do you even approach this sort of problem? This is a really, really hard thing for a robot to do.",
      "id": "seg-11",
      "index": 11,
      "zh": "我本人和 Michael、Siraj 在这个叠衣机器人上投入了很多工作，同时也得到整个 Physical Intelligence 团队的支持和贡献。那么究竟该怎样开始解决这样的问题？对机器人而言，它确实非常困难。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:05:50",
      "speaker": "Chelsea Finn",
      "en": "What we did is we started simple. We started with: can a robot fold a single size, single brand shirt? And can a robot dynamically flatten one shirt—again single brand, single sized? If you start simple, this makes the problem quite a bit easier. We collected some data with teleoperation and trained a policy with imitation learning. Our model had around 100 million parameters mapping from images from the robot's cameras to joint target joint positions on the robot arms, and we do this sort of control at 50 hertz on the robot.",
      "id": "seg-12",
      "index": 12,
      "zh": "我们的办法是从简单问题开始。先问机器人能不能折一种固定品牌、固定尺寸的衬衫，再问它能不能动态地把同样固定品牌和尺寸的一件衣服铺平。从简单版本起步会让问题容易很多。我们通过遥操作收集数据，用模仿学习训练策略。模型大约有一亿参数，从机器人相机图像直接映射到机械臂的目标关节位置，并以 50 Hz 的频率执行控制。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:06:24",
      "speaker": "Chelsea Finn",
      "en": "We founded the company in mid-March of 2024. A couple months later, after we had set everything up, we were able to get a policy that could fairly reliably fold a single size, single brand shirt. You can see that I'm testing the policy right here. We also wanted to test some dynamic motions because you need to be able to match the control frequency accurately in order to do these sorts of dynamic motions. These were some of our very initial tests at addressing this sort of laundry folding problem.",
      "id": "seg-13",
      "index": 13,
      "zh": "公司成立于 2024 年 3 月中旬。几个月之后，在把基础设施搭好之后，我们得到了一个能够比较可靠地折叠固定品牌、固定尺寸衬衫的策略。视频里可以看到我正在测试它。我们还想验证一些动态动作，因为要做好这种动作，控制频率必须足够准确。这些就是我们最早针对叠衣问题做的一批实验。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:06:54",
      "speaker": "Chelsea Finn",
      "en": "Then from there, we wanted to make the problem incrementally harder. So instead of starting from the shirt flat on the table, we started in a crumpled position like these. And it turns out that this actually makes it a lot harder. Here are some videos of some of our initial attempts at trying to train the robot to fold these shirts. The robot struggles. The robot does some things that kind of look somewhat sensible but generally isn't able to make progress on the task. With many tests, we frequently were getting 0% success rate in our tests of this system and really struggling to make progress.",
      "id": "seg-14",
      "index": 14,
      "zh": "接下来我们逐步提高难度。衣服不再平整地放在桌上，而是从揉皱的状态开始。结果难度立刻大幅上升。早期实验里，机器人会做出一些看起来似乎有道理的动作，却通常无法真正推进任务。在很多测试中，我们经常得到 0% 的成功率，很难取得实质进展。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:07:32",
      "speaker": "Chelsea Finn",
      "en": "So really here, it introduces this challenge of handling the sorts of variability in the ways in which shirts might be crumpled on the table. We had some initial signs of life in late June of last year. In this case, the robot was able to kind of make progress on flattening the shirt. It's also then able to fold the shirt decently well from that initial state. Still not perfect, and as you can see, it takes quite a while to do this. This is a video that was sped up 8x, so not something that you might have the patience for a robot to do.",
      "id": "seg-15",
      "index": 15,
      "zh": "这里真正出现的挑战，是怎样处理衣服在桌面上可能呈现出的各种褶皱状态。到前一年的六月下旬，我们终于看到了一些初步迹象。机器人有时能够逐步把衣服铺平，并在铺平之后比较像样地完成折叠。当然仍然远不完美，而且速度很慢。视频已经加速了八倍，原始速度慢到你大概不会有耐心一直等。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:08:05",
      "speaker": "Chelsea Finn",
      "en": "With some initial signs of life, but also very low success rate, we started to transition to a slightly harder version of the task where the laundry starts in a laundry basket. We also introduced variable size shirts and shorts into the mix. Again, the robot really struggled. So in many of our tests, we were getting 0% success rate across the board, and we're really struggling to actually get the robots to learn how to do these tasks.",
      "id": "seg-16",
      "index": 16,
      "zh": "有了一点进展，但整体成功率仍然很低，于是我们把任务再提高一个等级：衣服一开始放在洗衣篮里，并且加入不同尺寸的衬衫和短裤。机器人再次遇到很大困难。很多测试的成功率仍然全面为 0%，我们仍然不知道怎样才能真正让机器人学会这些任务。",
      "chapterId": "laundry-curriculum"
    },
    {
      "time": "00:08:31",
      "speaker": "Chelsea Finn",
      "en": "At this point, we were trying to consider a lot of different things. We thought that maybe the robot needs memory, needs history in some way. Maybe we need to just train our models for longer. Maybe we should be doing control in end-effector space rather than in joint space of the robot. Maybe our encoders—we knew that there were calibration issues—and maybe we need that calibration to be more consistent. Maybe we need to condition the model on more information about the data. Maybe we need hierarchy because this is a pretty long-horizon task and it needs to break it down into different subtasks. Maybe we need higher resolution images. Maybe we need to introduce interventions in data collection.",
      "id": "seg-17",
      "index": 17,
      "zh": "这时我们开始考虑各种可能性。也许机器人需要某种 memory，需要利用历史；也许模型只需要训练更久；也许控制应该在末端执行器空间里进行，而不是关节空间；也许编码器的标定问题需要处理得更一致；也许需要给模型更多关于数据的信息；也许长程任务需要 hierarchy，把任务拆成不同子任务；也许需要更高分辨率的图像；也许数据收集时需要加入人工干预。",
      "chapterId": "memory-hypotheses"
    },
    {
      "time": "00:09:02",
      "speaker": "Chelsea Finn",
      "en": "A lot of these things we also tried. We had around two to three months of failure where nothing was really working at addressing this task. But then at some point we actually had a bit of a breakthrough, which was that we found one thing that really seemed to make a difference in the robot's ability to do the task. This was actually to take some inspiration from the world of language modeling to actually, instead of just training a policy on all of our data, we pre-train on all the data and then fine-tune on a curated, consistent, high-quality set of demonstration data.",
      "id": "seg-18",
      "index": 18,
      "zh": "其中很多方向我们都真的试过。大约两到三个月里，我们基本一直在失败，没有什么方法真正解决这个任务。后来出现了一个突破：我们发现有一件事明显改变了机器人的任务能力。这个思路借鉴自语言模型领域。我们不再把所有数据直接混在一起训练一个策略，而是先用全部数据进行预训练，然后再用经过筛选、策略一致、质量更高的示范数据做微调。",
      "chapterId": "memory-hypotheses"
    },
    {
      "time": "00:09:37",
      "speaker": "Chelsea Finn",
      "en": "When we did this, we found that the robot was actually able to make progress and a lot more reliably fold articles of clothing. I think that this video was the first video where the robot was able to fold five items in a row and stack them. I went home very excited this day. This was in September of 2024, so multiple months after our initial tests.",
      "id": "seg-19",
      "index": 19,
      "zh": "使用这个方法之后，机器人开始能够真正推进任务，也能更可靠地折衣服。我认为视频里就是第一次连续折好五件衣服并堆起来的结果。那天我回家时特别兴奋。这是在 2024 年 9 月，距离我们最初的实验已经过去了好几个月。",
      "chapterId": "posttraining-breakthrough"
    },
    {
      "time": "00:09:59",
      "speaker": "Chelsea Finn",
      "en": "Now this is far from perfect. It takes 20 minutes to fold five items of clothes. At the same time though, it kind of suggested that this sort of recipe was able to unlock the capability in the robot to actually fold these articles of clothing. So you can see these sorts of failures here. In this case, it attempted to fold the blue shirt around seven times before eventually actually figuring out how to do that. There's also other failure modes as well. Here's an example where the robot pushes the stack to the corner of the table and decides to kind of fiddle with it a bit, and then eventually slides it off the table, and then it proceeds as if nothing had happened and it's going to continue to fold.",
      "id": "seg-20",
      "index": 20,
      "zh": "当然，它离完美还很远。折五件衣服要花大约二十分钟。但这至少说明，这套训练 recipe 确实解锁了机器人折叠这些衣物的能力。你也能看到失败案例：有一件蓝色衬衫，机器人尝试折了大约七次才终于成功。还有一次，它把已经叠好的衣服推到桌角，继续摆弄，最后把整摞衣服滑出了桌面，然后像什么都没发生一样继续折后面的衣服。",
      "chapterId": "posttraining-breakthrough"
    },
    {
      "time": "00:10:40",
      "speaker": "Chelsea Finn",
      "en": "We continue to iterate on this recipe. We selected and worked on our curation strategy for curating a higher quality set of demonstration data. We got it from 20 minutes down to 12 minutes for these five items. This is kind of how we were evaluating how good our robot system was. It still makes mistakes. The fold quality still varies, but it's still significantly better than our previous curation recipe.",
      "id": "seg-21",
      "index": 21,
      "zh": "我们继续迭代这套 recipe，尤其改进如何筛选更高质量的示范数据。这样把折五件衣服所需时间从二十分钟降到了十二分钟。这也是我们当时评估机器人系统好坏的一种直观方式。它仍然会犯错，折叠质量也仍有波动，但已经明显优于之前的数据筛选方案。",
      "chapterId": "posttraining-breakthrough"
    },
    {
      "time": "00:11:03",
      "speaker": "Chelsea Finn",
      "en": "Now, at this point, we were still training models largely kind of... we were pre-training and fine-tuning only on laundry data, and we weren't leveraging pre-trained models in the community. There were some folks working at Physical Intelligence that were working on developing a pre-trained model trained on all of the robot data. We then started to try to introduce these models into our recipe.",
      "id": "seg-22",
      "index": 22,
      "zh": "到这个阶段，我们基本还只在 laundry 数据上做预训练和微调，也还没有真正利用社区里的预训练模型。与此同时，Physical Intelligence 里有另一部分成员正在开发一个在全部机器人数据上预训练的模型，于是我们开始尝试把这种模型接入现有的训练流程。",
      "chapterId": "posttraining-breakthrough"
    },
    {
      "time": "00:11:25",
      "speaker": "Chelsea Finn",
      "en": "So we took an open-source vision language model, a three billion parameter model called PaliGemma. Previously the videos were all with like a 100 to 300 million parameters that we're iterating on. This model takes as input images from the robot, also a language command, and then has a diffusion head that's going to attend to all the internal values of the vision language model and, with the joint angles, predict a chunk of 50 actions into the future. So about one second of action steps, and we're using flow matching—a variant of diffusion—to actually output these actions and output continuous actions.",
      "id": "seg-23",
      "index": 23,
      "zh": "我们采用了一个开源视觉语言模型 PaliGemma，大约三十亿参数。此前我们迭代的模型大概只有一亿到三亿参数。新模型输入机器人图像和语言命令，再通过一个 diffusion 风格的 action head 读取视觉语言模型内部表征，同时结合关节角，预测未来 50 个动作，也就是大约一秒的 action chunk。连续动作的生成采用 flow matching，它可以看成 diffusion 方法的一种变体。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:12:05",
      "speaker": "Chelsea Finn",
      "en": "So we took this pre-trained model and instead of pre-training only on laundry, we pre-trained on all of the robot data that we had collected. And then we just fine-tuned it with the same exact post-training recipe that we had developed without using the vision language models. When we did this, we actually saw the robot continue to actually get better when we just plugged in that new pre-trained model.",
      "id": "seg-24",
      "index": 24,
      "zh": "然后我们使用这个预训练模型，把原来只在 laundry 数据上做的预训练改成在我们收集的全部机器人数据上预训练，再沿用完全相同的 post-training recipe 做微调。仅仅把这个新的预训练模型接入原有流程，机器人能力就继续提升。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:12:26",
      "speaker": "Chelsea Finn",
      "en": "In the left video, it's able to do five items in nine minutes, which was faster than the 12 minutes we had before. In the right videos, we were testing with some novel clothing items and found that it was also quite efficient at folding multiple items in a row. We also saw as a result there was also more consistent fold quality by using this model that was about 10 times larger and had seen more robot data as input.",
      "id": "seg-25",
      "index": 25,
      "zh": "左边的视频里，机器人折五件衣服只用了九分钟，比之前的十二分钟更快。右边的视频则是在测试一些新衣物，我们发现它依然能够比较高效地连续折叠多件衣服。与此同时，这个大约大十倍、见过更多机器人数据的模型，折叠质量也更加一致。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:12:51",
      "speaker": "Chelsea Finn",
      "en": "To look at a few highlights of this, here's a pair of shorts that the robot hasn't seen before. And this is kind of a tricky scenario where to flatten it, it actually kind of needs to reach under the bottom of the shorts. It's able to do that. It is able to kind of figure out that it should reach under the left part of the shorts in order to eventually flatten it. And then once it actually successfully flattens it, it's able to fold it successfully.",
      "id": "seg-26",
      "index": 26,
      "zh": "看几个具体例子。这条短裤机器人之前没有见过，而且它的状态很棘手。为了把短裤铺平，机器人实际上需要从下面伸手进去。它能够判断应该从短裤左侧下方伸进去，最终把衣服铺平，并在铺平之后成功折好。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:13:17",
      "speaker": "Chelsea Finn",
      "en": "It also has to do something similar at times to fold shirts. So in this case, it needs to actually kind of fold the shirt over on itself, which actually puts it in a more crumpled state arguably, but allows it to find the corners of the shirt and then go ahead and fold it. And then like I mentioned, it also is able to handle unseen clothing items. So here's an example of a shirt with a V-neck that it is able to fold even though this shirt was completely held out and the post-training data set didn't have any V-necks as input in the data set. It's also able to fold shirts with buttons. So it has some degree of generalization to different clothing items.",
      "id": "seg-27",
      "index": 27,
      "zh": "折衬衫时有时也会出现类似情况。这里机器人需要先把衬衫的一部分翻到另一部分上，这一步甚至会让衣服暂时看起来更皱，却能帮助它找到衣服的角，然后继续折叠。它也能处理未见过的衣物。例如这件 V 领衬衫在 post-training 数据里完全被留出，模型仍然能够折好；带纽扣的衬衫也可以。因此，它已经表现出一定程度的服装类别泛化。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:13:55",
      "speaker": "Chelsea Finn",
      "en": "And then lastly, because this policy is a neural network and it's taking as input the current image, it's able to handle interruptions. So here, Michael is continuing to mess with the robot and the robot figures out that it should put the shirt away while it's trying to fold the other shirt. In this case, Michael's going to continue messing with the robot. So Michael unfolds one side and the robot reacts. Michael goes in again and the robot makes some mistakes here but able to recover. Michael messes it up again. So those are some results of what the robot's able to do.",
      "id": "seg-28",
      "index": 28,
      "zh": "最后，因为这个策略本身是一个神经网络，并且持续读取当前图像，它能够应对执行过程中的干扰。这里 Michael 一直去打乱机器人，机器人会重新判断怎样处理。例如它在折一件衣服时把另一件衣服先放到一边；Michael 又把已经折好的一侧展开，机器人会立即反应。它有时会犯错，但仍然能够恢复。",
      "chapterId": "pi0-architecture"
    },
    {
      "time": "00:14:37",
      "speaker": "Chelsea Finn",
      "en": "Now I talked about this pre-training and post-training recipe being really important. We can actually quantitatively measure that and actually make sure that this is actually what's leading to improvement. So, we compared this pre-training and post-training recipe to not using any pre-training and only training on the curated data set, versus no post-training where you're training on all of the data rather than fine-tuning on the curated data set. We evaluated these models in terms of their progress on the task where you make partial progress for getting it out of the bin, which is the easiest part, and then further progress for flattening, folding, and stacking the items.",
      "id": "seg-29",
      "index": 29,
      "zh": "前面我一直强调 pre-training 加 post-training 的 recipe 很重要。我们也可以做定量实验来确认改进到底是不是来自这里。我们把完整 recipe 和两个消融版本比较：一个完全不做预训练，只在精选数据上训练；另一个没有 post-training，只在全部数据上训练。评估时我们把任务拆成不同进度层级，例如先从篮子里拿出来，再铺平、折叠、最后堆好，每推进一步都会获得部分分数。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:15:10",
      "speaker": "Chelsea Finn",
      "en": "We see that the pre-training and post-training recipe is able to get far higher performance than omitting pre-training and omitting post-training. Notably, omitting pre-training and post-training is basically able to get it out of the bin and make very little progress after that. Whereas when we combine pre-training and curated post-training, we get far higher performance where it's able to reliably flatten and fold objects.",
      "id": "seg-30",
      "index": 30,
      "zh": "结果显示，完整的 pre-training 加 post-training 明显优于去掉其中任意一部分的版本。如果不使用完整 recipe，模型基本只能把衣服从篮子里拿出来，之后几乎没有进展；而把广泛预训练和精选数据 post-training 结合起来之后，它能够更可靠地把衣物铺平并折好。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:15:34",
      "speaker": "Chelsea Finn",
      "en": "And then the last thing that I'll mention on this note is that nothing in this recipe is specific to laundry. And so we took the same recipe and fine-tuned on other tasks. So here the task is to clean up a table. And the robot's also able to successfully do this task despite the fact that we primarily were iterating a lot on laundry, but it's able to also apply this recipe to this task.",
      "id": "seg-31",
      "index": 31,
      "zh": "还有一点很重要：这套 recipe 并没有任何只适用于 laundry 的特殊设计。所以我们把同一套方法微调到其他任务上。这里的任务是收拾桌面，机器人同样能够成功完成，即使我们此前主要是在叠衣服问题上反复迭代。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:15:58",
      "speaker": "Chelsea Finn",
      "en": "It also is able to scoop coffee beans into a coffee grinder. This task is pretty hard. It has to construct the bottom part of a cardboard box, which requires quite a bit of dexterity. And then lastly, autonomously lighting a candle with a match, again with this kind of same pre-training and post-training recipe.",
      "id": "seg-32",
      "index": 32,
      "zh": "它还能把咖啡豆舀进咖啡研磨机。另一个任务是把纸板箱的底部折成立体结构，这需要相当高的灵巧性。最后，它还能自主用火柴点燃蜡烛。所有这些任务使用的仍然是同一套 pre-training 和 post-training recipe。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:16:22",
      "speaker": "Chelsea Finn",
      "en": "This is pointing at this kind of the benefit of foundation models that I alluded to before, which is that to do these different tasks you don't have to start completely from scratch. You can actually leverage pre-training across multiple robots and across multiple tasks. And then we're also able to apply that same recipe to robots at other companies. This is a robot that I've actually never seen in person before. They collected data. They sent the data to us. We fine-tuned our model on their data. We actually didn't even know exactly how the model is being controlled—exactly the representation of their actions—but by fine-tuning the model on this new robot, the model is able to control the robot in order to make a cup of coffee in this case.",
      "id": "seg-33",
      "index": 33,
      "zh": "这正体现了基础模型的价值。为了做这些不同任务，你不必每次都从零开始，可以利用跨机器人、跨任务的预训练。我们甚至把同样的流程用到了其他公司的机器人上。视频里的机器人我本人从来没在现场见过。对方收集数据并发给我们，我们在这些数据上微调模型。甚至我们一开始都不完全清楚它具体如何控制、动作表示是什么，但只要在新机器人的数据上微调，模型就能够控制它完成例如冲一杯咖啡这样的任务。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:17:07",
      "speaker": "Chelsea Finn",
      "en": "So, some takeaways for this part: we were able to independently develop post-training and pre-training and decouple the problem, and then eventually get the best of both. We found that training on all the data doesn't work for complex tasks, and this sort of pre-training and post-training on curated data leads to far better performance. And then we broke up this really hard problem of folding laundry by gradually starting with folding single shirts and going to more and more complex versions of the task.",
      "id": "seg-34",
      "index": 34,
      "zh": "这一部分可以总结成几点。我们分别发展了 post-training 和 pre-training，先把两个问题解耦，再把两者结合得到最好效果。我们发现，对于复杂任务，仅仅在所有数据上统一训练效果并不好；在广泛数据上预训练，再用精选高质量数据 post-training，效果明显更好。我们还通过课程式地增加任务难度，把最初折单件固定衬衫的简单问题逐步推进到完整 laundry folding。",
      "chapterId": "ablation-transfer"
    },
    {
      "time": "00:17:34",
      "speaker": "Chelsea Finn",
      "en": "Now there's a number of limitations here and one limitation I'd like to point out is that these robots inevitably, in this case, were trained in the environments that they were tested. And so this means that in principle you could use these methods to collect a lot of data in one environment and then deploy them in one environment. But ultimately, there's going to be things that change about an environment and scenarios where we would want to actually apply these robots to environments that they've never seen before. And so, how can robots actually succeed in places that they've never been?",
      "id": "seg-35",
      "index": 35,
      "zh": "这里当然还存在很多限制。其中一个很关键的限制是，这些机器人基本都在训练时见过的环境里测试。这意味着你可以在某个环境里收集大量数据，再把机器人部署回同一个环境。但现实环境会不断变化，而且我们最终希望机器人能进入训练时完全没有见过的地方。那么，机器人怎样才能在从未去过的环境里成功工作？",
      "chapterId": "open-world-data"
    },
    {
      "time": "00:18:03",
      "speaker": "Chelsea Finn",
      "en": "The lesson we've learned from machine learning in other places is that we should collect diverse data. We started by collecting data of tidying bedrooms and kitchens in many different environments. Here's a sample of that data. We collected robot data in homes across San Francisco here and also collected data in diverse mock kitchens and mock bedrooms. In total, we had more than 100 unique rooms represented in the data set that ended up being a part of a bigger pre-training mixture.",
      "id": "seg-36",
      "index": 36,
      "zh": "机器学习其他领域给我们的经验是，要收集更多样的数据。于是我们开始在很多不同环境里收集整理卧室和厨房的数据。我们在旧金山不同家庭里采集真实机器人数据，也搭建了多样化的模拟厨房和卧室。最终，更大的预训练数据混合中包含了超过一百个不同房间。",
      "chapterId": "open-world-data"
    },
    {
      "time": "00:18:36",
      "speaker": "Chelsea Finn",
      "en": "So we trained on this diverse mobile manipulation data, including the low-level action prediction as well as predicting high-level subtask commands for how to complete the task. But we also trained on previously collected static manipulation data that was also fairly diverse—static manipulation data that we had collected in our office and in labs, as well as web data and high-level instructional data.",
      "id": "seg-37",
      "index": 37,
      "zh": "我们在这些多样化的移动操作数据上训练模型，既学习低层动作预测，也学习为了完成任务而需要预测的高层子任务命令。同时，我们还加入此前收集的静态操作数据，包括办公室和实验室里的多样机器人操作，以及网页数据和高层 instructional data。",
      "chapterId": "open-world-data"
    },
    {
      "time": "00:18:57",
      "speaker": "Chelsea Finn",
      "en": "I should point out here that the mobile manipulation data of tidying bedrooms and kitchens only accounted for 2.4% of the overall pre-training mix. And so the lesson here is that you were basically able to spin up a new task and actually an entirely new robot—the rest of the mixture didn't have any mobile manipulation data with this particular mobile manipulator in it—without redoing all of the data collection. We're able to build upon everything that had been done before. And it's kind of this same story of foundation models being able to make it easier to spin up a new problem, a new application, without starting from scratch.",
      "id": "seg-38",
      "index": 38,
      "zh": "需要强调的是，整理卧室和厨房的移动操作数据只占整个预训练混合的大约 2.4%。这意味着，当你要启动一个新任务甚至一台全新的机器人时，并不需要把所有数据重新收一遍。因为预训练混合里的其他部分此前甚至没有这台移动操作机器人的数据，但新任务仍然可以建立在已有能力之上。这再次体现了基础模型的核心价值：启动一个新应用时不用从头开始。",
      "chapterId": "open-world-data"
    },
    {
      "time": "00:19:35",
      "speaker": "Chelsea Finn",
      "en": "Now this wasn't completely easy. We had a couple challenges. One of the challenges that we ran into is that naively this model can ignore language instructions. So we had actually in this case asked it to pick up the cutting board and it chose to pick up the plate instead. Now we're again asking it to pick up the cutting board, and instead the robot had a mind of its own, decided to pick up the plate. And then we tell it to put the plate in the sink. And eventually it decides that well, after kind of moving away from the cutting board, it eventually decided that it would actually pick up the cutting board. So in the early development of our model, we found that it often ignored language.",
      "id": "seg-39",
      "index": 39,
      "zh": "当然过程并不轻松。我们遇到的一个问题是，模型会直接忽略语言指令。例如我们让它拿砧板，它却去拿盘子；再次让它拿砧板，它还是自作主张去拿盘子。后来让它把盘子放进水槽，模型移动了一会儿之后才突然决定去拿砧板。早期模型经常出现这种不听语言的现象。",
      "chapterId": "open-world-data"
    },
    {
      "time": "00:20:11",
      "speaker": "Chelsea Finn",
      "en": "To solve this, we thought about how vision language models actually follow language well. Maybe there's a way to preserve the inherent abilities of the pre-trained models when addressing this task. So what we did is with this Pi Zero architecture, this action head that's using diffusion is randomly initialized. And this ends up actually deteriorating the pre-trained knowledge that's present in the vision language model. We found that if we can prevent this deterioration, we might be able to get better language following.",
      "id": "seg-40",
      "index": 40,
      "zh": "为了解决这个问题，我们思考视觉语言模型为什么通常能很好地遵循语言指令，以及怎样在机器人训练中保留预训练模型已有的这种能力。在 π0 架构里，diffusion action head 是随机初始化的，而它的训练梯度会反过来破坏 VLM 里已经学到的预训练知识。我们的想法是，能否阻止这种退化，从而保留更好的 language following。",
      "chapterId": "knowledge-insulation"
    },
    {
      "time": "00:20:44",
      "speaker": "Chelsea Finn",
      "en": "The recipe that we came up with was actually in some ways fairly similar, but instead we're going to be predicting tokenized actions. And then when we have the diffusion head, we'll be stopping the gradient from the randomly initialized diffusion head to prevent it from deteriorating the language following abilities of the VLM backbone. We found that this first led to faster training because the tokenized actions are a more direct supervision signal. And second, it also followed language far better—an 80% follow rate rather than a 20% follow rate—which suggests that we're able to preserve the pre-training in the vision language model backbone.",
      "id": "seg-41",
      "index": 41,
      "zh": "最终得到的 recipe 在形式上有些类似，但我们会额外预测 tokenized actions。同时，当 diffusion head 训练时，我们阻断从随机初始化 action head 向 VLM backbone 传回的梯度，避免破坏原本的语言能力。这样做带来两个结果。第一，tokenized action 提供更直接的监督信号，训练更快。第二，语言遵循显著改善，从大约 20% 提升到 80%，说明 VLM 预训练能力被更好地保留下来了。",
      "chapterId": "knowledge-insulation"
    },
    {
      "time": "00:21:20",
      "speaker": "Chelsea Finn",
      "en": "So, we put those pieces together. We took that recipe and pre-trained it on all of our data, including the mobile manipulation data. We fine-tuned it on mobile manipulation data in a variety of environments. And then we tested the model in places it's never been before.",
      "id": "seg-42",
      "index": 42,
      "zh": "然后我们把这些部分组合起来。使用这套方法在包含移动操作数据在内的全部数据上预训练，再在多个环境的移动操作数据上做微调，最后把模型拿到训练中从未见过的地方进行测试。",
      "chapterId": "knowledge-insulation"
    },
    {
      "time": "00:21:33",
      "speaker": "Chelsea Finn",
      "en": "We rented three Airbnbs that we had never been to before. We put the robot in those homes, in this case in the kitchen, and I asked it to close the cabinet. I asked it to put away the dishes. It has also never seen these dishes or these forks, these objects. And the robot's able to succeed even though it's never been here before. There's different countertops, different furniture, different objects, and so forth. Lastly, I asked it to clean up the spill, and the robot is able to oblige and wipe down the spill and eventually put the sponge into the sink.",
      "id": "seg-43",
      "index": 43,
      "zh": "我们租了三个此前从未去过的 Airbnb，把机器人带进去。在一个新厨房里，我让它关橱柜、收拾餐具。它从没见过这些房子，也没见过这些餐具和叉子，但仍然可以完成任务。台面、家具、物体都和训练环境不同。最后我让它清理洒出来的东西，它也能够擦干净，并把海绵放进水槽。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:22:16",
      "speaker": "Chelsea Finn",
      "en": "It's also able to do this for bedrooms. So Laura asked it in this case just clean the bedroom, and it puts articles of clothing in. It throws away the trash and then is able to tidy the bed by putting the pillow at the top of the bed and tidying the blanket or the comforter of the bed.",
      "id": "seg-44",
      "index": 44,
      "zh": "卧室任务也可以做到。Laura 只给了一个很宽泛的指令“把卧室收拾干净”，机器人会把衣物放好、把垃圾扔掉，还会整理床铺，例如把枕头放到床头，并整理毯子或被子。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:22:41",
      "speaker": "Ad Voiceover",
      "en": "YC's next batch is now taking applications. Got a startup in you? Apply at ycombinator.com/apply. It's never too early and filling out the app will level up your idea. Okay, back to the video.",
      "id": "seg-45",
      "index": 45,
      "zh": "YC 的下一期项目正在接受申请。如果你有创业想法，可以到 ycombinator.com/apply 申请。现在回到视频。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:22:55",
      "speaker": "Chelsea Finn",
      "en": "So, quantitatively, I talked about how there's only 2.7% or something of the mixture, and so how much does that other data actually help? Could we actually just train on that kind of 2.7%? And we find that these kind of bars on the right, which are excluding data from static robots in labs and environments and so forth, reduces performance significantly. So the performance goes down to less than 60% when you exclude that data when evaluated in novel homes, compared to if you use the full pre-training mixture, it has more than 20% higher performance.",
      "id": "seg-46",
      "index": 46,
      "zh": "前面提到，移动操作数据在整体混合里大约只占 2.7% 左右。那么其他数据到底帮了多少？如果只用这 2.7% 会怎样？实验中，去掉实验室静态机器人等其他来源的数据之后，在新家庭环境中的表现会明显下降到 60% 以下；而使用完整预训练混合时，性能高出二十多个百分点。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:23:28",
      "speaker": "Chelsea Finn",
      "en": "Lastly we also looked at: is the diversity of data helpful? Is it important? And so we increase the amount of data from these environments to test this. It's always good to like... you can kind of do \"vibe eval,\" but it's really helpful to actually measure how well these things work, and so this is what this is measuring. We find that if we actually increase the amount of homes, the amount of locations that are represented in the data, the performance increases, which is great. It actually gets to the same level of performance as if we train on data from that target environment.",
      "id": "seg-47",
      "index": 47,
      "zh": "我们还专门检查了数据多样性到底有没有用。我们逐步增加训练数据里包含的家庭和地点数量，然后做定量评估。光看视频做所谓的 vibe eval 当然很方便，但真正测量性能更加重要。结果显示，随着数据覆盖的家庭和地点越来越多，模型性能持续提高，最后几乎达到了直接在目标测试环境里训练所能达到的水平。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:24:01",
      "speaker": "Chelsea Finn",
      "en": "So it means we're actually mostly closing the generalization gap and suggests that the bottlenecks at this point for this sort of task lie not in collecting more diverse data but in actually getting higher reliability and higher performance.",
      "id": "seg-48",
      "index": 48,
      "zh": "这意味着我们已经在很大程度上缩小了 generalization gap。对于这类任务，当前瓶颈似乎开始从“还需要收集更多不同环境”转向“怎样把可靠性和绝对性能继续提高”。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:24:15",
      "speaker": "Chelsea Finn",
      "en": "Now I should also mention that there's failure modes like this—the success rate was around 80%. There's lots of room for improvement. Here are a couple examples of those failure modes. So here it's told to put the items in the drawer. It is able to put it in the drawer but the item isn't fully in the drawer at the end and it decides that it's done and kind of moves on to the next thing. Here the robot needs to put the clothes in the laundry basket. It drives over the shirt and then it gets stuck and it's not able to lift it up. Here we asked it to put the dishes in the sink and it successfully is able to put a number of the dishes in the sink but it struggles to pick up the cutting board in this particular case because it's very thin and it's flush against the surface of the countertop.",
      "id": "seg-49",
      "index": 49,
      "zh": "当然仍然有不少失败模式，整体成功率大约是 80%，还有很大改进空间。例如让机器人把东西放进抽屉，它虽然放进去了，却没有完全推进去，就判断任务已经完成并转去做下一件事。让它把衣服放进洗衣篮时，它可能直接从衣服上碾过去并卡住。让它把餐具放进水槽时，它能处理很多物体，却可能因为砧板很薄、紧贴台面而抓不起来。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:24:57",
      "speaker": "Chelsea Finn",
      "en": "And in the last case, probably my favorite case, it's told to put the spatula into a drawer and it decides that the oven looks a lot like a drawer, and so it opens the oven and yeah, tries to put it in there. Beyond this, there's also challenges with regard to speed, partial observability, long-term planning, and so lots of work to do still.",
      "id": "seg-50",
      "index": 50,
      "zh": "最后一个失败案例是我最喜欢的。我们让机器人把锅铲放进抽屉，它却觉得烤箱看起来很像一个抽屉，于是把烤箱门打开，试图把锅铲放进去。除此之外，速度、部分可观测性和长期规划等问题也仍然存在，所以还有很多工作要做。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:25:21",
      "speaker": "Chelsea Finn",
      "en": "So the takeaway here is that with diverse data, robots can follow a variety of instructions in environments that the robot has never been in before. Which is a big step up from a lot of robotic scenarios where they're trained in the scenarios that they are being tested.",
      "id": "seg-51",
      "index": 51,
      "zh": "这一部分的核心结论是：只要数据足够多样，机器人就可以在训练时从未进入过的环境里遵循多种指令。这比很多传统机器人设置向前迈了一大步，因为后者通常都是在和训练环境高度相似的场景中测试。",
      "chapterId": "unseen-homes-eval"
    },
    {
      "time": "00:25:36",
      "speaker": "Chelsea Finn",
      "en": "Now the last kind of bit I'd like to talk about is: this model has a fairly limited instruction set. It can only follow kind of a certain set of commands. And if we think about how other forms of AI technology have been deployed, people really like to customize and actually tell the robot what they want or tell the system what they want from these kinds of models. And so just like we prompt language models, can we allow robots to respond to open-ended prompts and open-ended interjections?",
      "id": "seg-52",
      "index": 52,
      "zh": "最后我想讨论的是，这个模型的指令集合仍然比较有限，只能执行一组相对固定的命令。回看其他 AI 技术的实际使用方式，人们往往很喜欢自由地定制需求，直接告诉系统自己想要什么。所以我们会问：能不能像给语言模型写 prompt 一样，让机器人响应开放式 prompt，以及任务执行过程中的开放式插话？",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:26:02",
      "speaker": "Chelsea Finn",
      "en": "So to do this and actually to do the past work, we're actually leveraging hierarchical vision language action models. So we're going to have a high-level policy break down the prompt into intermediate verbal responses and intermediate atomic language commands. So the high-level prompt might be \"Can you make me a sandwich?\", and this high-level policy will break it down into the subtask of \"pick up one slice of bread.\" This will be passed to a low-level model that actually executes and predicts target joint angles to fulfill the low-level command of picking up one slice of bread.",
      "id": "seg-53",
      "index": 53,
      "zh": "为了做到这一点，包括前面的一些工作，我们采用了 hierarchical vision-language-action model。高层策略负责把用户 prompt 拆成中间的语言回复和原子化的语言子任务。例如用户说“能帮我做个三明治吗？”，高层策略会先产生“拿一片面包”这样的子任务，再把这个低层命令交给动作模型，由低层 VLA 预测目标关节角并真正执行。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:26:40",
      "speaker": "Chelsea Finn",
      "en": "Now, on its own, this isn't going to be able to follow all sorts of prompts, and it's actually fairly tricky to handle open-ended language because it's going to be challenging to collect a large number of human-robot interactions with the real robot in the loop. And this is also going to be fairly hard to scale.",
      "id": "seg-54",
      "index": 54,
      "zh": "仅仅有 hierarchy 还不足以理解任意开放式语言。真正收集大量真人和机器人实时交互的数据非常困难，成本也很高，因此很难直接按传统方式规模化。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:26:58",
      "speaker": "Chelsea Finn",
      "en": "So what we did is we kind of took all of our existing robot data and we can actually generate synthetic data for the existing robot data. In particular, we can use language models to relabel and generate hypothetical human prompts for the scenarios that the robots are in. And so what this looks like is we'll take data that says... here's a kind of a video and then the next skill is to pick up a Kit Kat because that's what the robot does next in terms of just like basic low-level annotation. And then for this scenario where the robot is about to pick up the KitKat, we can ask a vision language model: what is a hypothetical prompt that a human might have asked that led to this particular scenario and the robot to actually choose to pick up a Kit Kat?",
      "id": "seg-55",
      "index": 55,
      "zh": "所以我们把已有的机器人数据重新利用起来，为它生成 synthetic data。具体来说，可以让语言模型或视觉语言模型对现有 trajectory 重新标注，生成一个假想的人类 prompt。比如一段数据记录着机器人下一步要拿 KitKat，我们就把当前视频和这个低层动作交给 VLM，问它：在这种场景下，人类可能说了什么，才会让机器人决定去拿 KitKat？",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:27:39",
      "speaker": "Chelsea Finn",
      "en": "And then we can train our high-level policy on these synthetic prompts to basically augment the robot data with various human interactions that might have led to those different situations. As a result of this, we're able to actually allow robots to follow a variety of different prompts. So on the left, we ask, \"Hi, robot. Can you make me a ham and cheese sandwich?\" The robot says, \"Sure, I'll start with the bread and add ham and cheese next.\" And it's able to break down this task into the various subtasks of picking up a slice of bread, putting on the cutting board, picking up a slice of cheese, putting it on the bread, picking up some ham, and so on and so forth.",
      "id": "seg-56",
      "index": 56,
      "zh": "接下来就可以用这些合成 prompt 训练高层策略，相当于给已有 robot data 补上大量可能的人机交互语境。这样机器人就能理解更丰富的请求。例如用户说“Hi robot，能做一个火腿芝士三明治吗？”，机器人会先回复它会从面包开始，再加入火腿和芝士，然后把任务拆成拿面包、放到砧板、拿芝士、放到面包上、再拿火腿等连续子任务。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:28:14",
      "speaker": "Chelsea Finn",
      "en": "I can also follow more complicated prompts like, \"Hi robot, can you make me a vegan sandwich? I don't like pickles, though.\" And in this case is able to break it down and decide that it's going to add lettuce and tomatoes to the sandwich and not add pickles, not add cheese, not add meat as well.",
      "id": "seg-57",
      "index": 57,
      "zh": "它也能处理更复杂的要求，例如“做一个纯素三明治，但我不喜欢腌黄瓜”。模型会判断可以放生菜和番茄，同时避开腌黄瓜、奶酪和肉类，并把这些约束落实到具体子任务上。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:28:31",
      "speaker": "Chelsea Finn",
      "en": "In addition to prompts, we're also able to train the robot to handle different interjections. Here's a case of a different kind of prompt. So on the left we train the robot to clean tables—so put trash away and put dishes into the bin. And on the right we ask the robot, \"Clean up only the trash but not the dishes.\" And the robot's able to understand what that means and connect that to its low-level actions and only put away the trash and complete when the trash is all put away.",
      "id": "seg-58",
      "index": 58,
      "zh": "除了初始 prompt，我们也训练机器人处理不同的插话和限制条件。例如左侧是普通的清理桌面任务，会把垃圾扔掉、把餐具收进指定容器；右侧用户改成“只清理垃圾，不要动餐具”，机器人能够理解这个限制，只处理垃圾，并在垃圾全部收完时结束。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:28:59",
      "speaker": "Chelsea Finn",
      "en": "And then lastly, it's able to handle interjections and situated corrections. So in this case, the robot is kind of getting items for a user. The user interjects and said, \"Get me something sweet that's not in the basket,\" right after it had put a Kit Kat into the basket. And the robot says, \"Uh, sure. Let me get you some Skittles.\" And reasons through kind of basic reasoning of how to fulfill the user's request and is able to respond to those kinds of corrections situated in the world that the robot is in.",
      "id": "seg-59",
      "index": 59,
      "zh": "机器人还能处理执行中的 interjection 和 situated correction。这里机器人正在替用户取物品，刚把 KitKat 放进篮子之后，用户突然说“给我拿一个甜的，而且不要是篮子里的东西”。机器人回答说可以拿 Skittles，然后结合眼前环境推理这个新要求，改变后续行动。这种能力要求语言推理真正和当前物理世界状态结合起来。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:29:28",
      "speaker": "Chelsea Finn",
      "en": "Now you might also wonder like maybe some existing foundation models could serve as a high-level planner for robots and do this sort of high-level reasoning without actually training a separate model. And so we also evaluated that, and we found that in blue the performance at following instructions and making progress on the task was substantially lower than the performance of our system which is shown in green. In general we found that these frontier models generally struggle with visual understanding as it pertains to robotics, which makes sense because in general these models aren't really targeting many physical applications and have very little data in the physical world.",
      "id": "seg-60",
      "index": 60,
      "zh": "你也许会问，既然已经有很强的通用多模态基础模型，能不能直接拿它们当高层 robot planner，而不单独训练机器人高层策略？我们也做了这个实验。结果这些 frontier models 在遵循指令和推进机器人任务方面明显弱于我们的系统。整体来看，它们尤其不擅长和机器人操作相关的视觉理解。这也合理，因为这些模型训练目标主要不面向物理任务，真正来自物理世界的机器人数据非常少。",
      "chapterId": "hi-robot"
    },
    {
      "time": "00:30:05",
      "speaker": "Chelsea Finn",
      "en": "Okay. Um, so to start to wrap up, um, and then we'll all have some time for questions. I talked a bit about how robots can do a variety of dextrous long-horizon tasks with pre-training and post-training. How robots can succeed in places that they've never been, and how they can respond to open-ended prompts and interjections by leveraging synthetic data from language models on top of the robot data that we had collected.",
      "id": "seg-61",
      "index": 61,
      "zh": "接下来做一个总结，然后留时间问答。今天主要讲了三件事：通过 pre-training 和 post-training，让机器人完成多种灵巧的长程任务；让机器人在从未去过的环境里工作；以及借助语言模型生成的 synthetic data，让机器人响应开放式 prompt 和任务中途的 interjection。",
      "chapterId": "wrapup"
    },
    {
      "time": "00:30:28",
      "speaker": "Chelsea Finn",
      "en": "Now with some closing notes, we've seen a few different scenarios in this talk where general-purpose robots might be more successful than specialist robots, but because we can essentially rather than start from scratch for every single application actually build upon a much broader foundation for physical intelligence in the real world. We also saw that large-scale data in the real world is really helpful for developing these things. I think that it's necessary but not sufficient for physical intelligence, and there's a lot of challenges and we need more research to be done, ourselves and through open source contributions, before robots I think will be truly ready to tackle the open world.",
      "id": "seg-62",
      "index": 62,
      "zh": "最后再补充几点。我们看到了几个通用机器人可能优于专用机器人的场景，因为解决新应用时可以建立在更广泛的 physical intelligence 基础上，而无需每次重新开始。大规模真实世界数据确实非常有帮助，我认为它是必要条件，但仍然远远不够。要让机器人真正准备好面对开放世界，还需要大量研究，包括我们自己的工作和开源社区的贡献。",
      "chapterId": "wrapup"
    },
    {
      "time": "00:31:08",
      "speaker": "Chelsea Finn",
      "en": "I'd also like to mention that at Physical Intelligence we're hiring a number of roles. If you're excited about some of the things that we talked about, you can see a list of the open roles on the pi pi. As well, awesome.",
      "id": "seg-63",
      "index": 63,
      "zh": "另外，Physical Intelligence 目前也在招聘多个职位。如果你对今天讨论的方向感兴趣，可以查看 PI 的职位列表。",
      "chapterId": "wrapup"
    },
    {
      "time": "00:31:27",
      "speaker": "Chelsea Finn",
      "en": "Happy to take some questions. Let's start on the left.",
      "id": "seg-64",
      "index": 64,
      "zh": "很高兴回答问题。我们从左边开始。",
      "chapterId": "wrapup"
    },
    {
      "time": "00:31:29",
      "speaker": "Audience Question",
      "en": "Uh hi Chelsea. So, uh first I want to say thank you for all your work on robot learning. They're all really impressive. Yeah. And uh so mainly I have two questions on uh especially uh regarding the post-training part you mentioned. So um the first thing is uh you mentioned that the in post training the most important part is to have high quality action data. So I'm wondering what the components of that would be and then the second question is what do you think uh RL will play into the part of post training?",
      "id": "seg-65",
      "index": 65,
      "zh": "观众提问：首先感谢你对 robot learning 的很多工作。我主要有两个关于 post-training 的问题。第一，你提到 post-training 最重要的是高质量 action data，那么这种高质量数据具体由什么构成？第二，你认为强化学习会在 post-training 里扮演什么角色？",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:32:00",
      "speaker": "Chelsea Finn",
      "en": "Yeah absolutely. So I think that the different components of it, a lot of it comes down to consistency of the data and the strategy being followed, and whether the data completes the task efficiently and with a reliable strategy. And then on the second question, I think that reinforcement learning can play a very large role in it—actually in post-training. I think that online data from the robots, which reinforcement learning allows you to use, can allow robots to have a much higher success rate and also be faster than if they're just trained with imitation learning.",
      "id": "seg-66",
      "index": 66,
      "zh": "Chelsea 回答：高质量数据很大程度上取决于数据和执行策略是否一致，以及任务是不是以高效、可靠的策略完成。至于第二个问题，我认为 reinforcement learning 在 post-training 中可以发挥非常大的作用。RL 允许我们利用机器人在线执行产生的数据，这可能让机器人的成功率显著高于只做 imitation learning 的情况，同时也可以让执行速度更快。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:32:35",
      "speaker": "Audience Question",
      "en": "Yeah, thank you.",
      "id": "seg-67",
      "index": 67,
      "zh": "观众：谢谢。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:32:37",
      "speaker": "Audience Question",
      "en": "Hi, thank you so much for your talk. Uh so your work is really fascinating and there is no doubt that it will have a lot of impact in the future. But um can I ask you at this stage uh how can you find the fundings because honestly I can't imagine how hard it can be to convince people to invest in a robot that folds clothes and deal with the dishes. Yeah.",
      "id": "seg-68",
      "index": 68,
      "zh": "观众提问：非常感谢你的演讲。你的工作很令人兴奋，也毫无疑问会产生很大影响。但我很好奇，在当前阶段你们是怎么融资的？说实话，我很难想象要说服投资人给一个会叠衣服、收餐具的机器人投钱有多困难。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:33:02",
      "speaker": "Chelsea Finn",
      "en": "So um it's a good question. I think that well I guess first I'll mention that we aren't just focused on applications in the home. We really want to solve this broader problem of physical intelligence and we've been starting with those applications because they're ones that are kind of easy to make progress on. Um but we've also been doing tasks like inserting an Ethernet cable which I put in the talk, as well as constructing a cardboard box. And generally I think that this sort of problem has a ton of potential for making impact in all sorts of realms, not just in domestic tasks but all sorts of realms as well.",
      "id": "seg-69",
      "index": 69,
      "zh": "Chelsea 回答：这是个好问题。首先，我们并不只专注家庭应用。我们的目标是解决更广泛的 physical intelligence 问题，只是从家庭任务起步，因为这些任务比较适合逐步取得进展。我们也做了插以太网线、搭纸板箱之类的任务。总体而言，这个问题在家庭之外的很多领域都有非常大的应用潜力。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:33:38",
      "speaker": "Chelsea Finn",
      "en": "And even in domestic tasks, I think there's a huge market for this kind of technology. We ourselves haven't had a lot of challenge with fundraising and I think that a lot of robotics companies recently have also done a great job and found that there's actually a lot of excitement around this sort of technology because I think things are actually starting to work. I started working on this technology more than 10 years ago at this point and things really weren't working then. And so yeah, I think that there's a lot of excitement that is starting to mature and actually be ready for the real world. I think that there's a lot more work to do, but generally it seems like there's a lot of people excited about this technology and eager to actually put funds behind it.",
      "id": "seg-70",
      "index": 70,
      "zh": "即使只看家庭任务，我也认为市场很大。我们自己在融资方面并没有遇到太多困难，最近许多机器人公司也都得到了很多关注，因为这个领域的技术终于开始真正工作了。我十多年前就开始做这类研究，当时很多东西确实还不行。现在大家开始感到技术正在成熟，越来越接近现实世界。当然还需要大量工作，但已经有很多人愿意为这个方向投入资金。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:34:16",
      "speaker": "Audience Question",
      "en": "Okay, thank you so much.",
      "id": "seg-71",
      "index": 71,
      "zh": "观众：好的，非常感谢。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:34:17",
      "speaker": "Chelsea Finn",
      "en": "Yeah.",
      "id": "seg-72",
      "index": 72,
      "zh": "Chelsea：好的。",
      "chapterId": "qa-posttraining-rl"
    },
    {
      "time": "00:34:17",
      "speaker": "Audience Question",
      "en": "Hi. Uh thank you so much. Um I have two questions, like one uh uh more broad and one more technical. So the technical one like is uh VLAs uh in my opinion like at least to my understanding are a framework that is a bit separate like from world modeling and I wonder like how the two of them like will interplay among each other and whether like you have actually planned like to somehow like use them together. As I see right now like VLAs as more of a policies that could actually benefit a lot from world modeling. And uh from a B perspective I wonder like which kind of infrastructure layers could be the most useful uh to work on such as like explanability, traceability or uh uh safety in general to deploy such models like in the real world.",
      "id": "seg-73",
      "index": 73,
      "zh": "观众提问：我有一个技术问题和一个更宏观的问题。技术上，我理解 VLA 和 world modeling 目前像是两条相对独立的路线。VLA 更像直接输出 policy，我想知道它们未来怎样结合，因为 VLA 看起来可以从 world model 中受益。另一个问题是，如果要真正把这类模型部署到机器人上，短期最值得建设的基础设施层是什么，例如可解释性、可追踪性或安全性？",
      "chapterId": "qa-world-model"
    },
    {
      "time": "00:35:11",
      "speaker": "Chelsea Finn",
      "en": "Yeah, great question. So um on the first point, there's actually fairly natural ways to incorporate world model objectives into vision language action models. And um we've done some work where um instead of only predicting the next action you predict some intermediate subgoal image—like what should happen in the future in order to accomplish the task—and then predict an action from there. And we've seen some kind of signs of life that that seems to be quite promising. So I think there's ways to merge the two paradigms.",
      "id": "seg-74",
      "index": 74,
      "zh": "Chelsea 回答：把 world model objective 融入 VLA 其实有一些很自然的方式。我们做过一些工作，不只预测下一步 action，而是先预测一个中间的 subgoal image，也就是为了完成任务未来应该出现什么样的图像状态，然后再基于它预测动作。我们已经看到一些初步的积极结果，所以我认为两种范式完全有可能结合。",
      "chapterId": "qa-world-model"
    },
    {
      "time": "00:35:41",
      "speaker": "Chelsea Finn",
      "en": "At the same time, I think there's a lot of challenges that come up with world modeling with regard to the ways in which basically the data that you put into it not necessarily being kind of reflective of the ways in which you're going to use it. You might train it on demonstration data of successful data of completing the task and then evaluate it to try to actually use it to evaluate actions that are not optimally completing the task. And then the world model will hallucinate a video of completing the task successfully even if the actions that you provide as input didn't actually lead to a good outcome. So there's challenges there to overcome and so it's not like... yeah there's various challenges but there's also ways to integrate it into the VLA paradigm. And then could you remind me your second question?",
      "id": "seg-75",
      "index": 75,
      "zh": "与此同时，world modeling 也有明显挑战。训练 world model 时，你可能主要给它成功完成任务的 demonstration data；但真正使用时，却希望它评估各种并不最优的候选动作。如果训练分布和使用分布不匹配，world model 可能会“脑补”出一个成功完成任务的视频，即使你给它的动作实际上根本不会产生好结果。所以这条路线仍有很多问题要解决，不过它确实可以和 VLA 结合。随后 Chelsea 请提问者再重复一下第二个问题。",
      "chapterId": "qa-world-model"
    },
    {
      "time": "00:36:22",
      "speaker": "Audience Question",
      "en": "Um what are like the infrastructure layers like you want the chess to work on uh in the shortest term to bring like the most improvements let's say to actually run these models on robots.",
      "id": "seg-76",
      "index": 76,
      "zh": "观众补充：如果目标是让这些模型尽快真正跑在机器人上，你认为最值得建设、能带来最大改进的基础设施层是什么？",
      "chapterId": "qa-world-model"
    },
    {
      "time": "00:36:37",
      "speaker": "Chelsea Finn",
      "en": "You need... we have like a real-time system that needs to actually be hitting a certain frequency to actually like execute actions successfully. And if you have lag in that system and so forth, it introduces all sorts of challenges. And so thinking about fast inference um and infrastructure for like that's actually going to be on the robot is a big part of what our software team does. And then also thinking about like large scale machine learning infrastructure, training large models, ingesting large amounts of data. The data that we have is different from a lot of kind of typical data sets because it's very multimodal in nature. Um it's kind of videos, actions, language segments um and various other components as well. So um yeah, some interesting infrastructure problems I think both on the robot side uh and on the kind of model training side.",
      "id": "seg-77",
      "index": 77,
      "zh": "Chelsea 回答：首先是真正的实时系统。机器人必须稳定达到某个执行频率，动作才能成功；任何额外延迟都会带来各种问题。所以快速推理，以及直接部署在机器人端的基础设施，是我们软件团队非常重要的一部分。另一方面还有大规模机器学习基础设施，包括训练大模型、摄取大量数据。我们的数据和典型数据集很不一样，是视频、动作、语言片段等多种模态混合在一起的。因此，机器人端和模型训练端都有很有意思的 infrastructure 问题。",
      "chapterId": "qa-world-model"
    },
    {
      "time": "00:37:23",
      "speaker": "Audience Question",
      "en": "Thank you so much.",
      "id": "seg-78",
      "index": 78,
      "zh": "观众：非常感谢。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:37:24",
      "speaker": "Chelsea Finn",
      "en": "Yep.",
      "id": "seg-79",
      "index": 79,
      "zh": "Chelsea：好的。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:37:25",
      "speaker": "Frederick",
      "en": "Hi, I'm Frederick and I have got a question about model sizes in general. So I think what we're seeing right now is that in general larger model sizes lead to better accuracy. For example, also in your experiments or um it's also what OpenAI and Anthropic and others are doing right now with their LLMs. However, there's also the approach of using a quite small model and then outsourcing the world knowledge into a database of some sort with which the model can interact. Um what is your take on that? Do you think that's like a valid approach or do you think encapsulating all the world knowledge inside of the model is better or works better?",
      "id": "seg-80",
      "index": 80,
      "zh": "Frederick 提问：我想问模型规模。现在普遍看到更大的模型往往带来更高精度，你们的实验以及 OpenAI、Anthropic 等公司的 LLM 都有类似趋势。但还有另一种思路，就是用相对小的模型，把世界知识放到外部数据库里，让模型按需访问。你怎么看？这种路线是否可行，还是把世界知识直接包含在模型参数里更好？",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:38:01",
      "speaker": "Chelsea Finn",
      "en": "Yeah, it's an interesting question. So in my experience working on like retrieval-based systems, um is that it actually is a little bit tricky to, well first figure out what should be offloaded versus actually done by the model, and second uh sometimes the model will ignore the retrieved content and try to generate something itself and it actually seems to be quite tricky to get that technically to work exactly the way you want it.",
      "id": "seg-81",
      "index": 81,
      "zh": "Chelsea 回答：这是个很有意思的问题。以我做 retrieval-based system 的经验来看，真正实现起来有点棘手。第一，你要判断什么内容应该卸载到外部系统，什么应该由模型自己完成；第二，模型有时会直接忽略检索到的内容，自己生成答案。所以技术上很难让整个系统严格按你希望的方式工作。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:38:26",
      "speaker": "Chelsea Finn",
      "en": "Um, I think it's probably going to depend on the application and the use case in terms of how best to... like whether that might make sense. But in my experience, it ends up being quite tricky to figure out what the division of labor is. And even the like the model part of it will need to have some degree of intelligence in order to um like actually make use of the retrieved information and so forth. Uh, so I think it's a really fascinating research problem. Uh, but it also needs like a lot of research to make that uh to make that work successfully.",
      "id": "seg-82",
      "index": 82,
      "zh": "具体是否值得这样做，很可能取决于应用和使用场景。但在我的经验里，真正划分清楚 model 和 retrieval 的职责并不容易。而且模型本身仍然需要一定程度的智能，才能正确理解并利用检索到的信息。我认为这是非常有意思的研究问题，同时也还需要很多研究才能真正可靠工作。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:38:56",
      "speaker": "Frederick",
      "en": "Thank you.",
      "id": "seg-83",
      "index": 83,
      "zh": "Frederick：谢谢。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:38:57",
      "speaker": "Chelsea Finn",
      "en": "Yeah.",
      "id": "seg-84",
      "index": 84,
      "zh": "Chelsea：好的。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:38:58",
      "speaker": "Charu Thomas",
      "en": "Hi, Chelsea. My name is Charu Thomas. Um, first off, really appreciate the talk. It was really fascinating and have been a big fan of your work since metalearning. Um, when you think about how software and hardware have are going to continue to evolve, what are the biggest opportunities for builders today for your vision of physical intelligence?",
      "id": "seg-85",
      "index": 85,
      "zh": "Charu Thomas 提问：你好 Chelsea，我一直很喜欢你从 meta-learning 以来的工作。随着软件和硬件继续演进，如果希望实现你所说的 physical intelligence 愿景，你觉得今天的开发者和创业者最大的机会在哪里？",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:39:18",
      "speaker": "Chelsea Finn",
      "en": "I mean, I think that yeah, there's lots of different like opportunities to make things work a lot better and a lot of like open questions. I think kind of like what I was mentioning before, uh, thinking about better ways of having infrastructure on like kind of the robot side. I think that there isn't a lot of like... there's some open source code for that sort of thing, but there's a lot of um opportunities to make robot infrastructure better. Uh, and not a lot of people I think are working on that aspect of the problem. Also lots of opportunities... like I guess one of the things I love about um about AI and computer science as a whole is there's a really big open source community. And I think that there's a ton of opportunity to actually like do open source work and contribute to like a broader community that's trying to like collect data, open source models, fix bugs on those models, fine-tune those models, figure out new recipes for fine-tuning those models. Um so yeah all sorts of questions also like on the research side especially in the open source realm.",
      "id": "seg-86",
      "index": 86,
      "zh": "Chelsea 回答：这里有很多可以让系统变得更好的机会和开放问题。比如前面提到的机器人端基础设施，目前虽然已经有一些开源代码，但仍有很大提升空间，而且我觉得真正专门做这一层的人还不算多。另一方面，我很喜欢 AI 和计算机领域强大的开源文化。大家可以在数据收集、开放模型、修复模型 bug、微调模型、探索新的 fine-tuning recipe 等方面贡献大量工作。研究侧尤其是开源方向，仍然有很多值得做的问题。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:40:17",
      "speaker": "Charu Thomas",
      "en": "Yeah thank you.",
      "id": "seg-87",
      "index": 87,
      "zh": "Charu：好的，谢谢。",
      "chapterId": "qa-retrieval-open-source"
    },
    {
      "time": "00:40:17",
      "speaker": "Audience Question",
      "en": "Hi, Chelsea. Uh, I also, just like everyone else, am a big fan of all your work. So, thank you for putting that all out. Uh, I've been reading through a lot of your group's work recently and particularly enjoyed reading Siraj... Siraj's PhD thesis. It taught me a lot about scaling real world robotics with data. And a question I have is how do you think synthetic data will sort of scale for robotics in the future? As we've seen with LLMs, we've moved a we've moved away from sort of... not moved away from pre-training, but moved away from human collected data into more creating synthetic data and a lot of filtering and a lot of self-grading. So, how do you think using generative synthetic data for creating environments or reward models will impact robotics?",
      "id": "seg-88",
      "index": 88,
      "zh": "观众提问：我最近读了很多你们组的工作，尤其很喜欢 Siraj 的博士论文，它让我学到了很多怎样用数据规模化真实世界机器人。我想问 synthetic data 在机器人里未来会怎样扩展。LLM 领域近年越来越多使用模型生成数据、过滤和 self-grading。那么生成式 synthetic data，例如生成环境或 reward model，会怎样影响 robotics？",
      "chapterId": "qa-synthetic"
    },
    {
      "time": "00:41:02",
      "speaker": "Chelsea Finn",
      "en": "Yeah, I have many thoughts on this topic. Uh I think that at the end of the day there's going to be no replacement for real data and so... large amounts of real robot data is going to be a necessary component of any like system that's going to work in a generalizable way. Uh so we're going to need that. Um, at the same time I do think that there's tools for like simulation and synthetic data especially to potentially play on the evaluation side. Because it's very tricky to actually, as you for example are generalizing to many environments, it's very tricky to actually evaluate how well that model generalizes not just in one new environment but in 10 new environments because then you actually need to bring the robot to those 10 environments or construct 10 environments.",
      "id": "seg-89",
      "index": 89,
      "zh": "Chelsea 回答：我对这个问题有很多想法。归根结底，真实数据没有替代品。任何希望真正获得广泛泛化能力的系统，都必须包含大量真实机器人数据。与此同时，simulation 和 synthetic data 在 evaluation 上可能非常有用。比如你想测模型能否泛化到很多环境，只测一个新环境很容易，但要真实测试十个新环境，就必须把机器人带到十个地方，或者真的搭建十个环境，成本非常高。",
      "chapterId": "qa-synthetic"
    },
    {
      "time": "00:41:40",
      "speaker": "Chelsea Finn",
      "en": "Uh whereas in simulation that gets a lot easier. Uh and so I think I'm really excited about kind of simulation and synthetic data for that use case. I should also mention that I think that the analog of synthetic data in language models is actually not necessarily simulation in robotics but closer to something like reinforcement learning. Uh I think that a lot of synthetic data is generated by the model that's actually trying to do the task and then trying to kind of reason through different ways of doing the task. And I think that the analogy there is a robot that's trying to attempt the task and learn from its own attempts and get better from its own attempts. And that sort of online data from the model I think will also play a really critical role in post-training and something that uh we're working on quite a bit. Uh and so yeah that I think is like really important and really helpful.",
      "id": "seg-90",
      "index": 90,
      "zh": "而在仿真里，这类评估就容易得多，所以我很看好 simulation 和 synthetic data 在这个用途上的价值。我还想指出，语言模型里的 synthetic data，在机器人领域更对应的东西可能并非 simulation，而是 reinforcement learning。LLM 的很多 synthetic data 是模型自己尝试任务、探索不同解法后生成的。机器人领域与之对应的是让机器人自己尝试任务，从自己的尝试中学习并持续提高。这种模型自己产生的 online data，我认为会在 post-training 中扮演非常关键的角色，我们也正在投入很多工作。",
      "chapterId": "qa-synthetic"
    },
    {
      "time": "00:42:21",
      "speaker": "Audience Question",
      "en": "Thank you.",
      "id": "seg-91",
      "index": 91,
      "zh": "观众：谢谢。",
      "chapterId": "qa-synthetic"
    },
    {
      "time": "00:42:22",
      "speaker": "Chelsea Finn",
      "en": "Cool. I think we have time for one more question. Sorry we won't be able to get to everyone. Yeah.",
      "id": "seg-92",
      "index": 92,
      "zh": "Chelsea：好的，我们应该还有时间再回答最后一个问题。抱歉没办法回答所有人。",
      "chapterId": "qa-synthetic"
    },
    {
      "time": "00:42:27",
      "speaker": "Audience Question",
      "en": "Hi. It's super cool to see you as an MIT EES alumni now working in a really cool robotics and talking to us about robotics and entrepreneurship. Um, but I've been wondering how robotics research that involves hardware components plays out differently in academia versus industry and are there typically more resources, fewer constraints or broader applications in one setting over the other? And what kind of people or goals do you think might be better suited for each path?",
      "id": "seg-93",
      "index": 93,
      "zh": "观众提问：看到你从 MIT EES 的背景一路做到机器人和创业很酷。我一直很好奇，包含硬件组件的 robotics research 在 academia 和 industry 里分别是什么样的？哪一边通常资源更多、限制更少或者应用范围更广？什么样的人和研究目标更适合其中一种路径？",
      "chapterId": "qa-academia-fast"
    },
    {
      "time": "00:42:53",
      "speaker": "Chelsea Finn",
      "en": "Yeah, it's an interesting question. Uh, I still love both kind of startup um and academic environments and industry environments. I think they all have various pros and cons. Uh certainly I think that uh any um... I think that generally academic environments aren't quite as well resourced in terms of data collection throughput, eval throughput and compute as um like startups and industry labs. Uh but at the same time I think that there's a lot of uh problems that you can solve without large amounts of resources uh that uh we need to figure out like on the algorithm side.",
      "id": "seg-94",
      "index": 94,
      "zh": "Chelsea 回答：这是个很有意思的问题。我仍然很喜欢 startup、academia 和 industry 这些不同环境，它们各有优缺点。总体上，学术环境在数据收集吞吐、evaluation throughput 和算力方面，通常没有 startup 或 industrial lab 那么充足。但另一方面，也有很多算法层的问题并不需要巨量资源，学术界完全可以在这些方向上做出很重要的工作。",
      "chapterId": "qa-academia-fast"
    },
    {
      "time": "00:43:24",
      "speaker": "Chelsea Finn",
      "en": "Uh so I think that there's a lot of really interesting work to be done there. Um and then on the like in industry and in startups, I think the um actually like trying to do some of the research on these big models, scaling up data, seeing what things happen at large scales um is is really great to do there. Yeah, I think that there's yeah, there's a place for both. I also think that the gap isn't as large as often people make it seem. Uh and oftentimes people in industry environments kind of wish they had more compute. Like you kind of always wish that you had more resources. And sometimes when you have a lot of resources, you don't actually think as carefully and as critically about what runs you're going to be doing and so forth and you uh end up being sometimes more wasteful of compute uh than if you were kind of more compute constrained. So there's also actually downsides to having more resources in my experience.",
      "id": "seg-95",
      "index": 95,
      "zh": "而在工业界和创业公司，研究大型模型、扩大数据规模、观察系统在大规模下发生什么变化，这些事情就非常适合在那里做。我认为两边都有自己的位置，而且差距没有人们想象得那么绝对。工业界的人也经常觉得算力不够，大家总会希望资源更多。另外，当资源特别多时，有时反而不会那么仔细、批判性地设计每一次实验，可能比资源受限时更浪费计算。所以按照我的经验，资源多也有它自己的缺点。",
      "chapterId": "qa-academia-fast"
    },
    {
      "time": "00:44:10",
      "speaker": "Audience Question",
      "en": "I'm really sorry. Can I just ask a one quick question on architecture? I know that um the scaling laws have worked well for transformer based architectures and I was thinking do you see currently limits um in VLM based architecture which are kind of made for like text tokens because they don't have like modules for physical awareness. Yeah. And how do you deal with that?",
      "id": "seg-96",
      "index": 96,
      "zh": "观众追加问题：抱歉，我能不能再问一个很短的架构问题？Transformer 架构已经表现出很好的 scaling law，但现在很多 VLM 本来是围绕文本 token 设计的，并没有专门的 physical awareness 模块。你觉得基于 VLM 的架构目前有什么限制？你们又是怎么处理这个问题的？",
      "chapterId": "qa-academia-fast"
    },
    {
      "time": "00:44:35",
      "speaker": "Chelsea Finn",
      "en": "Yeah. So, we tokenized the actions and so I'd encourage you to take a look at the fast tokenizer paper that we put out um as as kind of a way to accomplish that. And yeah, we should uh wrap up there. Uh thanks everyone and um yeah, hope you enjoy the event.",
      "id": "seg-97",
      "index": 97,
      "zh": "Chelsea 回答：我们把 actions 做了 tokenization。我建议你看看我们发布的 FAST tokenizer 论文，它就是解决这类问题的一种方法。今天就到这里，谢谢大家，希望你们享受接下来的活动。",
      "chapterId": "qa-academia-fast"
    }
  ]
};
