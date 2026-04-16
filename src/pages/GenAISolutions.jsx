import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

const solutions = [
  {
    title: 'RAG Pipelines',
    tag: 'Retrieval',
    desc: 'Retrieval-augmented generation on your private data. Your models answer from your knowledge base — not hallucinated guesses. We design, build, and optimize the full retrieval stack.',
  },
  {
    title: 'LLM Fine-tuning',
    tag: 'Training',
    desc: 'Domain-specific model training on your proprietary datasets. Models that speak your industry\'s language, follow your business rules, and outperform generic alternatives on your tasks.',
  },
  {
    title: 'AI Agents & Workflows',
    tag: 'Automation',
    desc: 'Multi-step autonomous agents integrated into your existing tools — Slack, CRMs, internal APIs. They act, not just respond. We build agents that complete real work.',
  },
  {
    title: 'GenAI APIs & Backends',
    tag: 'Infrastructure',
    desc: 'Production-ready inference endpoints with rate limiting, cost controls, caching, and observability built in from day one. Not a prototype — a backend you can ship.',
  },
  {
    title: 'Evaluation & Safety',
    tag: 'Quality',
    desc: 'Red teaming, output monitoring, and hallucination detection. We build the evaluation harness so you can ship GenAI you can actually trust in front of customers.',
  },
  {
    title: 'Data Preparation',
    tag: 'Foundation',
    desc: 'Clean, structured, labeled training data. The unglamorous work that determines whether your model is good or great. We handle it so your team doesn\'t have to.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Scope & Strategy',
    desc: 'We start with your use case, not a template. A 30-minute call to understand your data, your stack, and what success looks like — then a clear proposal.',
  },
  {
    step: '02',
    title: 'Build & Integrate',
    desc: 'Our engineers build the solution against your real data and integrate it into your existing tools. No handoff to a junior team. The people you talk to are the people who build.',
  },
  {
    step: '03',
    title: 'Evaluate & Harden',
    desc: 'We run evaluation pipelines, red team the outputs, and iterate until the quality bar is met. You get a system that works — not one that works in the demo.',
  },
  {
    step: '04',
    title: 'Ship & Improve',
    desc: 'Deploy to production with monitoring in place. We stay involved post-launch to track performance, catch regressions, and keep improving.',
  },
]

export default function GenAISolutions() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-5xl">
          <SectionLabel className="justify-center">Enterprise · GenAI</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8"
          >
            GenAI that ships<br />to production
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Concrete GenAI deliverables — RAG pipelines, fine-tuned models, production APIs, and evaluation systems — built by engineers who've done it before.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-black py-4 px-10 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all"
            >
              Discuss your use case <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel>What We Build</SectionLabel>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-white tracking-tight mt-4">
                Six GenAI capabilities,<br />one team
              </h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm lg:text-right">
              Every engagement is scoped to your specific problem. We don't sell packages — we build what you actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-8 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-cyan mb-4 block">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-16">
            From first call to production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-surface p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-4 group-hover:text-accent-cyan transition-colors">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator strip ── */}
      <section className="section-padding border-t border-white/5 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num: '01', title: 'No demos, only production', desc: 'We build systems that work under real load, with real data, in your real stack.' },
              { num: '02', title: 'Research-backed', desc: 'Every solution is grounded in current AI research — not tutorials and copy-pasted boilerplate.' },
              { num: '03', title: 'Skin in the game', desc: 'Base build cost + revenue share on select engagements. We grow when you grow.' },
            ].map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="px-8 py-10 text-center flex flex-col items-center"
              >
                <div className="font-display text-5xl font-light text-white/[0.05] mb-4">{num}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Have a GenAI problem<br />worth solving?
          </h2>
          <p className="text-zinc-500 font-mono text-sm max-w-md mx-auto mb-10">
            Tell us what you're building. We'll tell you exactly how we'd approach it.
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black py-4 px-10 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all group"
          >
            Discuss your use case <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </motion.div>
  )
}
