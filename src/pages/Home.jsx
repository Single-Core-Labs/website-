import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, FlaskConical, Cpu, Linkedin } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'
import { services } from '../data/services'
import { faq } from '../data/faq'

/* ---------- Hero animated grid canvas ---------- */
function HeroCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouseMove)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 40
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dx = x - mouse.current.x
          const dy = y - mouse.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const radius = Math.max(0, 1.5 - dist / 120)
          const alpha = Math.max(0.04, Math.min(0.6, radius))
          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.8, radius * 2), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
          ctx.fill()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

/* ---------- Page ---------- */
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const headline = 'Build Strategies. Deploy Intelligence. Own Your Cloud.'.split(' ')

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Animated gradients for Eloqwnt feel */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent-primary/10 blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-secondary/10 blur-[120px] pointer-events-none" 
        />


        <div className="section-container relative z-10 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Build Sovereign AI. Deploy at the Edge.</span>
            </div>
          </motion.div>

          <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tighter text-text-primary mb-10 max-w-6xl mx-auto">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {['Intelligence.', 'Cloud.'].includes(word)
                  ? <span className="text-accent-primary">{word}</span>
                  : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            India's premier sovereign AI cloud consultancy. We build GPU infrastructure and forward-deployed AI engineering for enterprises that refuse to compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            <Link to="/contact" className="btn-primary py-5 px-10 text-base shadow-premium">
              Start a Conversation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="btn-secondary py-5 px-10 text-base">
              Our Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-bg-secondary overflow-hidden">
        <div className="section-container relative">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight">Deep AI Capabilities</h2>
          <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
            Six deep capability areas that cover the full AI infrastructure lifecycle — from bare‑metal GPU clusters to production LLM observability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/services" className="btn-secondary">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <SectionLabel>Leadership</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Founder Text */}
            <div className="lg:col-span-7">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-text-primary mb-8 tracking-tight">
                Manav Sutar
              </h2>
              <p className="text-accent-primary font-bold text-lg uppercase tracking-widest mb-10">
                Founder & CTO
              </p>
              
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-2xl mb-12">
                <p>
                  A Bachelor of Engineering from <span className="text-text-primary font-bold">BITS Pilani</span>, Manav is dedicated to bridging the gap between AI research and production systems.
                </p>
                <p>
                  As a Technical Lead, KitOps Champion, and MiniMax Ambassador, he specializes in identifying and resolving bottlenecks in distributed AI systems — from bare-metal GPU clusters to production-grade LLM observability.
                </p>
                <p>
                  Through his publication <span className="text-text-primary font-bold italic">InfraFlowAI</span>, he actively contributes to the global AI ecosystem, making complex infrastructure simple and actionable for the next generation of engineers.
                </p>
              </div>

              {/* Founder CTA / Socials */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/manavsutar/" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-black/5 bg-white shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 font-bold text-sm"
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" /> LinkedIn
                </a>
                <a 
                  href="https://infraflowai.substack.com/" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-black/5 bg-white shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 font-bold text-sm"
                >
                  <Shield className="w-5 h-5 text-accent-primary" /> InfraFlowAI
                </a>
              </div>
            </div>

            {/* Expertise Cards Sidebar */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {[
                { title: 'AI Infrastructure', desc: 'Expertise in bare-metal GPU orchestration and sovereign cloud design.' },
                { title: 'Distributed Systems', desc: 'Optimization for high-scale AI workloads and inference throughput.' },
                { title: 'Applied MLOps', desc: 'Building seamless pipelines from research papers to production APIs.' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-8 rounded-3xl bg-bg-secondary border border-black/5 shadow-soft hover:border-accent-primary/20 transition-all"
                >
                  <h4 className="font-extrabold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Our Advantage</SectionLabel>
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-text-primary">Why SingleCore Labs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num: '01', icon: Shield, title: 'Sovereign by Design', desc: 'Total control of your IP, models, and customer data. Infrastructure that gives you ownership, free from centralized vendor lock-in and opaque pricing.' },
              { num: '02', icon: FlaskConical, title: 'Research-Backed Engineering', desc: 'Solutions grounded in active research — not copy-pasted workflows. We leverage the latest AI systems research to optimize model inference and orchestration.' },
              { num: '03', icon: Cpu, title: 'Cost-Optimized GPUs', desc: 'Fractional GPU partitioning and cluster balancing dramatically reduce overhead for AI operations, making enterprise AI accessible at every scale.' },
            ].map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="px-8 py-10 text-center"
              >
                <div className="font-sans text-5xl font-extrabold text-white/[0.04] mb-4">{num}</div>
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 mx-auto mb-5">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="font-sans text-xl font-bold text-text-primary mb-4">{title}</h3>
                <p className="font-mono text-sm text-text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── FAQ ─── */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center">Common Questions</SectionLabel>
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-text-primary text-center mb-12">
              Frequently Asked
            </h2>
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="border-t border-white/[0.06] bg-bg-surface">
        <div className="section-container py-20 text-center">
          <p className="font-mono text-xs text-accent-cyan uppercase tracking-[3px] mb-4">{'> Ready to build?'}</p>
          <h2 className="font-sans text-4xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-2xl mx-auto">
            Ready to build your<br />
            <span className="text-gradient-blue">AI cloud?</span>
          </h2>
          <p className="font-mono text-text-muted text-sm max-w-md mx-auto mb-10">
            Book a free 30-minute architecture consultation. We'll assess your stack and design a clear roadmap.
          </p>
          <Link to="/contact" className="btn-primary text-base py-4 px-8">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
