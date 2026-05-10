import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}



import { Helmet } from 'react-helmet-async'

export default function Research() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>AI Research & Leadership | Single Core Labs</title>
        <meta name="description" content="Frontier AI research powering enterprise products. We study agentic systems, observability, and specialized LLM applications." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-left">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white max-w-5xl leading-[0.9] tracking-tightest"
          >
            AI Research That Powers Real Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-400 text-lg max-w-2xl mt-6 leading-relaxed"
          >
            We don't just implement AI — we study it. Our research feeds directly into the products and services we build for enterprises.
          </motion.p>
        </div>
      </section>



      {/* Collaboration CTA */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div>

            <h2 className="text-5xl lg:text-7xl font-light text-white tracking-tightest leading-[0.95]">Partner with our research team</h2>
            <p className="text-zinc-500 text-sm mt-8 max-w-2xl font-mono uppercase tracking-[0.4em]">University collaborations and industry partnerships available.</p>
          </div>
          <Link to="/contact" className="bg-black text-white py-4 px-10 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
