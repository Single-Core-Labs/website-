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
      className={`bg-zinc-950/50 border border-white/5 p-10 flex flex-col rounded-3xl backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">{course.level}</span>
        <span className="text-xl font-light text-white">{course.price}</span>
      </div>

      <h3 className="text-3xl font-light text-white mt-2 mb-2 tracking-tight">{course.title}</h3>
      <p className="font-mono text-[10px] uppercase tracking-widest mb-6 text-zinc-600">{course.subtitle}</p>

      <p className="text-zinc-500 text-sm leading-relaxed mb-8">{course.description}</p>

      {/* Meta */}
      <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{course.duration}</span>
        <span className="flex items-center gap-2"><Monitor className="w-4 h-4" />{course.format}</span>
        <span className="flex items-center gap-2"><Users className="w-4 h-4" />{course.cohortSize}</span>
      </div>

      {/* Topics */}
      <ul className="space-y-3 mb-10 flex-1">
        {course.topics.map((t) => (
          <li key={t} className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />{t}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="w-full py-4 text-sm bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all text-center"
      >
        Enroll Now
      </Link>
    </motion.div>
  )
}
