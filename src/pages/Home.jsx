import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Shield, FlaskConical, Cpu, Linkedin,
  Terminal, CreditCard, Cloud, Activity, Brain, 
  ShoppingBag, Lock, Dna 
} from 'lucide-react'
import LightPillar from '../components/LightPillar'
import SectionLabel from '../components/SectionLabel'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'
import { services } from '../data/services'
import { faq } from '../data/faq'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform";

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

        {/* Layer 1 — LightPillar fills the entire hero */}
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

        {/* Layer 2 — subtle vignette to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        {/* Layer 3 — content */}
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
            <div className="flex justify-center">
              <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">Bank of America</span>
            </div>
            <div className="flex justify-center">
              <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">GlobalLogic</span>
            </div>
            <div className="flex justify-center">
              <span className="text-xl md:text-2xl font-semibold text-white tracking-tighter">Cognizant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR SERVICES ─── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          {/* Header */}
          <div className="mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-sans font-light text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-4">
              Building AI products and solutions<br className="hidden lg:block" /> that drive real business value.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1 — Custom Software Builds */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-10 flex flex-col group"
            >
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">01</p>
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  Custom Software Builds
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  Have a specific problem? Budget of $5k? Forward-deployed engineers will understand your challenge and build a custom solution.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Prototypes delivered within 24 hours of a clear scope',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 border border-white/20 shrink-0 group-hover:bg-accent-cyan group-hover:border-accent-cyan/40 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={googleFormUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-6 py-3 hover:border-white/30 transition-all w-fit"
              >
                Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Card 2 — Ready-to-Deploy AI Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-10 flex flex-col group relative overflow-hidden"
            >
              {/* Subtle highlight on this card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
              <div className="flex-1 relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">02</p>
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  Ready-to-Deploy AI Products
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  Plug-and-play, modular solutions we originally built as internal tools or for client projects. Each one is production-tested, configurable, and ready to drop into your stack.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Skip the build phase. Go live within 72 hours',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 border border-white/20 shrink-0 group-hover:bg-accent-cyan group-hover:border-accent-cyan/40 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 relative">
                <a
                  href={googleFormUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-6 py-3 hover:border-white/30 transition-all"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 border border-white/5 rounded-full px-6 py-3 hover:text-white hover:border-white/20 transition-all"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>

            {/* Card 3 — Fractional CTO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-10 flex flex-col group"
            >
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">03</p>
                <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
                  Fractional CTO / Technical Co-founders
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  Not looking for a vendor. Looking for someone who owns the tech side with you. Base build cost + revenue share — we grow when you grow.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Product strategy, architecture, and execution. All handled',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 border border-white/20 shrink-0 group-hover:bg-accent-cyan group-hover:border-accent-cyan/40 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={googleFormUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-6 py-3 hover:border-white/30 transition-all w-fit"
              >
                Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-bg-secondary overflow-hidden border-t border-white/5">
        <div className="section-container relative">
          <SectionLabel>Core Capabilities</SectionLabel>
          <div className="bg-white px-8 py-4 inline-block mb-8 rounded-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-light text-black tracking-tight">Deep AI Capabilities</h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-2xl mb-16 leading-relaxed">
            The technical muscle behind every engagement — from bare-metal GPU clusters to production LLM observability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/services" className="btn-secondary">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── INDUSTRY EXPERTISE ─── */}
      <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <SectionLabel className="justify-center">Industry Expertise</SectionLabel>
            <h2 className="font-sans font-light text-4xl lg:text-6xl text-white tracking-tight mt-4">
              Domains We Power
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto mt-6">
              From regulated industries to cutting-edge tech, we architect solutions that scale across diverse ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: 'DevOps & Infra', icon: Terminal },
              { label: 'FinTech', icon: CreditCard },
              { label: 'Cloud Computing', icon: Cloud },
              { label: 'Healthcare', icon: Activity },
              { label: 'AI Research', icon: Brain },
              { label: 'E-commerce', icon: ShoppingBag },
              { label: 'Cybersecurity', icon: Lock },
              { label: 'BioTech', icon: Dna },
            ].map((domain, i) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative"
              >
                <div className="card-surface p-8 h-full flex flex-col items-center justify-center text-center border-white/[0.03] hover:border-accent-cyan/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/20 transition-all">
                    <domain.icon className="w-5 h-5 text-zinc-400 group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-zinc-400 group-hover:text-white transition-colors">
                    {domain.label}
                  </h3>
                  
                  {/* Subtle hover line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
              & + many more industry specific applications
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS PREVIEW ─── */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Products</SectionLabel>
              <h2 className="font-sans font-light text-4xl lg:text-5xl text-white tracking-tight mt-4">
                Proprietary tools built for <br />
                the next generation of AI.
              </h2>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-2">
              Learn more about our products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface p-1 relative overflow-hidden group h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full border border-white/5 rounded-[20px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3">Model Orchestration Engine</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    Automated deployment and scaling of open-source LLMs on private infrastructure.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-zinc-400">Coming Soon</span>
                  <Link to="/products" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-surface p-1 relative overflow-hidden group h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full border border-white/5 rounded-[20px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3">Privacy-First Data Guard</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    PII redaction and compliance layer for LLM applications.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-zinc-400">Coming Soon</span>
                  <Link to="/products" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Our Advantage</SectionLabel>
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-text-primary">Why Single core labs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num: '01', icon: Shield, title: 'Sovereign by Design', desc: 'Total control of your IP, models, and customer data. Infrastructure that gives you ownership, free from centralized vendor lock-in and opaque pricing.' },
              { num: '02', icon: FlaskConical, title: 'Research-Backed Engineering', desc: 'Solutions grounded in active research — not copy-pasted workflows. We leverage the latest AI systems research to optimize model inference and orchestration.' },
              { num: '03', icon: Cpu, title: 'Skin in the Game', desc: 'We work on base build cost + revenue share. We don\'t just deliver and disappear — we grow when you grow, so our incentives are fully aligned with yours.' },
            ].map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="px-8 py-10 text-center"
              >
                <div className="font-sans text-5xl font-extrabold text-white/[0.04] mb-4">{num}</div>
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 mx-auto mb-5">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="font-sans text-xl font-bold text-text-primary mb-4">{title}</h3>
                <p className="font-mono text-sm text-text-muted leading-relaxed">{desc}</p>
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
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-text-primary text-center mb-12">
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
            Let's build your<br />
            next AI product.
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
