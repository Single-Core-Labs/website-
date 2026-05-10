import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Users, Lock } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const metrics = [
  { value: 99.99, label: 'Uptime SLA', suffix: '%' },
  { value: 48, label: 'Deployment', prefix: '<', suffix: 'hr' },
  { value: 'SOC 2', label: 'Certified', suffix: 'Type II' },
  { value: 0, label: 'Vendor Lock-in', prefix: 'Zero', suffix: '' }
]

const features = [
  {
    category: 'Agnosticism',
    title: 'Frontier Model Agnosticism',
    body: 'Deploy across OpenAI, Anthropic, Gemini, or open-source — we abstract the model layer so you never replatform again.',
    icon: Cpu,
    delay: 0
  },
  {
    category: 'Engineering',
    title: 'Dedicated Pod Engineering',
    body: 'A dedicated squad of ML engineers, architects, and domain experts assigned to your account. Not shared. Not offshore.',
    icon: Users,
    delay: 0.12
  },
  {
    category: 'Architecture',
    title: 'Compliance-First Architecture',
    body: 'HIPAA, SOC 2, GDPR-ready by default. Security reviews, audit trails, and data residency controls built into every engagement.',
    icon: Lock,
    delay: 0.24
  }
]

export default function InfrastructureLayer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-[#09090B] py-[100px] px-[8vw]">
      {/* Header */}
      <div className="text-center mb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[10px] tracking-[0.22em] text-[#FF6600] uppercase mb-6"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Why Single Core Labs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="text-5xl md:text-6xl font-serif text-white mb-8"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          The infrastructure layer enterprises trust.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="font-mono text-[13px] text-white/40 max-w-2xl mx-auto"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          Not a vendor. A technical partner embedded in your stack.
        </motion.p>
      </div>

      {/* Row 1: Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 relative">
        {metrics.map((metric, i) => (
          <div key={metric.label} className="relative flex flex-col items-center group">
            {/* Vertical divider */}
            {i !== 0 && (
              <div className="hidden md:block absolute left-[-4px] top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
            )}
            
            <div className="text-4xl md:text-5xl font-serif text-white mb-3" style={{ fontFamily: '"Instrument Serif", serif' }}>
              <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} trigger={isInView} />
            </div>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.14em]" style={{ fontFamily: '"Geist Mono", monospace' }}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2: Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}

function Counter({ value, prefix = '', suffix = '', trigger }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (trigger && typeof value === 'number') {
      let start = 0
      const end = value
      const duration = 1500
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [trigger, value])

  if (typeof value !== 'number') {
    return <span>{prefix} {value} {suffix}</span>
  }

  return (
    <span>
      {prefix} {count % 1 === 0 ? count : count.toFixed(2)}{suffix}
    </span>
  )
}

function FeatureCard({ feature, isInView }) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: feature.delay, duration: 0.7, ease }}
      className="bg-[#0F0F11] border border-white/10 p-10 rounded-[2px] group relative transition-all duration-300 hover:border-[#FF6600]/30 will-change-[transform,opacity]"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FF6600] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-5 h-5 text-[#FF6600]" />
        <span className="font-mono text-[9px] text-[#FF6600] uppercase tracking-widest" style={{ fontFamily: '"Geist Mono", monospace' }}>
          {feature.category}
        </span>
      </div>
      
      <h3 className="text-xl text-white font-serif mb-6" style={{ fontFamily: '"Instrument Serif", serif' }}>
        {feature.title}
      </h3>
      
      <p className="font-mono text-[12px] text-white/50 leading-relaxed" style={{ fontFamily: '"Geist Mono", monospace' }}>
        {feature.body}
      </p>
    </motion.div>
  )
}
