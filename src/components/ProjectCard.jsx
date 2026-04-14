import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const accentText = {
  cyan: 'text-accent-primary',
  blue: 'text-accent-primary',
  purple: 'text-accent-secondary',
}

export default function ProjectCard({ project, index = 0 }) {
  const accentColorClass = accentText[project.accentColor] || accentText.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface p-10 group"
    >
      {/* Label - Floating Pill */}
      <div className="flex justify-between items-start mb-8">
        <span className={`text-[10px] font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-accent-primary/5 ${accentColorClass}`}>
          {project.label}
        </span>
        <ArrowUpRight className="w-5 h-5 text-text-faint group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>

      <h3 className="text-3xl font-extrabold text-text-primary mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
