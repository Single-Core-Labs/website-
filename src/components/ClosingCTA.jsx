import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lock } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

// ─── PointerHighlight ─────────────────────────────────────────────────────────
function PointerHighlight({ children }) {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const measure = () => {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Trigger via IntersectionObserver so it works reliably
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.5 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      {children}

      {dimensions.width > 0 && dimensions.height > 0 && triggered && (
        <>
          {/* Border draw */}
          <motion.span
            style={{
              position: 'absolute',
              top: 0, left: 0,
              border: '1.5px solid rgba(255,102,0,0.8)',
              borderRadius: '4px',
              display: 'block',
              pointerEvents: 'none',
              zIndex: 2,
            }}
            initial={{ width: 0, height: 0 }}
            animate={{ width: dimensions.width, height: dimensions.height }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />

          {/* Bright fill — eye-catching orange glow */}
          <motion.span
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(255,102,0,0.28) 0%, rgba(255,140,0,0.18) 100%)',
              borderRadius: '4px',
              display: 'block',
              transformOrigin: 'left',
              pointerEvents: 'none',
              zIndex: 1,
              boxShadow: '0 0 32px rgba(255,102,0,0.2), inset 0 0 20px rgba(255,102,0,0.08)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeInOut' }}
          />

          {/* Cursor — positioned relative to box, stays INSIDE */}
          <motion.span
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              zIndex: 3,
              // Start from top-left of the box
              top: 0,
              left: 0,
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              // Move to bottom-right corner minus icon size (16px) minus padding (8px)
              x: dimensions.width - 28,
              y: dimensions.height - 28,
            }}
            transition={{
              opacity: { duration: 0.1, delay: 0.2 },
              duration: 0.9,
              delay: 0.2,
              ease: 'easeInOut',
            }}
          >
            <svg
              viewBox="0 0 16 16"
              height="18"
              width="18"
              fill="#FF6600"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 0 4px rgba(255,102,0,0.8))' }}
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
          </motion.span>
        </>
      )}
    </span>
  )
}

// ─── Main CTA Section ─────────────────────────────────────────────────────────
export default function ClosingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [typedLabel, setTypedLabel] = useState('')
  const fullLabel = '> READY TO SCALE?'

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
      {/* Radial warmth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255,102,0,0.06) 0%, transparent 70%)',
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

        {/* Headline block */}
        <div className="mb-10">

          {/* Line 1 */}
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="text-5xl md:text-7xl font-serif text-white"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              AI that ships.
            </motion.h2>
          </div>

          {/* Line 2 — single PointerHighlight, eye-catching */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <PointerHighlight>
              <h2
                className="text-4xl md:text-5xl font-serif"
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  // Bright white — not muted — so it stands out
                  color: '#ffffff',
                  padding: '6px 16px',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  // Text glow to pull the eye
                  textShadow: '0 0 40px rgba(255,102,0,0.35)',
                }}
              >
                On time. In budget. In production.
              </h2>
            </PointerHighlight>
          </motion.div>

        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1, ease }}
          className="font-mono text-[13px] text-white/40 max-w-[520px] mx-auto leading-[1.9] mb-12"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Book a 30-minute architecture review. We map your use case, identify failure points,
          and show you exactly what we'd build — before you sign anything.
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
            className="px-8 py-4 bg-[#FF6600] text-black font-mono text-[12px] font-bold rounded-[4px] uppercase tracking-wider transition-all duration-300 hover:bg-[#FF7A1A] hover:shadow-[0_0_32px_rgba(255,102,0,0.4)]"
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