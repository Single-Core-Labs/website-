import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const testimonials = [
  { name: 'Arjun Mehta', role: 'Backend Engineer → AI Infra Lead, Fintech Startup', body: 'The LLM Bootcamp was incredibly hands-on. Within 3 months I went from writing REST APIs to leading our LLM fine-tuning infrastructure. The instructors are exactly the kind of engineers you want to learn from.' },
  { name: 'Priya Sharma', role: 'Data Analyst → MLOps Engineer, HealthTech', body: 'The curriculum is dense in the best way — real production scenarios, real clusters. No toybox examples. SingleCore Labs treated us like engineers, not students.' },
  { name: 'Rohan Kapoor', role: 'Software Engineer → GPU Infra Engineer, Defense Tech', body: 'I had zero knowledge about Kubernetes or GPU management. After 8 weeks I was running distributed training jobs on an actual H100 cluster. Life-changing.' },
]

const mentors = [
  { initials: 'RV', name: 'Rahul Verma', role: 'Lead — AI Systems', bg: 'bg-accent-blue/20 text-accent-blue' },
  { initials: 'KN', name: 'Kavita Nair', role: 'Lead — MLOps', bg: 'bg-accent-purple/20 text-accent-purple' },
  { initials: 'AS', name: 'Ankit Singh', role: 'Lead — GPU Infra', bg: 'bg-accent-cyan/20 text-accent-cyan' },
]

export default function Courses() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-extrabold text-accent-primary uppercase tracking-[0.2em]">Education & Certification</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary max-w-4xl mx-auto leading-[0.9] tracking-[0.05em]">
            From Engineer to <span className="text-accent-primary">AI</span> Infra Lead
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mt-10 leading-relaxed">
            Cohort-based live training designed for software engineers making the leap into AI infrastructure. Built and taught by practitioners.
          </p>
        </div>
      </section>

      {/* Course cards */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <SectionLabel>Cohort Programs</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">Upcoming Cohorts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="section-container">
          <SectionLabel>Learning Experience</SectionLabel>
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
                className="card-surface p-10 group"
              >
                <div className="text-[10px] font-extrabold text-accent-primary uppercase tracking-[0.25em] mb-4">Phase {step}</div>
                <h3 className="text-2xl font-extrabold text-text-primary mb-3 tracking-tight group-hover:text-accent-primary transition-colors">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <SectionLabel>Faculty</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="card-surface p-10 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-xl bg-accent-primary text-white shrink-0 shadow-glow-accent">
                  {m.initials}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-text-primary tracking-tight">{m.name}</h3>
                  <p className="text-xs font-bold text-accent-primary uppercase tracking-widest">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="section-container">
          <SectionLabel>Alumni Stories</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-16 tracking-tight">What Alumni Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                className="card-surface p-10 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <p className="text-text-secondary text-base italic leading-relaxed mb-10 flex-1">"{t.body}"</p>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-text-primary tracking-tight">{t.name}</span>
                  <span className="text-xs font-bold text-text-faint uppercase tracking-widest mt-1">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="bg-white">
        <div className="section-container py-24 border-t border-black/5 flex flex-col items-center text-center">
          <p className="text-[10px] font-extrabold text-accent-primary uppercase tracking-[0.3em] mb-4">Next Cohort Starting Soon</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-text-primary max-w-2xl mx-auto tracking-tight mb-8">
            Join the Next <span className="text-accent-primary">Generation</span> of Engineers
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
            Limited seats per cohort. Apply now to secure shared cluster access and early-bird pricing.
          </p>
          <Link to="/contact" className="btn-primary py-5 px-10 text-base shadow-premium">
            Apply to Cohort <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
