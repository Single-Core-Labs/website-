import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, FlaskConical, Cpu } from 'lucide-react'
import LightPillar from '../components/LightPillar'
import DataFlowCanvas from '../components/DataFlowCanvas'
import SectionLabel from '../components/SectionLabel'
import FAQAccordion from '../components/FAQAccordion'
import { faq } from '../data/faq'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
        <DataFlowCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-sans font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8 max-w-4xl mx-auto">
              We build AI products and own the tech side with you
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-400 font-mono text-sm max-w-xl mx-auto mb-10 leading-relaxed uppercase tracking-wider"
          >
            Custom builds · Ready-to-deploy products · Fractional CTO
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-black/60 backdrop-blur-sm text-white py-3 px-8 rounded-full font-medium text-sm border border-white/20 hover:border-white/50 transition-all"
            >
              See it in action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="section-container">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] text-center mb-12">
            Backed by Engineers & Researchers from
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">Bank of America</span>
            <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">GlobalLogic</span>
            <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">Cognizant</span>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Our Advantage</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white">Why Single core labs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num: '01', icon: Shield, title: 'Sovereign by Design', desc: 'Total control of your IP, models, and customer data. Infrastructure that gives you ownership, free from centralized vendor lock-in and opaque pricing.' },
              { num: '02', icon: FlaskConical, title: 'Research-Backed Engineering', desc: 'Solutions grounded in active research — not copy-pasted workflows. We leverage the latest AI systems research to optimize model inference and orchestration.' },
              { num: '03', icon: Cpu, title: 'Skin in the Game', desc: "We work on base build cost + revenue share. We don't just deliver and disappear — we grow when you grow, so our incentives are fully aligned with yours." },
            ].map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="px-8 py-10 text-center flex flex-col items-center"
              >
                <div className="font-display text-6xl font-light text-white/[0.06] mb-4 leading-none">{num}</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 mb-5">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="font-mono text-sm text-zinc-500 leading-relaxed max-w-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center">Common Questions</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white text-center mb-12">
              Frequently Asked
            </h2>
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="border-t border-white/5 bg-black">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-[3px] mb-4">{'> Ready to build?'}</p>
          <h2 className="font-sans text-4xl lg:text-6xl font-light text-white mb-8 max-w-2xl mx-auto">
            Let's build your<br />next AI product.
          </h2>
          <p className="font-mono text-zinc-500 text-sm max-w-md mx-auto mb-10">
            Book a free 30-minute consultation. We'll understand your problem and tell you exactly how we'd solve it.
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-4 px-10 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all"
          >
            Start the Conversation
          </a>
        </div>
      </section>

    </motion.div>
  )
}
