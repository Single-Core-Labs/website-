import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, ChevronRight, Loader2 } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div 
        variants={pageVariants} initial="initial" animate="animate" exit="exit"
        className="min-h-screen flex items-center justify-center bg-black px-6"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-light text-white mb-4 tracking-tight">Request Received</h1>
          <p className="text-scale-text-secondary mb-10 max-w-md mx-auto leading-relaxed">
            Thank you for your interest in Single Core Labs. Our technical team will review your project and reach out within 24 hours.
          </p>
          <button 
            onClick={() => { setSubmitted(false); setStep(1); }} 
            className="text-white font-medium flex items-center gap-2 mx-auto group hover:gap-4 transition-all"
          >
            Submit another request <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="bg-black pt-32 pb-32 min-h-screen relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-subtle-grid opacity-10 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-scale-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-scale-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tightest">
            Build the Future of AI
          </h1>
          <p className="text-scale-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
            Join leading AI teams accelerating their development with Single Core Labs. 
            Book a consultation with our engineers to get started.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-scale-card border border-scale-border rounded-[2.5rem] p-8 md:p-16 shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-scale-accent-purple via-scale-accent-purple to-scale-accent-cyan opacity-50" />
          
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Contact Information Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-scale-border pb-4">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white">01</span>
                <h2 className="text-xl font-medium text-white tracking-tight">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">First name*</label>
                  <input 
                    type="text" required placeholder="Jane"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Last name*</label>
                  <input 
                    type="text" required placeholder="Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Company name*</label>
                  <input 
                    type="text" required placeholder="Acme AI"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Job title*</label>
                  <input 
                    type="text" required placeholder="VP of Engineering"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Work email*</label>
                  <input 
                    type="email" required placeholder="jane@acme.ai"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Country*</label>
                  <select 
                    required 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05]"
                  >
                    <option value="" className="bg-black">Select country</option>
                    <option value="US" className="bg-black">United States</option>
                    <option value="GB" className="bg-black">United Kingdom</option>
                    <option value="IN" className="bg-black">India</option>
                    <option value="DE" className="bg-black">Germany</option>
                    <option value="FR" className="bg-black">France</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-scale-border pb-4">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white">02</span>
                <h2 className="text-xl font-medium text-white tracking-tight">Project Details</h2>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted">Project Budget*</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['<$100k', '$100k-500k', '$500k-1M', '$1M+'].map((budget) => (
                    <label key={budget} className="relative group cursor-pointer">
                      <input type="radio" name="budget" required className="peer sr-only" />
                      <div className="px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-center text-sm text-scale-text-secondary transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white group-hover:border-white/30">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted">Services Required*</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Data Annotation for Autonomy',
                    'RLHF for Foundation Models',
                    'Enterprise Agentic Solutions',
                    'Model Test & Evaluation',
                    'Public Sector Solutions',
                    'Other'
                  ].map((service) => (
                    <label key={service} className="relative group cursor-pointer">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="flex items-center gap-3 px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-sm text-scale-text-secondary transition-all peer-checked:border-scale-accent-purple peer-checked:bg-scale-accent-purple/5 group-hover:bg-white/[0.05]">
                        <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center peer-checked:bg-scale-accent-purple peer-checked:border-scale-accent-purple">
                          <CheckCircle className="w-3 h-3 text-white hidden peer-checked:block" />
                        </div>
                        {service}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="text-xs font-mono uppercase tracking-widest text-scale-text-muted group-focus-within:text-white transition-colors">Project Description*</label>
                <textarea 
                  required rows="5" placeholder="Tell us about your technical requirements, data volume, and timeline..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all hover:bg-white/[0.05] resize-none"
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-6 border-t border-scale-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-xs text-scale-text-muted max-w-sm leading-relaxed text-center md:text-left">
                  By submitting this form, you agree to our <a href="#" className="text-white hover:underline">Privacy Policy</a> and consent to being contacted regarding our services.
                </p>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
