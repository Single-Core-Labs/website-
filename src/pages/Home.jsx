import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import StarBorder from '../components/StarBorder'
const Beams = lazy(() => import('../components/Beams'))

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>Single Core Labs | Enterprise AI Infrastructure & Services</title>
        <meta name="description" content="Sovereign AI cloud and infrastructure lifecycle management. We build production-grade agentic systems and scalable AI pipelines for the modern enterprise." />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
        {/* Beams Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <Beams
              beamWidth={3}
              beamHeight={30}
              beamNumber={20}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={30}
            />
          </Suspense>
        </div>

        {/* Background Grid and Glows */}
        <div className="absolute inset-0 bg-subtle-grid bg-grid-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20 pointer-events-none z-[1]" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[2]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-scale-accent-purple/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-scale-accent-purple/10 blur-[120px] rounded-full" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-[3]" />

          <div className="section-container relative z-10 w-full pt-20 pb-12 md:pt-40 md:pb-32">
            <div className="max-w-4xl text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >

                <h1 className="font-display font-light text-5xl lg:text-[84px] leading-[1.05] tracking-tightest text-white mb-8">
                  AI at scale<br />
                  Without the chaos
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-400 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-light tracking-tight"
              >
                Single Core Labs delivers the data engine and agentic solutions to power the next generation of enterprise AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row justify-start gap-6 items-center sm:items-start"
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-white text-black hover:bg-zinc-200 transition-all rounded-full text-sm font-semibold flex items-center gap-2 shadow-2xl shadow-white/10 group"
                >
                  Book a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/products" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-2 group pt-3">
                  Explore Platform <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 md:py-20 bg-black border-y border-white/5">
        <div className="section-container">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] text-center mb-8 md:mb-12">
            Backed by engineers from
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-30 grayscale hover:opacity-60 transition-all duration-1000">
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">Bank of America</span>
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">GlobalLogic</span>
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">Cognizant</span>
          </div>
        </div>
      </section>

      {/* ─── AGENTIC SOLUTIONS ─── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="font-display text-3xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
              Agentic Solutions
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              Convert your proprietary data and domain expertise into intelligent agents that evolve through continuous human feedback. Build AI systems that don't just respond — they learn, adapt, and improve with every interaction.
            </p>
            <StarBorder as={Link} to="/enterprise/agentic" color="#8B5CF6" speed="4s" className="inline-flex items-center gap-2 font-medium">
              Explore Agentic Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── DOMAINS (BENTO BOX) ─── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-scale-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="text-center mb-12 md:mb-20">

            <h2 className="font-display text-3xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tightest">
              Built for the most<br />demanding AI workloads
            </h2>
            <p className="text-scale-text-secondary text-base md:text-lg max-w-2xl mx-auto font-light">
              Trusted across industries where reliability and precision are non-negotiable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 max-w-7xl mx-auto">
            {/* Large Card: Healthcare */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-3 md:row-span-2 group p-8 md:p-12 card-surface cursor-pointer flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scale-accent-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Healthcare</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm">
                  AI-driven clinical decision support, patient intake automation, and secure medical data analysis for modern health systems.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all relative z-10">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Medium Card: Finance */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-3 group p-8 md:p-10 card-surface cursor-pointer flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scale-accent-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Finance</h3>
                <p className="text-zinc-400 text-sm md:text-base max-w-md">
                  Algorithmic risk assessment, fraud detection, and automated compliance agents for global financial institutions.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all relative z-10">
                Explore Finance <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Small Card: Insurance */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-3 group p-8 card-surface cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Insurance</h3>
              <p className="text-zinc-400 text-sm">AI-powered claims processing and intelligent risk modeling for the next generation of insurance providers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── AI FOR THE ENTERPRISE ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="text-center">

            <h2 className="font-display text-4xl lg:text-6xl font-light text-white mt-4 mb-4 tracking-tight">
              AI for the Enterprise
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
              Full-Stack AI Solutions
            </p>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Outcomes delivered with data, models, agents, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER VALUE ─── */}
      <section className="py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="text-center mb-16">

            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mt-4 mb-4 tracking-tight">
              How We Deliver Value
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              We translate deep expertise in building frontier models and agents into enterprise solutions. Combining our platform, experienced teams, and advanced processes to accelerate your AI transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">AI Native Expertise</h3>
              <p className="text-zinc-500 text-sm">Founded to accelerate AI adoption. Our platform powers nearly every leading AI model, helping enterprises capture real business value.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Engineering Teams</h3>
              <p className="text-zinc-500 text-sm">Our dedicated AI engineering teams work with you side-by-side to deliver powerful solutions.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Frontier Research</h3>
              <p className="text-zinc-500 text-sm">We evaluate the latest LLMs and perform frontier research to stay at the cutting edge.</p>
            </div>
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
          <StarBorder as={Link} to="/contact" color="#8B5CF6" speed="4s" className="font-bold">
            Start the Conversation
          </StarBorder>
        </div>
      </section>

    </motion.div>
  )
}
