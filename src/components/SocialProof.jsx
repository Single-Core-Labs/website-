import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const companies = [
  { name: 'Bank of America', delay: 0.1 },
  { name: 'GlobalLogic', delay: 0.25 },
  { name: 'Cognizant', delay: 0.4 },
]

const label = "BACKED BY ENGINEERS FROM"
const ease = [0.16, 1, 0.3, 1]

export default function SocialProof() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={containerRef}
      className="relative py-[64px] bg-[#0A0A0B] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Noise Texture Background Tint */}
      <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
      
      {/* Edge Fade Mask for Depth Illusion */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      />

      <div className="section-container relative z-20 flex flex-col items-center">
        {/* Animated Label */}
        <div className="flex mb-10 overflow-hidden">
          {label.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.02,
                duration: 0.6,
                ease: ease
              }}
              className="font-mono text-[10px] tracking-[0.22em] text-white/35 whitespace-pre"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Company Names */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {companies.map((company, index) => (
            <CompanyItem key={company.name} company={company} trigger={isInView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyItem({ company, trigger, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
      animate={trigger ? { 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0 
      } : {}}
      transition={{
        delay: company.delay,
        duration: 0.7,
        ease: ease
      }}
      className="relative group cursor-default"
    >
      <motion.div
        animate={{
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 1.3
        }}
        className="will-change-[transform,opacity]"
      >
        <motion.span
          className="block text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300"
          style={{
            color: 'rgba(255, 255, 255, 0.22)'
          }}
          whileHover={{ 
            color: 'rgba(255, 255, 255, 0.75)',
            letterSpacing: '0.02em',
            transition: { duration: 0.3 }
          }}
        >
          <span className="relative inline-block pb-1">
            {company.name}
            {/* Orange Underline Slide-in from left */}
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FF6600]"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileHover={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.4, ease: ease }}
            />
          </span>
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
