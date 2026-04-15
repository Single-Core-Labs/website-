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
  { tag: 'Blog', title: 'Practical QLoRA at Scale: Lessons from 50 Fine-tuning Runs', authors: 'Mehta V., Single core labs Team — 2026', desc: 'Engineering insights from running QLoRA fine-tuning across multiple Indian-language datasets and model families.' },
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <SectionLabel className="justify-center">Research & Development</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white max-w-4xl mx-auto leading-[1.1] tracking-tight"
          >
            Advancing Sovereign AI Science
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-500 text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed font-mono text-sm uppercase tracking-widest"
          >
            Engineering powered by active AI systems research.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>Research Focus</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-10 flex flex-col md:flex-row gap-8 items-start group cursor-default"
              >
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 text-white shrink-0 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500">
                  <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-7 h-7 relative z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>Publications</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">Published Work</h2>
          <div className="space-y-8">
            {papers.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-zinc-950/50 border border-white/5 p-10 flex flex-col lg:flex-row gap-10 items-start rounded-3xl"
              >
                <span className="px-4 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-mono uppercase tracking-widest shrink-0 border border-white/5">{p.tag}</span>
                <div>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-6">{p.authors}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
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
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div>
            <SectionLabel>Collaborate</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">Partner with our research team</h2>
            <p className="text-zinc-500 text-sm mt-4 max-w-2xl font-mono uppercase tracking-widest">University collaborations and industry partnerships available.</p>
          </div>
          <Link to="/contact" className="bg-white text-black py-4 px-10 rounded-full font-bold hover:bg-zinc-200 transition-all shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
