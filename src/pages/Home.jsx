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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        
        {/* Centered glow like the reference */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-sans font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8 max-w-4xl mx-auto">
              When intelligence reaches out <br />
              to instinct, the future takes shape
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-500 font-mono text-sm max-w-xl mx-auto mb-10 leading-relaxed uppercase tracking-wider"
          >
            an unlikely alliance — where human intuition <br />
            and algorithmic precision move as one
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <Link to="/contact" className="group flex items-center gap-3 bg-black text-white py-3 px-8 rounded-full font-medium text-sm border border-white/10 hover:border-white/40 transition-all">
              See it in action <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Artistic hands / Graphic placeholder - Absolute bottom positioning */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] md:h-[400px] opacity-30 pointer-events-none select-none">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500 blur-2xl" />
           </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-bg-secondary overflow-hidden border-t border-white/5">
        <div className="section-container relative">
          <SectionLabel>Core Capabilities</SectionLabel>
          <div className="bg-white px-8 py-4 inline-block mb-8 rounded-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-light text-black tracking-tight">Deep AI Capabilities</h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-2xl mb-16 leading-relaxed">
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
      <section className="section-padding bg-black relative overflow-hidden border-t border-white/5">
        <div className="section-container relative z-10">
          <SectionLabel>Leadership</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Founder Text */}
            <div className="lg:col-span-7">
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
                Manav Sutar
              </h2>
              <p className="text-accent-primary font-bold text-lg uppercase tracking-widest mb-10">
                Founder & CTO
              </p>
              
              <div className="space-y-6 text-zinc-500 text-lg leading-relaxed max-w-2xl mb-12">
                <p>
                  A Bachelor of Engineering from <span className="text-white font-medium">BITS Pilani</span>, Manav is dedicated to bridging the gap between AI research and production systems.
                </p>
                <p>
                  As a Technical Lead, KitOps Champion, and MiniMax Ambassador, he specializes in identifying and resolving bottlenecks in distributed AI systems — from bare-metal GPU clusters to production-grade LLM observability.
                </p>
                <p>
                  Through his publication <span className="text-white font-medium italic">InfraFlowAI</span>, he actively contributes to the global AI ecosystem, making complex infrastructure simple and actionable for the next generation of engineers.
                </p>
              </div>

              {/* Founder CTA / Socials */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/manavsutar/" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 font-bold text-sm text-white"
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" /> LinkedIn
                </a>
                <a 
                  href="https://infraflowai.substack.com/" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 font-bold text-sm text-white"
                >
                  <Shield className="w-5 h-5 text-zinc-400" /> InfraFlowAI
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
                  className="p-8 rounded-3xl bg-black border border-white/5 shadow-soft hover:border-accent-cyan/20 transition-all"
                >
                  <h4 className="font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
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
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-text-primary">Why Single core labs</h2>
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
      <section className="border-t border-white/5 bg-black">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-[3px] mb-4">{'> Ready to build?'}</p>
          <h2 className="font-sans text-4xl lg:text-6xl font-light text-white mb-8 max-w-2xl mx-auto">
            Ready to build your<br />
            AI cloud?
          </h2>
          <p className="font-mono text-zinc-500 text-sm max-w-md mx-auto mb-10">
            Book a free 30-minute architecture consultation. We'll assess your stack and design a clear roadmap.
          </p>
          <Link to="/contact" className="bg-black text-white py-4 px-10 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all">
            Start the Conversation
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
