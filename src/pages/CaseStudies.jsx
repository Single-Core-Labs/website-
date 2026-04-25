import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Building2, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

import caseStudies from '../data/case-studies.json'

export default function CaseStudies() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-32 pb-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 text-left">
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tightest mb-8">
            Proof of Impact
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light tracking-tight">
            Explore how we've helped leading organizations deploy production-grade AI that drives real business value.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-surface group relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[400px]"
            >
              <div className={`absolute top-0 left-0 w-1 lg:w-full lg:h-1 bg-${study.color}-500/50`} />
              
              {/* Info Side */}
              <div className="lg:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Building2 className="w-5 h-5 text-zinc-600" />
                    <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">{study.client}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                    {study.title}
                  </h2>
                  <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-8">
                    {study.desc}
                  </p>
                </div>
                
                <Link 
                  to={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-3 text-white font-medium hover:gap-5 transition-all"
                >
                  View Case Study <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats Side */}
              <div className="lg:w-1/2 bg-white/[0.02] border-l border-white/5 p-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-subtle-grid opacity-5" />
                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-3xl bg-white/[0.03] border border-white/10">
                      <BarChart3 className={`w-8 h-8 text-${study.color}-400`} />
                    </div>
                  </div>
                  <div className="text-5xl md:text-7xl font-display font-light text-white mb-2 tracking-tightest">
                    {study.impact.split(' ')[0]}
                  </div>
                  <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    {study.impact.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}
