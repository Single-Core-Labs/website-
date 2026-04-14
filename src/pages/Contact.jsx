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
    `w-full bg-white border ${errors[field] ? 'border-red-500' : 'border-black/10'} rounded-2xl px-6 py-4 text-base text-text-primary placeholder:text-text-faint focus:outline-none focus:border-accent-primary/60 focus:ring-4 focus:ring-accent-primary/5 transition-all shadow-soft overflow-hidden`

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-extrabold text-accent-primary uppercase tracking-[0.2em]">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary max-w-4xl mx-auto leading-[0.9] tracking-[0.05em]">
            Let's <span className="text-accent-primary">Build</span> Something Great
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed">
            Book a free architecture consultation. We'll assess your stack and design a clear roadmap — no commitment required.
          </p>
        </div>
      </section>

      {/* Main split */}
      <section className="section-padding">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-text-primary mb-10 tracking-tight">Contact Details</h2>

            <div className="space-y-10 mb-16">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-accent-primary/5 text-accent-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-text-primary mb-1">Our Studio</p>
                  <p className="text-text-secondary">Pune, Maharashtra<br />India</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-accent-primary/5 text-accent-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-text-primary mb-1">General Inquiries</p>
                  <a href="mailto:hello@singlecore.ai" className="text-text-secondary hover:text-accent-primary transition-colors font-bold">
                    hello@singlecore.ai
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-accent-primary/5 text-accent-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-text-primary mb-1">Call Us</p>
                  <a href="tel:+919999999999" className="text-text-secondary hover:text-accent-primary transition-colors font-bold">
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-extrabold text-text-faint uppercase tracking-[0.25em] mb-6">Social Networks</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label} href={href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full border border-black/5 bg-white shadow-soft hover:bg-accent-primary hover:text-white transition-all duration-300 font-bold text-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />{label}
                  </a>
                ))}
              </div>
            </div>

            {/* Message note */}
            <div className="mt-16 p-8 rounded-4xl bg-accent-primary/5 text-accent-primary shadow-glow-accent/10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] mb-3">Availability</p>
              <p className="text-base font-medium leading-relaxed">
                We respond to all inquiries within 24 business hours. For urgent matters, please mark your email as [URGENT].
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="card-surface p-10 lg:p-16 shadow-premium"
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
                  className="btn-primary w-full py-5 text-base shadow-premium disabled:opacity-60 disabled:cursor-not-allowed group transition-all"
                >
                  {loading ? (
                    <span className="flex items-center gap-3"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</span>
                  ) : (
                    <span className="flex items-center gap-3">Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
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
