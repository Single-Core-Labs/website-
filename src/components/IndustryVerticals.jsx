import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Landmark, Shield, Gavel, Building2 } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const verticals = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    body: 'AI-driven clinical decision support, patient intake automation, and secure medical data analysis for modern health systems. High-reliability agents that prioritize patient outcomes.',
    cta: 'Explore Healthcare →',
    delay: 0
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: Landmark,
    body: 'Algorithmic risk assessment, fraud detection, and automated compliance agents for global financial institutions.',
    cta: 'Explore Finance →',
    delay: 0.1
  },
  {
    id: 'insurance',
    title: 'Insurance',
    icon: Shield,
    body: 'AI-powered claims processing and intelligent risk modeling for the next generation of insurance providers.',
    cta: 'Explore Insurance →',
    delay: 0.2
  },
  {
    id: 'legal',
    title: 'Legal',
    icon: Gavel,
    body: 'Automated document review and case law research agents that maintain strict data privacy and chain of custody.',
    cta: 'Explore Legal →',
    delay: 0.3
  },
  {
    id: 'government',
    title: 'Government',
    icon: Building2,
    body: 'Secure infrastructure for public sector automation, digital transformation, and constituent service optimization.',
    cta: 'Explore Government →',
    delay: 0.4
  }
]

export default function IndustryVerticals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-[#09090B] py-[100px] px-[8vw]">
      {/* Header */}
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[10px] tracking-[0.22em] text-[#FF6600]/80 uppercase mb-4"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Deployment Verticals
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="text-5xl md:text-6xl font-serif text-white mb-6"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          Mission-critical industries.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="font-mono text-[13px] text-white/45 max-w-lg"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Where failure is not an option — we are.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr] gap-[2px]">
        {/* Healthcare (Large, spans 2 rows) */}
        <div className="md:row-span-2">
          <VerticalCard vertical={verticals[0]} isLarge isInView={isInView} />
        </div>
        
        {/* Finance */}
        <VerticalCard vertical={verticals[1]} isInView={isInView} />
        
        {/* Insurance */}
        <VerticalCard vertical={verticals[2]} isInView={isInView} />
        
        {/* Legal & Government (Full width on bottom or shared row) */}
        <div className="md:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
          <VerticalCard vertical={verticals[3]} isInView={isInView} />
          <VerticalCard vertical={verticals[4]} isInView={isInView} />
        </div>
      </div>
    </section>
  )
}

function VerticalCard({ vertical, isLarge = false, isInView }) {
  const Icon = vertical.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: vertical.delay, duration: 0.6, ease }}
      className={`bg-[#111113] p-10 flex flex-col justify-between group relative overflow-hidden transition-colors duration-200 hover:bg-[#161618] will-change-[transform,opacity] h-full ${isLarge ? 'min-h-[500px]' : 'min-h-[250px]'}`}
    >
      {/* Hover left border */}
      <div className="absolute left-0 top-0 w-[3px] h-full bg-[#FF6600] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
      
      <div>
        <Icon className={`text-[#FF6600] mb-6 ${isLarge ? 'w-8 h-8' : 'w-6 h-6'}`} />
        <h3 
          className={`text-white font-serif mb-4 ${isLarge ? 'text-4xl' : 'text-2xl'}`}
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          {vertical.title}
        </h3>
        <p 
          className={`text-white/50 font-mono leading-relaxed ${isLarge ? 'text-[12px] leading-loose' : 'text-[11px]'}`}
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          {vertical.body}
        </p>
      </div>
      
      <div 
        className="mt-8 font-mono text-[11px] text-[#FF6600] tracking-widest uppercase"
        style={{ fontFamily: '"Geist Mono", monospace' }}
      >
        {vertical.cta}
      </div>
    </motion.div>
  )
}
