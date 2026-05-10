import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lock } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

export default function ClosingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [typedLabel, setTypedLabel] = useState("")
  const fullLabel = "> READY TO SCALE?"

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        setTypedLabel(fullLabel.slice(0, i))
        i++
        if (i > fullLabel.length) clearInterval(timer)
      }, 30)
      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section 
      ref={ref} 
      className="relative py-[120px] px-[8vw] bg-[#09090B] border-t border-white/[0.06] text-center overflow-hidden"
    >
      {/* Subtle radial warmth */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255,102,0,0.05) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Typed Label */}
        <div 
          className="font-mono text-[10px] tracking-[0.2em] text-[#FF6600]/70 uppercase mb-8 flex items-center justify-center gap-1"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          {typedLabel}
          <span className="w-[1px] h-3 bg-[#FF6600]/70 animate-pulse" />
        </div>

        {/* Headline */}
        <div className="mb-12 overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="text-5xl md:text-7xl font-serif text-white mb-2"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Enterprise AI that ships.
          </motion.h2>
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="text-4xl md:text-5xl font-serif text-white/45"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            On time. In budget. In production.
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1, ease }}
          className="font-mono text-[13px] text-white/40 max-w-[520px] mx-auto leading-[1.9] mb-12"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Book a 30-minute architecture review. We map your use case, identify failure points, and show you exactly what we'd build — before you sign anything.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          className="flex flex-wrap justify-center gap-5 mb-16"
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-[#FF6600] text-black font-mono text-[12px] font-bold rounded-[4px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_32px_rgba(255,102,0,0.4)]"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Book Architecture Review →
          </a>
          <a
            href="/case-studies"
            className="px-8 py-4 text-white/50 font-mono text-[12px] transition-colors hover:text-white"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-mono text-[10px] text-white/25 tracking-[0.1em] uppercase"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          <span className="flex items-center gap-2">
            <Lock className="w-3 h-3 text-[#FF6600]" /> NDA on request
          </span>
          <span className="text-white/10">·</span>
          <span>No commitment required</span>
          <span className="text-white/10">·</span>
          <span>Response within 24hrs</span>
        </motion.div>
      </div>
    </section>
  )
}
