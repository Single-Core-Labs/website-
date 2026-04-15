import { motion } from 'framer-motion'
import { Clock, Users, Monitor, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface p-10 flex flex-col group cursor-default"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 group-hover:text-accent-cyan transition-colors">{course.level}</span>
        <span className="text-xl font-light text-white group-hover:text-accent-cyan transition-colors">{course.price}</span>
      </div>

      <h3 className="text-3xl font-light text-white mt-2 mb-2 tracking-tight group-hover:text-accent-cyan transition-colors">{course.title}</h3>
      <p className="font-mono text-[10px] uppercase tracking-widest mb-6 text-zinc-600 group-hover:text-zinc-500 transition-colors">{course.subtitle}</p>

      <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">{course.description}</p>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        <span className="flex items-center gap-2 group-hover:text-zinc-400 transition-colors"><Clock className="w-4 h-4" />{course.duration}</span>
        <span className="flex items-center gap-2 group-hover:text-zinc-400 transition-colors"><Monitor className="w-4 h-4" />{course.format}</span>
        <span className="flex items-center gap-2 group-hover:text-zinc-400 transition-colors"><Users className="w-4 h-4" />{course.cohortSize}</span>
      </div>

      {/* Topics */}
      <ul className="space-y-3 mb-10 flex-1">
        {course.topics.map((t) => (
          <li key={t} className="flex items-center gap-3 text-sm text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-cyan/40 transition-colors" />{t}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="relative w-full py-4 text-sm bg-white text-black font-bold rounded-full hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all text-center overflow-hidden"
      >
        Enroll Now
      </Link>
    </motion.div>
  )
}
