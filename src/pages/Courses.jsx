import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* cspell:ignore Arjun Mehta Fintech Bootcamp Priya Sharma Rohan Kapoor Rahul Verma Kavita Ankit */

const testimonials = [
  { name: 'Arjun Mehta', role: 'Backend Engineer → AI Infra Lead, Fintech Startup', body: 'The LLM Bootcamp was incredibly hands-on. Within 3 months I went from writing REST APIs to leading our LLM fine-tuning infrastructure. The instructors are exactly the kind of engineers you want to learn from.' },
  { name: 'Priya Sharma', role: 'Data Analyst → MLOps Engineer, HealthTech', body: 'The curriculum is dense in the best way — real production scenarios, real clusters. No toy box examples. Single core labs treated us like engineers, not students.' },
  { name: 'Rohan Kapoor', role: 'Software Engineer → GPU Infra Engineer, Defense Tech', body: 'I had zero knowledge about Kubernetes or GPU management. After 8 weeks I was running distributed training jobs on an actual H100 cluster. Life-changing.' },
]

const mentors = [
  { initials: 'RV', name: 'Rahul Verma', role: 'Lead — AI Systems', bg: 'bg-accent-purple/20 text-accent-purple' },
  { initials: 'KN', name: 'Kavita Nair', role: 'Lead — MLOps', bg: 'bg-accent-purple/20 text-accent-purple' },
  { initials: 'AS', name: 'Ankit Singh', role: 'Lead — GPU Infra', bg: 'bg-accent-cyan/20 text-accent-cyan' },
]

export default function Courses() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="section-container relative z-10 text-center">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white max-w-4xl mx-auto leading-[1] tracking-tight">
            From Engineer to AI Infra Lead
          </h1>
          <p className="text-zinc-500 text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed font-mono uppercase tracking-widest">
            Cohort-based live training designed for software engineers.
          </p>
        </div>
      </section>

      {/* Course cards */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">Upcoming Cohorts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="section-container">

          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply & Match', desc: 'Submit your background. We match you to the right cohort level and confirm your seat.' },
              { step: '02', title: 'Live Sessions', desc: '3 live sessions per week with practitioners. Real GPU cluster access from Day 1.' },
              { step: '03', title: 'Build & Ship', desc: 'Ship a real production project — from fine-tuning pipelines to GPU scheduling modules.' },
              { step: '04', title: 'Career Boost', desc: 'Exclusive hiring network, LinkedIn review, and engineering residency opportunities.' },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black border border-white/5 p-10 flex flex-col gap-4 rounded-3xl group hover:border-white/10 transition-colors"
              >
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em]">Phase {step}</div>
                <h3 className="text-2xl font-light text-white tracking-tight">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-black border border-white/5 p-10 flex items-center gap-6 rounded-3xl group hover:border-white/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl bg-black text-white border border-white/10 shrink-0">
                  {m.initials}
                </div>
                <div>
                  <h3 className="text-xl font-light text-white tracking-tight">{m.name}</h3>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="section-container">

          <h2 className="text-4xl lg:text-5xl font-light text-white mb-16 tracking-tight">What Alumni Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-black border border-white/5 p-10 flex flex-col rounded-3xl group hover:border-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-white/20 text-transparent" />
                  ))}
                </div>
                <p className="text-zinc-500 text-sm italic leading-relaxed mb-10 flex-1">"{t.body}"</p>
                <div className="flex flex-col">
                  <span className="text-lg font-light text-white tracking-tight">{t.name}</span>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="bg-black border-t border-white/5">
        <div className="section-container py-32 flex flex-col items-center text-center">

          <h2 className="text-5xl md:text-6xl font-light text-white max-w-2xl mx-auto tracking-tight mb-8 leading-tight">
            Join the Next Generation of Engineers
          </h2>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-12 font-mono uppercase tracking-widest">
            Limited seats per cohort. Apply now to secure shared cluster access.
          </p>
          <Link to="/contact" className="bg-black text-white py-4 px-12 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all">
            Join the Next Cohort
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
