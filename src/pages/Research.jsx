import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Cpu, Network, FlaskConical } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const focusAreas = [
  { icon: Cpu, title: 'Inference Systems', desc: 'Optimizing large-model serving at scale — quantization, speculative decoding, continuous batching, and kernel-level tuning.' },
  { icon: Network, title: 'Distributed Training', desc: 'Multi-node, multi-GPU training architectures using FSDP, DeepSpeed, and custom gradient communication protocols.' },
  { icon: FlaskConical, title: 'LLM Evaluation', desc: 'Rigorous, reproducible evaluation pipelines for fine-tuned models — from accuracy benchmarks to domain-specific red-teaming.' },
  { icon: BookOpen, title: 'AI Systems Research', desc: 'Foundational research on AI resource scheduling, memory-efficient training, and energy-aware GPU allocation.' },
]

const papers = [
  { tag: 'Preprint', title: 'MIG-Aware Scheduler for Multi-Tenant LLM Serving', authors: 'Singh R., Menon K., Sharma A. — 2025', desc: 'A scheduler that dynamically allocates NVIDIA MIG slices across LLM serving and training workloads under SLA constraints.' },
  { tag: 'Workshop', title: 'Cost-Efficient RAG: Hybrid Search Without Dimension Overhead', authors: 'Gupta P., Nair S. — EMNLP 2025', desc: 'Demonstrates 60% retrieval cost reduction using hybrid sparse-dense search with learned aggregation weights.' },
  { tag: 'Blog', title: 'Practical QLoRA at Scale: Lessons from 50 Fine-tuning Runs', authors: 'Mehta V., SingleCore Labs Team — 2026', desc: 'Engineering insights from running QLoRA fine-tuning across multiple Indian-language datasets and model families.' },
]

const oss = [
  { name: 'sovereign-cluster', desc: 'Terraform modules for deploying sovereign GPU clusters on Indian cloud providers.' },
  { name: 'llm-bench-india', desc: 'Benchmarking suite for evaluating LLMs on Indian-language tasks and compliance scenarios.' },
  { name: 'mig-scheduler', desc: 'Open-source MIG-aware scheduler for Kubernetes, supporting fractional GPU allocation policies.' },
]

export default function Research() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-secondary/5 border border-accent-secondary/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-xs font-extrabold text-accent-secondary uppercase tracking-[0.2em]">Research & Development</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary max-w-4xl mx-auto leading-[0.9] tracking-[0.05em]">
            Advancing <span className="text-accent-secondary">Sovereign</span> AI Science
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed">
            Our engineering is powered by active AI systems research. We publish, open-source, and collaborate to advance the frontier of enterprise infrastructure.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <SectionLabel>Research Focus</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-10 flex gap-8 items-start"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-accent-secondary/5 text-accent-secondary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-3 tracking-tight">{title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="section-padding">
        <div className="section-container">
          <SectionLabel>Publications</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">Published Work</h2>
          <div className="space-y-8">
            {papers.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="card-surface p-10 flex flex-col lg:flex-row gap-10 items-start shadow-premium"
              >
                <span className="px-4 py-1.5 rounded-full bg-accent-secondary/5 text-accent-secondary text-[10px] font-extrabold uppercase tracking-widest shrink-0">{p.tag}</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-xs font-bold text-text-faint uppercase tracking-widest mb-6">{p.authors}</p>
                  <p className="text-text-secondary text-base leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OSS */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <SectionLabel>Open Source</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">Our Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oss.map((o, i) => (
              <motion.a
                key={o.name} href="https://github.com" target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-surface p-8 group block"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-extrabold text-accent-secondary tracking-tight group-hover:scale-110 transition-transform origin-left">{o.name}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{o.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-white">
        <div className="section-container py-24 border-t border-black/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-extrabold text-accent-secondary uppercase tracking-[0.3em] mb-4">Collaborate</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">Partner with our research team</h2>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl">University collaborations, industry partnerships, and engineering residencies available.</p>
          </div>
          <Link to="/contact" className="btn-primary py-5 px-10 text-base shadow-premium shrink-0">
            Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
