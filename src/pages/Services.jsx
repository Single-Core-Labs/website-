import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Page hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-extrabold text-accent-primary uppercase tracking-[0.2em]">Core Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary max-w-4xl mx-auto leading-[0.9] tracking-[0.05em]">
            Deep <span className="text-accent-primary">AI</span> Capabilities
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed">
            Six deep capability areas that cover the full AI infrastructure lifecycle — from bare‑metal GPU clusters to production LLM observability.
          </p>
        </div>
      </section>

      {/* Full cards grid */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">
            Our Delivery Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Architecture audit and requirements mapping across your stack and compliance constraints.' },
              { step: '02', title: 'Design', desc: 'Custom infrastructure blueprint — cluster topology, orchestration, and data flows.' },
              { step: '03', title: 'Deploy', desc: 'Hands-on deployment with our engineers embedded directly in your team.' },
              { step: '04', title: 'Operate', desc: 'Ongoing observability, optimization, and quarterly infrastructure health reviews.' },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-10 relative group"
              >
                <div className="text-[10px] font-extrabold text-accent-primary uppercase tracking-[0.25em] mb-4">Step {step}</div>
                <h3 className="text-2xl font-extrabold text-text-primary mb-3 tracking-tight group-hover:text-accent-primary transition-colors">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                <div className="absolute top-10 right-10 text-6xl font-black text-black/[0.03] select-none pointer-events-none">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="section-container py-24 border-t border-black/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-extrabold text-accent-primary uppercase tracking-[0.3em] mb-4">Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">Ready to architect your AI stack?</h2>
          </div>
          <Link to="/contact" className="btn-primary py-5 px-10 text-base shadow-premium shrink-0">
            Book a Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
