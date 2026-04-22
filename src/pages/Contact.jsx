import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

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
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-transparent pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel>Connect</SectionLabel>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white mt-6 mb-8 tracking-tightest leading-[0.9]">
            Get in touch
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            We're building the next generation of AI tools and we'd love to have you onboard.
            Tell us about your project and let's see how we can help.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/[0.01] border border-white/[0.06] rounded-[2.5rem] p-10 md:p-16 shadow-super backdrop-blur-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submitted');
              setSubmitted(true);
              window.scrollTo(0, 0);
            }}
            className="space-y-8"
          >
            {/* Row 1: First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">First name*</label>
                <input
                  type="text" required placeholder="First name"
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-medium text-zinc-400 tracking-tight">Last name*</label>
                <input
                  type="text" required placeholder="Last name"
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
                />
              </div>
            </div>

            {/* Row 2: Company & Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Company name*</label>
                <input
                  type="text" required placeholder="Company"
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Job title*</label>
                <input
                  type="text" required placeholder="Job title"
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Work email*</label>
              <input
                type="email" required placeholder="email@company.com"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Country*</label>
              <input
                type="text" required placeholder="Select country"
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15"
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
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all font-light hover:border-white/15 resize-none"
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
              className="btn-primary w-full py-5 text-base"
            >
              Submit Request
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
