import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

const services = [
  { label: 'Build', desc: 'Custom domain-specific agents designed around your workflows, tools, and business logic.' },
  { label: 'Train', desc: 'Post-training on your proprietary data, tools, and skills to improve precision and reliability.' },
  { label: 'Translate', desc: 'Transform unstructured enterprise data into structured, agent-ready formats.' },
  { label: 'Red Teaming', desc: 'Adversarial testing to surface agent vulnerabilities before they reach production.' },
]

const pillars = [
  {
    label: 'Build',
    desc: 'Forward-deployed AI engineers build, evaluate, integrate, and scale advanced agents that complete job-specific tasks with your enterprise tools — from day one.',
  },
  {
    label: 'Train',
    desc: 'ML engineers apply frontier research in reinforcement learning and advanced fine-tuning to teach your agents how to use your unique enterprise context, tools, and skills.',
  },
  {
    label: 'Translate',
    desc: 'We turn unstructured data into agent-ready formats, assist your subject matter experts with ground truth labeling, and develop evaluation rubrics as the foundation for continuous improvement.',
  },
  {
    label: 'Red Teaming',
    desc: 'Advanced adversarial testing to simulate real-world agent misuse, surface vulnerabilities, and help you ship agents that are compliant, safe, and production-ready.',
  },
]

const process = [
  {
    title: 'Translate Data to be Agent-Ready',
    desc: 'Agents are only as good as the data behind them. We transform unstructured enterprise data into structured, standardized formats — so your agents have a reliable foundation to reason from, not noise to wade through.',
  },
  {
    title: 'Build Domain-Specific Agents',
    desc: 'Our forward-deployed engineers build, evaluate, integrate, and scale agents that complete job-specific tasks using your unique enterprise data, tools, and context — not generic off-the-shelf models.',
  },
  {
    title: 'Evaluate and Observe',
    desc: 'Continuous evaluation of agent performance, reliability, and safety. Human-in-the-loop feedback, observability tracing, and red teaming keep your agents honest and improving.',
  },
  {
    title: 'Deploy at Scale',
    desc: 'Ship agentic infrastructure that integrates cleanly into your existing stack — long-running, asynchronous, fail-safe agents that your teams can actually rely on.',
  },
  {
    title: 'Train Continuously',
    desc: 'Agents improve over time. Your teams provide rubrics, feedback, and process guidance. We apply frontier reinforcement learning research to continuously sharpen agent precision and reliability.',
  },
]

export default function AgenticSolutions() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-5xl">
          <SectionLabel className="justify-center">Enterprise · Agentic</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tightest mb-10"
          >
            Agentic Solutions<br />that actually work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We build, train, and scale domain-specific AI agents grounded in your enterprise context — not generic models bolted onto your stack.
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
              Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>The Platform</SectionLabel>
              <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-8 leading-[0.95]">
                Expert services meets<br />agent training platform
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                We combine hands-on engineering with a purpose-built agent training platform — so you can build, evaluate, train, and scale domain-specific AI agents that are actually reliable in production.
              </p>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-6 py-3 hover:border-white/30 transition-all"
              >
                Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-surface p-6 group"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-3">{s.label}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Four pillars ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-20 leading-[0.95]">
            Four ways we build agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-10 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <h3 className="font-display text-2xl font-light text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                  {p.label}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-20 leading-[0.95]">
            From raw data to reliable agents
          </h2>
          <div className="space-y-4">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex flex-col md:flex-row gap-8 items-start border border-white/5 rounded-3xl p-8 hover:border-purple-500/20 transition-colors bg-black"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 md:w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Ready to build<br />your enterprise agents?
          </h2>
          <p className="text-zinc-500 font-mono text-sm max-w-md mx-auto mb-10">
            Talk to our team. We'll scope your use case and design a clear path to production.
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black py-4 px-10 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all group"
          >
            Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </motion.div>
  )
}
