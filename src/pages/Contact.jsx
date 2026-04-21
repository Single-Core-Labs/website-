import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        variants={pageVariants} initial="initial" animate="animate" exit="exit"
        className="min-h-screen flex items-center justify-center bg-black px-6"
      >
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl font-light text-white mb-4">Request Sent</h1>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">Thank you for your interest in Single Core Labs. Our team will reach out within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="text-white font-medium flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            Back to form <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-black pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-light text-white mb-6 tracking-tight">
            Get in touch
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            We're building the next generation of AI tools and we'd love to have you onboard.
            Tell us about your project and let's see how we can help.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-8"
          >
            {/* Row 1: First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">First name*</label>
                <input
                  type="text" required placeholder="First name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Last name*</label>
                <input
                  type="text" required placeholder="Last name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Company & Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Company name*</label>
                <input
                  type="text" required placeholder="Company"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Job title*</label>
                <input
                  type="text" required placeholder="Job title"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Work email*</label>
              <input
                type="email" required placeholder="email@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Country*</label>
              <input
                type="text" required placeholder="Select country"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
              />
            </div>

            {/* Project Budget */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-zinc-300 block">Project Budget:*</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['<$100k', '$100k-500k', '$500k-1M', '$1M+'].map((budget) => (
                  <label key={budget} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="budget" required className="w-4 h-4 accent-white bg-black border-white/20" />
                    <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-zinc-300 block">What can we help with? Select all that apply*</label>
              <div className="space-y-3">
                {[
                  'AI Consulting & Implementation',
                  'Data Labeling & Annotation',
                  'Enterprise Agentic Solutions',
                  'GenAI & RAG Solutions',
                  'MLOps & Infrastructure',
                  'Custom Model Development',
                  'Other'
                ].map((service) => (
                  <label key={service} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-white bg-black border-white/20 rounded" />
                    <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 block">Please describe your project in detail*</label>
              <textarea
                required rows="4" placeholder="Describe your project (data type, volume, timeline, budget, etc.)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all resize-none"
              />
            </div>

            {/* Privacy */}
            <div className="flex gap-3">
              <input type="checkbox" required className="mt-1 w-4 h-4 accent-white bg-black border-white/20 rounded" />
              <p className="text-xs text-zinc-500 leading-relaxed">
                By submitting this form, your information will be processed in accordance with our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
            >
              Submit Request
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
