import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LightPillar from '../components/LightPillar'
import DataFlowCanvas from '../components/DataFlowCanvas'
import SectionLabel from '../components/SectionLabel'
import StarBorder from '../components/StarBorder'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

       {/* ─── HERO ─── */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
         {/* Background Effects */}
         <div className="absolute inset-0 bg-subtle-grid bg-grid-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20 pointer-events-none" />
         
         <div className="absolute inset-0 pointer-events-none">
           <LightPillar
             topColor="#5227FF"
             bottomColor="#FF9FFC"
             intensity={1}
             rotationSpeed={0.3}
             glowAmount={0.002}
             pillarWidth={3}
             pillarHeight={0.4}
             noiseIntensity={0}
             pillarRotation={25}
             interactive={false}
             mixBlendMode="screen"
             quality="high"
           />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <SectionLabel className="justify-center mb-6 opacity-60">Intelligence meets instinct</SectionLabel>
             <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-white mb-10 max-w-5xl mx-auto">
               Building the future<br />of Agentic AI
             </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-tight"
          >
            Single Core Labs delivers the data engine and agentic solutions to power the next generation of AI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <Link 
              to="/contact" 
              className="btn-primary group"
            >
              Book a Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/enterprise" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Explore Platform
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 md:py-20 bg-black border-y border-white/5">
        <div className="section-container">
          <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em] text-center mb-10 md:mb-16">
            Trusted by Leaders in AI & Technology
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-30 grayscale hover:opacity-60 transition-all duration-1000">
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">Bank of America</span>
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">GlobalLogic</span>
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter">Cognizant</span>
          </div>
        </div>
      </section>

      {/* ─── AGENTIC SOLUTIONS ─── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="justify-center">Applied AI</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
              Agentic Solutions
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              Convert your proprietary data and domain expertise into intelligent agents that evolve through continuous human feedback. Build AI systems that don't just respond — they learn, adapt, and improve with every interaction.
            </p>
            <StarBorder as={Link} to="/enterprise/agentic" color="#5227FF" speed="4s" className="inline-flex items-center gap-2 font-medium">
              Explore Agentic Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── DOMAINS (BENTO BOX) ─── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <SectionLabel className="justify-center">Impact</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white mt-4 mb-4 tracking-tight">
              Powering AI Transformation for<br />the World's Leading Enterprises
            </h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Trusted across industries where reliable agents matter most — healthcare, insurance, financial services, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 max-w-7xl mx-auto">
            {/* Large Card */}
            <StarBorder as={Link} to="/enterprise/agentic" color="#5227FF" speed="6s" className="md:col-span-2 md:row-span-2 group p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] hover:border-purple-500/30 transition-all cursor-pointer flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <span className="text-[9px] font-mono text-purple-400/80 uppercase tracking-[0.3em] mb-6 block">
                Featured Solution</span>
                <h3 className="text-4xl font-semibold text-white mb-6 tracking-tight">Insurance & Risk</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-light">AI-powered claims processing, risk assessment, and fraud detection agents that scale with your business.</p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700" />
              <div className="mt-16 flex items-center gap-3 text-white/90 font-medium group-hover:gap-5 transition-all duration-300">
                Learn more <ArrowRight className="w-5 h-5" />
              </div>
            </StarBorder>

            {/* Medium Card 1 */}
            <StarBorder as={Link} to="/contact" color="#06B6D4" speed="8s" className="md:col-span-2 group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] hover:border-cyan-500/20 transition-all cursor-pointer block relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[9px] font-mono text-cyan-400/80 uppercase tracking-[0.3em] mb-4 block">Industry Leader</span>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Healthcare</h3>
                <p className="text-zinc-500 text-base max-w-sm font-light">Clinical decision support, patient intake automation, and medical data analysis.</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-16 h-16 rounded-full border border-cyan-500" />
              </div>
            </StarBorder>

            {/* Small Card 1 */}
            <StarBorder as={Link} to="/contact" color="#10B981" speed="10s" className="group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] hover:border-green-500/30 transition-all cursor-pointer block">
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Finance</h3>
              <p className="text-zinc-500 text-base font-light">Algorithmic trading and compliance agents.</p>
            </StarBorder>

            {/* Small Card 2 */}
            <StarBorder as={Link} to="/contact" color="#F59E0B" speed="12s" className="group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] hover:border-amber-500/30 transition-all cursor-pointer block">
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Public Sector</h3>
              <p className="text-zinc-500 text-base font-light">Secure AI for government operations.</p>
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── AI FOR THE ENTERPRISE ─── */}
      <section className="section-padding border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="text-center">
            <SectionLabel className="justify-center">Enterprise</SectionLabel>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-white mt-4 mb-4 tracking-tight">
              AI for the Enterprise
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
              Full-Stack AI Solutions
            </p>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Outcomes delivered with data, models, agents, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER VALUE ─── */}
      <section className="py-32 bg-black border-t border-white/[0.06]">
        <div className="section-container">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Why Us</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mt-4 mb-4 tracking-tight">
              How We Deliver Value
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              We translate deep expertise in building frontier models and agents into enterprise solutions. Combining our platform, experienced teams, and advanced processes to accelerate your AI transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">AI Native Expertise</h3>
              <p className="text-zinc-500 text-sm">Founded to accelerate AI adoption. Our platform powers nearly every leading AI model, helping enterprises capture real business value.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Engineering Teams</h3>
              <p className="text-zinc-500 text-sm">Our dedicated AI engineering teams work with you side-by-side to deliver powerful solutions.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Frontier Research</h3>
              <p className="text-zinc-500 text-sm">We evaluate the latest LLMs and perform frontier research to stay at the cutting edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="border-t border-white/5 bg-black">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-[3px] mb-4">{'> Ready to build?'}</p>
          <h2 className="font-sans text-4xl lg:text-6xl font-light text-white mb-8 max-w-2xl mx-auto">
            Let's build your<br />next AI product.
          </h2>
          <p className="font-mono text-zinc-500 text-sm max-w-md mx-auto mb-10">
            Book a free 30-minute consultation. We'll understand your problem and tell you exactly how we'd solve it.
          </p>
          <StarBorder as={Link} to="/contact" color="#5227FF" speed="4s" className="font-bold">
            Start the Conversation
          </StarBorder>
        </div>
      </section>

    </motion.div>
  )
}
