import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

const whatWeDo = [
  'AI-powered agents — SRE, automation, decision systems',
  'Scalable backend systems and cloud infrastructure',
  'Developer tools and internal platforms',
  'Intelligent monitoring and reliability solutions',
]

const problems = [
  'Managing infrastructure at scale',
  'Debugging failures in distributed systems',
  'Automating repetitive operational tasks',
  'Making real-time, data-driven decisions',
]

const solutions = [
  'Automate DevOps and SRE workflows',
  'Detect and resolve system issues proactively',
  'Integrate AI into engineering pipelines',
  'Reduce operational overhead and downtime',
]

const whoWeServe = [
  { label: 'Startups', desc: 'Building scalable products that need to move fast without breaking.' },
  { label: 'Engineering Teams', desc: 'SRE, DevOps, and backend teams drowning in operational complexity.' },
  { label: 'AI-first Companies', desc: 'Teams that need AI infrastructure done right, not bolted on.' },
  { label: 'Enterprises', desc: 'Organizations modernizing legacy infrastructure for the next decade.' },
]

const edge = [
  { title: 'AI + Systems Engineering', desc: 'We don\'t just do AI. We understand the systems it runs on — and build both together.' },
  { title: 'Production-first', desc: 'Every solution is designed for real-world load, not demo conditions.' },
  { title: 'Developer-first', desc: 'Built by engineers, for engineers. No unnecessary abstraction.' },
  { title: 'Scale from day one', desc: 'Architecture decisions that don\'t need to be undone six months later.' },
]

const techFocus = [
  'AI / LLMs & autonomous agents',
  'Cloud infrastructure — AWS, Kubernetes',
  'Observability & monitoring systems',
  'Backend & distributed systems',
]

const roadmap = [
  { step: '01', title: 'Launch SRE Agent Platform', desc: 'An autonomous SRE agent that detects, diagnoses, and resolves infrastructure incidents without human intervention.' },
  { step: '02', title: 'Internal Developer Tooling Ecosystem', desc: 'A suite of developer tools that reduce toil, automate repetitive tasks, and give engineering teams back their time.' },
  { step: '03', title: 'Startup AI Infrastructure Partnerships', desc: 'Embedded partnerships with early-stage startups to build and own their AI infrastructure from the ground up.' },
  { step: '04', title: 'Enterprise Scale', desc: 'Bringing the same intelligent systems to larger organizations — with the reliability and compliance they require.' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/8 blur-[140px] rounded-full pointer-events-none" />
        <div className="section-container relative z-10 text-left max-w-6xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tightest mb-10"
          >
            Technology-first.<br />Intelligence-driven.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-light tracking-tight"
          >
            SingleCore Labs builds intelligent systems, scalable infrastructure, and AI-driven solutions for modern enterprises — simplifying complex operations and accelerating innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-start gap-4"
          >
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Work with us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-surface p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-400 mb-6">Vision</p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-6 tracking-tightest leading-[0.95]">
                The backbone of next-generation intelligent infrastructure
              </h3>
              <p className="text-zinc-500 text-base leading-relaxed font-light">
                Powering startups and enterprises globally with infrastructure that thinks, adapts, and scales — without the operational overhead that slows teams down.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-surface p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-cyan mb-6">Mission</p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-6 tracking-tightest leading-[0.95]">
                Scalable AI systems that automate, improve, and decide
              </h3>
              <p className="text-zinc-500 text-base leading-relaxed font-light">
                We develop AI-driven systems that automate operations, improve reliability, and enable faster decision-making — across every industry that runs on software.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>

              <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-8 leading-[0.95]">
                We design and build intelligent systems
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                From autonomous agents to cloud infrastructure — we build the systems that modern engineering teams need to operate at scale without burning out.
              </p>
              <ul className="space-y-4">
                {whatWeDo.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 border border-white/20 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Problem / Solution */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-surface p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-400/70 mb-4">The Problem</p>
                <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                  Modern systems are becoming increasingly complex — teams struggle with:
                </p>
                <ul className="space-y-3">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/20 border border-red-500/20 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-surface p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-green-400/70 mb-4">Our Solution</p>
                <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                  SingleCore Labs builds intelligent systems that:
                </p>
                <ul className="space-y-3">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/20 border border-green-500/20 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-20 leading-[0.95]">
            Built for teams that build
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoWeServe.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-surface p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <h3 className="font-display text-lg font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  {w.label}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our edge ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-20 leading-[0.95]">
            Why SingleCore Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {edge.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="card-surface p-10 group relative overflow-hidden flex gap-8 items-start"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                <div className="font-mono text-[10px] text-zinc-700 pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-white mb-2 tracking-tight group-hover:text-accent-cyan transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech focus + Roadmap ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Tech focus */}
            <div>

              <h2 className="font-display font-light text-3xl lg:text-4xl text-white tracking-tight mt-4 mb-10">
                What we build on
              </h2>
              <ul className="space-y-4">
                {techFocus.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 py-4 border-b border-white/[0.04] last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{t}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Roadmap */}
            <div>

              <h2 className="font-display font-light text-3xl lg:text-4xl text-white tracking-tight mt-4 mb-10">
                Where we're headed
              </h2>
              <div className="space-y-4">
                {roadmap.map((r, i) => (
                  <motion.div
                    key={r.step}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-6 items-start group"
                  >
                    <span className="font-mono text-[10px] text-zinc-700 pt-1 shrink-0">{r.step}</span>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-1 group-hover:text-accent-cyan transition-colors">{r.title}</h4>
                      <p className="text-zinc-600 text-xs leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Solutions CTA strip ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              to="/enterprise/agentic"
              className="card-surface p-10 group relative overflow-hidden flex flex-col justify-between min-h-[200px]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400 mb-3">Agentic Solutions</p>
                <h3 className="font-display text-2xl font-light text-white group-hover:text-purple-400 transition-colors tracking-tight">
                  Build agents that own the workflow
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-purple-400 transition-colors mt-6">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              to="/enterprise/genai"
              className="card-surface p-10 group relative overflow-hidden flex flex-col justify-between min-h-[200px]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-cyan mb-3">GenAI Solutions</p>
                <h3 className="font-display text-2xl font-light text-white group-hover:text-accent-cyan transition-colors tracking-tight">
                  Ship GenAI that works in production
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-accent-cyan transition-colors mt-6">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Ready to build<br />something that lasts?
          </h2>
          <p className="text-zinc-500 font-mono text-sm max-w-md mx-auto mb-10">
            Book a 30-minute call. We'll understand your problem and tell you exactly how we'd approach it.
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </motion.div>
  )
}
