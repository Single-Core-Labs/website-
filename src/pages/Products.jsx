import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Products() {
  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="min-h-screen pt-32 pb-20 bg-black flex flex-col items-center justify-center text-center px-4"
    >
      <div className="section-container">
        <SectionLabel className="justify-center">Product</SectionLabel>
        
        <h1 className="font-sans font-light text-5xl md:text-7xl text-white tracking-tight mt-6 mb-8">
          Coming Soon
        </h1>
        
        <p className="text-zinc-400 font-mono text-sm max-w-xl mx-auto mb-12 leading-relaxed uppercase tracking-widest">
          We are currently building proprietary AI products that will change the way you interact with data and infrastructure.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </motion.div>
  )
}
