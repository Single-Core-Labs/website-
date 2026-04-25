import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import StarBorder from '../components/StarBorder'

const services = [
  {
    title: 'AI Consulting & Implementation',
    description: 'You know AI can help your business. We figure out exactly where, build the roadmap, and implement it. From LLM integration to agentic workflows — we\'ve shipped it before.',
  },
  {
    title: 'Data Labeling & Annotation',
    description: 'High-quality training data is the foundation of every good model. We provide structured, accurate, and domain-specific annotation pipelines tailored to your use case.',
  },
  {
    title: 'MLOps & Infrastructure',
    description: 'Models that work in notebooks don\'t always work in production. We build the pipelines, monitoring, and infrastructure that keep your AI systems reliable at scale.',
  },
  {
    title: 'Custom Model Development',
    description: 'Off-the-shelf models won\'t always cut it. We design and fine-tune models specific to your data, domain, and performance requirements.',
  },
]

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>AI Services & Solutions | Single Core Labs</title>
        <meta name="description" content="Expert AI implementation services, from custom model development to production-grade automation agents." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        <div className="section-container relative z-10 text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mt-10 mb-8 tracking-tightest leading-[0.9]"
          >
            Services
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-12 card-surface"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-black">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em] mb-6">{'> Ready to get started?'}</p>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-white mb-12 max-w-3xl mx-auto tracking-tightest leading-[0.95]">
            Let's build your<br />next AI solution.
          </h2>
          <StarBorder as={Link} to="/contact" color="#5227FF" speed="4s" className="font-bold">
            Start the Conversation
          </StarBorder>
        </div>
      </section>

    </motion.div>
  )
}