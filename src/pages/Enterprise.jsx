import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import StarBorder from '../components/StarBorder'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

export default function Enterprise() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/8 blur-[140px] rounded-full pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-5xl">
          <SectionLabel className="justify-center">Enterprise</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tightest mb-10"
          >
            AI that works<br />at enterprise scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Two distinct tracks — Agentic Solutions for teams building autonomous workflows, and GenAI Solutions for teams shipping production AI products. Both backed by research. Both built to last.
          </motion.p>
<motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <StarBorder as="a" href={googleFormUrl} color="#5227FF" speed="4s" className="inline-flex items-center gap-2 font-semibold text-sm text-black">
              Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* ── Two tracks ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>Two Tracks</SectionLabel>
          <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tightest mt-6 mb-20 leading-[0.95]">
            Pick your path
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Agentic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-10 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400 mb-6 block">Agentic Solutions</span>
                <h3 className="font-display text-3xl font-light text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                  Build agents that<br />own the workflow
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  Domain-specific AI agents trained on your enterprise context, tools, and data. We build, train, evaluate, and scale agents that complete real job-specific tasks — not just answer questions.
                </p>
                <ul className="space-y-3 mb-10">
                  {['Custom agent build & integration', 'Post-training on proprietary data', 'Red teaming & safety evaluation', 'Continuous improvement pipeline'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 border border-purple-500/30 shrink-0 group-hover:bg-purple-400 transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <StarBorder as={Link} to="/enterprise/agentic" color="#5227FF" speed="4s" className="inline-flex items-center gap-2 text-sm font-medium text-white w-fit">
                Explore Agentic Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </StarBorder>
            </motion.div>

            {/* GenAI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-10 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-cyan mb-6 block">GenAI Solutions</span>
                <h3 className="font-display text-3xl font-light text-white mb-4 tracking-tight group-hover:text-accent-cyan transition-colors">
                  Ship GenAI that<br />works in production
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  RAG pipelines, fine-tuned models, production APIs, and evaluation systems. Concrete deliverables built by engineers who've shipped GenAI before — not demos that fall apart under real load.
                </p>
                <ul className="space-y-3 mb-10">
                  {['RAG pipelines on private data', 'LLM fine-tuning & domain adaptation', 'Production inference APIs', 'Evaluation, safety & red teaming'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 border border-cyan-500/30 shrink-0 group-hover:bg-accent-cyan transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <StarBorder as={Link} to="/enterprise/genai" color="#5227FF" speed="4s" className="inline-flex items-center gap-2 text-sm font-medium text-white w-fit">
                Explore GenAI Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </StarBorder>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why enterprise chooses us ── */}
      <section className="section-padding border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Why Us</SectionLabel>
            <h2 className="font-display font-light text-4xl lg:text-6xl font-light text-white tracking-tightest mt-6 mb-12 leading-[0.95]">
              What makes us different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num: '01', title: 'Research-backed', desc: 'Every solution is grounded in active AI systems research — not tutorials and copy-pasted boilerplate from last year.' },
              { num: '02', title: 'Forward-deployed', desc: 'Our engineers work inside your team, not from a distance. We understand your context before we write a line of code.' },
              { num: '03', title: 'Skin in the game', desc: 'Base build cost + revenue share on select engagements. We don\'t just deliver and disappear — we grow when you grow.' },
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
                <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
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
            Not sure which track<br />is right for you?
          </h2>
          <p className="text-zinc-500 font-mono text-sm max-w-md mx-auto mb-10">
            Book a 30-minute call. We'll listen to your problem and tell you exactly how we'd approach it.
          </p>
          <StarBorder as="a" href={googleFormUrl} color="#5227FF" speed="4s" className="inline-flex items-center gap-2 font-semibold text-sm text-black">
            Book a Meeting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </StarBorder>
        </div>
      </section>

    </motion.div>
  )
}
