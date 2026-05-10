import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StrikethroughText from '../components/StrikethroughText'
import FloatingCore from '../components/FloatingCore'
import LogoLoop from '../components/LogoLoop'
import IndustryVerticals from '../components/IndustryVerticals'
import InfrastructureLayer from '../components/InfrastructureLayer'
import ClosingCTA from '../components/ClosingCTA'

// Import logos
import cognizantLogo from '../assets/cognizant.png'
import boaLogo from '../assets/boa.png'
import globallogicLogo from '../assets/globallogic.png'

const ease = [0.16, 1, 0.3, 1]

const engineerLogos = [
  { 
    node: <img src={cognizantLogo} alt="Cognizant" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(0.6)', transition: 'filter 0.3s ease' }} />, 
    title: "Cognizant" 
  },
  { 
    node: <img src={boaLogo} alt="Bank of America" style={{ height: '44px', width: 'auto', filter: 'brightness(0) invert(0.6)', transition: 'filter 0.3s ease' }} />, 
    title: "Bank of America" 
  },
  { 
    node: <img src={globallogicLogo} alt="GlobalLogic" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(0.6)', transition: 'filter 0.3s ease' }} />, 
    title: "GlobalLogic" 
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B]">
      {/* ─── HERO ─── */}
      <main className="section-container relative pt-48 pb-20 flex flex-col md:flex-row items-center min-h-screen">
        <div className="flex-1 text-left">
          {/* Badge Label */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease }}
            className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse" />
            Enterprise-ready
          </motion.div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl mb-8 flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease }}
            >
              AI at <span className="italic">scale.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease }}
              className="text-zinc-500"
            >
              Without the <StrikethroughText text="chaos." />
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease }}
            className="text-zinc-400 text-lg md:text-xl max-w-xl mb-12 font-mono leading-relaxed"
          >
            Single Core Labs builds agentic infrastructure for enterprises that can't afford to get AI wrong.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FF6600] text-black font-mono text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Link>
            <Link
              to="/research"
              className="px-8 py-4 border border-white/10 text-white rounded-full font-mono text-sm hover:bg-white/5 transition-all"
            >
              See the Architecture
            </Link>
          </motion.div>

          {/* Social Proof Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 font-mono text-[10px] text-zinc-600 uppercase tracking-widest"
          >
            Trusted by 40+ enterprise teams
          </motion.div>
        </div>

        {/* 3D Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.5 }}
          className="flex-1 w-full flex justify-center items-center"
        >
          <FloatingCore />
        </motion.div>
      </main>

      {/* ─── LOGOLOOP SECTION ─── */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        background: '#09090B'
      }}>
        <p style={{
          textAlign: 'center',
          fontFamily: 'Geist Mono',
          fontSize: '11px',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: '56px',
          textTransform: 'uppercase'
        }}>
          Backed by Engineers From
        </p>

        <div style={{ height: '80px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={engineerLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={200}
            fadeOut={true}
            fadeOutColor="#09090B"
            scaleOnHover={true}
          />
        </div>
      </section>

      {/* ─── INDUSTRY VERTICALS ─── */}
      <IndustryVerticals />

      {/* ─── INFRASTRUCTURE LAYER ─── */}
      <InfrastructureLayer />

      {/* ─── CLOSING CTA ─── */}
      <ClosingCTA />

      {/* Bottom Indicators */}
      <div className="fixed bottom-8 left-8 flex items-center gap-3 font-mono text-[10px] text-zinc-700 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3 border border-zinc-800 rounded-full border-t-[#FF6600]"
        />
        LOADED
      </div>
    </div>
  )
}
