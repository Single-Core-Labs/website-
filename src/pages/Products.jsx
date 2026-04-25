import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'


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

        
        <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white tracking-tightest mt-10 mb-10 leading-[0.9]">
          Coming Soon
        </h1>
        
        <p className="text-zinc-500 font-mono text-[11px] max-w-xl mx-auto mb-16 leading-relaxed uppercase tracking-[0.4em]">
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
