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
      className="card-surface p-10 group cursor-default"
    >
      {/* Header - Label & Icon */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-white/5 text-zinc-500 border border-white/5 group-hover:border-accent-cyan/20 group-hover:text-accent-cyan transition-colors">
          {project.label}
        </span>
        <div className="relative p-2 rounded-full group-hover:bg-accent-cyan/10 transition-colors">
          <div className="absolute inset-0 bg-accent-cyan/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-3 tracking-tight group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>
      <p className="text-zinc-500 text-base leading-relaxed mb-10 group-hover:text-zinc-400 transition-colors">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag group-hover:border-accent-cyan/20 transition-colors">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
