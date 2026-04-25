import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, BarChart3, Target, CheckCircle2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import caseStudies from '../data/case-studies.json'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find(s => s.slug === slug)

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-6">Case Study not found</h1>
          <Link to="/case-studies" className="text-purple-400 hover:underline">Back to Case Studies</Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-32 pb-32">
      <Helmet>
        <title>{study.title} | Single Core Labs Case Study</title>
        <meta name="description" content={study.desc} />
      </Helmet>

      <div className="section-container">
        {/* Back Link */}
        <Link 
          to="/case-studies" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Impact Stories
        </Link>

        {/* Study Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Building2 className="w-4 h-4 text-zinc-400" />
              </div>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{study.client}</span>
            </div>
            <h1 className="font-display font-light text-4xl md:text-6xl text-white leading-[1.1] tracking-tightest">
              {study.title}
            </h1>
          </div>

          <div className="card-surface p-8 lg:p-12 border-l-4" style={{ borderColor: `var(--${study.color}-500)` }}>
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className={`w-6 h-6 text-${study.color}-400`} />
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Primary Impact</p>
            </div>
            <p className="text-4xl md:text-5xl font-display font-light text-white tracking-tight">
              {study.impact}
            </p>
          </div>
        </div>

        {/* Project Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { label: 'Challenge', text: 'The organization faced critical bottlenecks in scaling their legacy infrastructure to support real-time AI workloads.', icon: Target },
            { label: 'Solution', text: study.desc, icon: Zap },
            { label: 'Outcome', text: `Successfully achieved ${study.impact} within the first 6 months of production deployment.`, icon: CheckCircle2 },
          ].map((item, i) => (
            <div key={i} className="card-surface p-8">
              <div className="flex items-center gap-3 mb-6">
                <item.icon className="w-4 h-4 text-zinc-600" />
                <h3 className="text-white text-sm font-medium uppercase tracking-widest">{item.label}</h3>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-zinc max-w-none">
            <h2 className="text-3xl font-display font-light text-white mb-10 tracking-tight">Project Overview</h2>
            {study.content.split('\n').map((para, i) => (
              <p key={i} className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                {para}
              </p>
            ))}
          </div>

          {/* Deep Technical Insight Section */}
          <div className="mt-20 p-12 card-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h3 className="text-white text-xl font-medium mb-6">Technical Architecture</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              To solve the high-latency requirements of this deployment, we utilized a tiered RAG architecture with local caching and specialized embedding clusters...
            </p>
            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-xs text-zinc-600">
              {`// Scalable Infrastructure Config\ncluster_size: 128_nodes\nreplication_factor: 3\nconsistency: strong`}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

// Minimal placeholder for the Zap icon needed in the grid
function Zap({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
