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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <SectionLabel className="justify-center">Core Engineering</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white max-w-4xl mx-auto leading-[1.1] tracking-tight"
          >
            Deep AI Capabilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-500 text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed uppercase font-mono text-sm tracking-widest"
          >
            Six deep capability areas that cover the full AI infrastructure lifecycle
          </motion.p>
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
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">
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
                className="card-surface p-10 relative group rounded-3xl backdrop-blur-sm cursor-default"
              >
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-4 group-hover:text-accent-cyan transition-colors">Step {step}</div>
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute top-10 right-10 text-6xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-accent-cyan/[0.05] transition-colors">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div>
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">Ready to architect your AI stack?</h2>
          </div>
          <Link to="/contact" className="bg-white text-black py-4 px-10 rounded-full font-bold hover:bg-zinc-200 transition-all shrink-0">
            Book a Consultation
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
