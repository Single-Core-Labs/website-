export const projects = [
  {
    id: '01',
    label: 'Cloud Setup',
    title: 'Startup AI Cloud Infrastructure',
    description:
      'Architected a full bare-metal GPU cluster for a rapid-growth generative AI startup, cutting compute costs by 40% while maintaining 99.9% uptime SLA.',
    tags: ['Kubernetes', 'Bare-Metal', 'NVIDIA A100'],
    accentColor: 'cyan',
  },
  {
    id: '02',
    label: 'Fine-Tuning',
    title: 'LLM Adaptation for Enterprise',
    description:
      'End-to-end fine-tuning pipeline for a localized LLM in the finance sector, using custom Indian-language datasets and distributed LoRA training on 8×H100s.',
    tags: ['LoRA', 'Ray', 'Hugging Face'],
    accentColor: 'blue',
  },
  {
    id: '03',
    label: 'Architecture',
    title: 'Advanced RAG Pipeline Deployment',
    description:
      'Built a scalable hybrid-search RAG architecture handling millions of documents with sub-100ms query latency and full observability via OpenTelemetry.',
    tags: ['Vector DB', 'Observability', 'LangChain'],
    accentColor: 'purple',
  },
  {
    id: '04',
    label: 'Optimization',
    title: 'Fractional GPU Optimization',
    description:
      'Implemented Multi-Instance GPU (MIG) strategies to multiplex existing H100 hardware, accelerating dev cycles 3× and reducing idle GPU time by 70%.',
    tags: ['Slurm', 'MIG', 'MLOps'],
    accentColor: 'cyan',
  },
]
