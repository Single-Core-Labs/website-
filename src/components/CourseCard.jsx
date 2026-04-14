import { motion } from 'framer-motion'
import { Clock, Users, Monitor, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const accentText = {
  cyan: 'text-accent-primary',
  blue: 'text-accent-primary',
  purple: 'text-accent-secondary',
}

export default function CourseCard({ course, index = 0 }) {
  const textCls = accentText[course.accent] || accentText.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`card-surface p-10 flex flex-col`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[10px] font-extrabold uppercase tracking-[0.25em] ${textCls}`}>{course.level}</span>
        <span className="text-lg font-extrabold text-text-primary">{course.price}</span>
      </div>

      <h3 className="text-3xl font-extrabold text-text-primary mt-2 mb-2 tracking-tight">{course.title}</h3>
      <p className={`font-bold text-xs uppercase tracking-widest mb-6 ${textCls}`}>{course.subtitle}</p>

      <p className="text-text-secondary text-base leading-relaxed mb-8">{course.description}</p>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 mb-8 text-xs font-bold text-text-muted uppercase tracking-widest">
        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent-primary" />{course.duration}</span>
        <span className="flex items-center gap-2"><Monitor className="w-4 h-4 text-accent-primary" />{course.format}</span>
        <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent-primary" />{course.cohortSize}</span>
      </div>

      {/* Topics */}
      <ul className="space-y-3 mb-10 flex-1">
        {course.topics.map((t) => (
          <li key={t} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
            <div className={`w-1.5 h-1.5 rounded-full ${textCls} opacity-40`} />{t}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`btn-primary inline-flex items-center gap-2 justify-center group`}
      >
        Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}
