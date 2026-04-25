import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

const pillars = [
  {
    title: 'Services that ship',
    desc: "We don't prototype forever. We build AI systems designed to run in production — with real data, real latency requirements, and real stakes. Every engagement ends with something you own, understand, and can operate independently.",
    color: 'purple'
  },
  {
    title: 'Products built for real problems',
    desc: "We don't just consult — we build. Our in-house products are born from the same challenges our clients face, giving us a practitioner's perspective that pure service shops and pure research labs rarely have. We build things people actually use.",
    color: 'cyan'
  },
  {
    title: 'Research that matters',
    desc: "We stay at the frontier. Our research spans agentic systems, AI observability, autonomous infrastructure, and large language model applications in specialized domains. We publish openly, contribute to the community, and bring that cutting-edge knowledge directly into every client engagement and product we ship.",
    color: 'indigo'
  },
  {
    title: 'Infrastructure that holds',
    desc: "Reliability isn't optional. We treat AI infrastructure with the same rigor as any mission-critical system — observability, failover, security, and maintainability built in from day one. We build for the long run, not the launch.",
    color: 'blue'
  },
  {
    title: 'AI built around your workflow',
    desc: "We don't force your business into a generic AI mold. We study your domain, your data, and your team before we write a single line of code. The result is AI that fits the way your organization actually works — not a demo that looks impressive and breaks in production.",
    color: 'emerald'
  },
  {
    title: 'Transparency by default',
    desc: "We share what we learn. Through technical writing, open-source contributions, and community involvement, we contribute back to the ecosystem that makes this work possible. Clients always understand what we've built and why.",
    color: 'zinc'
  }
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="section-container relative z-10 text-left max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-[84px] text-white leading-[1.05] tracking-tightest mb-10"
          >
            Engineering the <br />Future of Enterprise AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-light tracking-tight"
          >
            Single Core Labs is an enterprise AI services, product, and research company. We're building a future where every organization has the expertise, infrastructure, and AI systems to make transformative technology work for their unique context.
          </motion.p>
        </div>
      </section>

      {/* ── The Gap / Mission ── */}
      <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-4xl lg:text-6xl font-light text-white leading-[1.1] tracking-tightest">
                Closing the Gap between AI Promise and Production
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed font-light">
                While AI capabilities have advanced dramatically, critical gaps remain. Most enterprises lack the internal knowledge to evaluate, deploy, and maintain production-grade AI systems. 
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 lg:pt-24"
            >
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Expertise in building reliable, scalable AI pipelines remains concentrated in a handful of labs and startups. And despite the promise, off-the-shelf AI rarely fits the specific workflows, data, or compliance requirements of real businesses. 
              </p>
              <p className="text-white text-xl leading-relaxed font-medium tracking-tight border-l-2 border-purple-500 pl-8">
                Single Core Labs exists to close that gap — making enterprise AI understandable, deployable, and genuinely useful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Team ── */}
      <section className="section-padding bg-zinc-950/50 border-t border-white/5">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Engineers, Researchers, Operators
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We are a team that has shipped production AI systems, built and launched AI products, published technical research, and contributed to open-source infrastructure at the intersection of frontier models and real-world constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="card-surface p-10 group relative overflow-hidden flex flex-col"
              >
                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${pillar.color}-500/20 to-transparent`} />
                <h3 className="font-display text-xl font-medium text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing / CTA ── */}
      <section className="bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-10" />
        <div className="section-container py-32 text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="font-display text-4xl lg:text-7xl font-light text-white mb-10 tracking-tightest leading-[1.05]">
              Let's build <br />something that lasts.
            </h2>
            <div className="space-y-8 mb-16">
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                Single Core Labs works with enterprises ready to move beyond pilots and build AI systems that actually run their business. We're also looking for researchers, collaborators, and partners who want to push what's possible.
              </p>
              <p className="text-white text-lg font-medium">
                If that's you, let's talk.
              </p>
            </div>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black py-4 px-10 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-all group"
            >
              Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
