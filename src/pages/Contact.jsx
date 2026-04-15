import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const initialState = { name: '', email: '', company: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: null }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate async submit
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputClass = (field) =>
    `w-full bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/5 transition-all overflow-hidden`

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle grid and glows */}
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <SectionLabel className="justify-center">Contact Us</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white max-w-4xl mx-auto leading-[1.1] tracking-tight"
          >
            Let's Build Something Great
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-zinc-500 text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed font-mono text-sm uppercase tracking-widest"
          >
            Book a free architecture consultation.
          </motion.p>
        </div>
      </section>

      {/* Main split */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-white mb-10 tracking-tight">Contact Details</h2>

            <div className="space-y-10 mb-16">
              <div className="flex gap-6 items-start group">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-white shrink-0 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MapPin className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-xl font-light text-white mb-1 group-hover:text-accent-cyan transition-colors">Our Studio</p>
                  <p className="text-zinc-500">Pune, Maharashtra<br />India</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-white shrink-0 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Mail className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-xl font-light text-white mb-1 group-hover:text-accent-cyan transition-colors">General Inquiries</p>
                  <a href="mailto:hello@singlecorelabs.ai" className="text-zinc-500 hover:text-white transition-colors font-medium">
                    hello@singlecorelabs.ai
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-white shrink-0 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Phone className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-xl font-light text-white mb-1 group-hover:text-accent-cyan transition-colors">Call Us</p>
                  <a href="tel:+919999999999" className="text-zinc-500 hover:text-white transition-colors font-medium">
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.25em] mb-6">Social Networks</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label} href={href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/5 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/10 transition-all duration-300 font-medium text-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />{label}
                  </a>
                ))}
              </div>
            </div>

            {/* Message note */}
            <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/5 text-zinc-500 group hover:border-white/10 transition-colors">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] mb-3 group-hover:text-accent-cyan transition-colors">Availability</p>
              <p className="text-base font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                We respond to all inquiries within 24 business hours. For urgent matters, please mark your email as [URGENT].
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="card-surface p-10 lg:p-16 rounded-3xl backdrop-blur-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-accent-primary/10 flex items-center justify-center mb-8">
                  <CheckCircle className="w-10 h-10 text-accent-primary" />
                </div>
                <h3 className="text-3xl font-extrabold text-text-primary mb-4 tracking-tight">Message Received</h3>
                <p className="text-text-secondary text-lg max-w-sm">
                  Thanks for reaching out! Our team will be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div>
                  <label className="text-[10px] font-extrabold text-text-faint uppercase tracking-[0.25em] block mb-3 ml-1">Your Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Rahul Mehta"
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p className="text-xs font-bold text-red-500 mt-2 ml-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-text-faint uppercase tracking-[0.25em] block mb-3 ml-1">Work Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="rahul@company.ai"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-xs font-bold text-red-500 mt-2 ml-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-text-faint uppercase tracking-[0.25em] block mb-3 ml-1">Company</label>
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="Acme AI Labs"
                    className={inputClass('company')}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-text-faint uppercase tracking-[0.25em] block mb-3 ml-1">Your Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Tell us about your project infrastructure goals..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs font-bold text-red-500 mt-2 ml-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 text-base bg-black text-white font-bold rounded-full border border-white/10 hover:border-white/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3"><span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Processing...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                  )}
                </button>

                <p className="text-xs font-bold text-text-faint text-center uppercase tracking-widest">
                  Secure & Confidential
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
