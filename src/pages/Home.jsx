import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LightPillar from '../components/LightPillar'
import DataFlowCanvas from '../components/DataFlowCanvas'
import SectionLabel from '../components/SectionLabel'
import StarBorder from '../components/StarBorder'

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
              Building AI Infrastructure for Engineering Teams
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-400 font-mono text-sm max-w-xl mx-auto mb-10 leading-relaxed uppercase tracking-wider"
          >
            Research-driven · Production-ready · Built to scale
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <StarBorder as="a" href={googleFormUrl} color="#5227FF" speed="4s" className="text-white font-medium text-sm flex items-center gap-2">
              See it in action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
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

      {/* ─── AGENTIC SOLUTIONS ─── */}
      <section className="py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="justify-center">Applied AI</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
              Agentic Solutions
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Convert your proprietary data and domain expertise into intelligent agents that evolve through continuous human feedback. Build AI systems that don't just respond — they learn, adapt, and improve with every interaction.
            </p>
            <StarBorder as={Link} to="/enterprise/agentic" color="#5227FF" speed="4s" className="inline-flex items-center gap-2 font-medium">
              Explore Agentic Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── DOMAINS ─── */}
      <section className="py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
              Powering AI Transformation for<br />the World's Leading Enterprises
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Trusted across industries where reliable agents matter most — healthcare, insurance, financial services, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StarBorder as="div" color="#5227FF" speed="4s" className="group p-8 rounded-2xl bg-black border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer block">
              <h3 className="text-xl font-semibold text-white mb-2">Insurance</h3>
              <p className="text-zinc-500 text-sm">AI-powered claims processing, risk assessment, and fraud detection agents.</p>
            </StarBorder>
            <StarBorder as="div" color="#5227FF" speed="4s" className="group p-8 rounded-2xl bg-black border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer block">
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-zinc-500 text-sm">Clinical decision support, patient intake automation, and medical data analysis.</p>
            </StarBorder>
            <StarBorder as="div" color="#5227FF" speed="4s" className="group p-8 rounded-2xl bg-black border border-white/10 hover:border-green-500/30 transition-all cursor-pointer block">
              <h3 className="text-xl font-semibold text-white mb-2">Financial Services</h3>
              <p className="text-zinc-500 text-sm">Algorithmic trading, portfolio management, and compliance automation agents.</p>
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── AI FOR THE ENTERPRISE ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="text-center">
            <SectionLabel className="justify-center">Enterprise</SectionLabel>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-white mt-4 mb-4 tracking-tight">
              AI for the Enterprise
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto">
              Full-Stack AI Solutions — outcomes delivered with world-class data, models, agents, and deployment.
            </p>
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
          <StarBorder as="a" href={googleFormUrl} color="#5227FF" speed="4s" className="font-bold">
            Start the Conversation
          </StarBorder>
        </div>
      </section>

    </motion.div>
  )
}
