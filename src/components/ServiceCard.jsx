import { motion } from 'framer-motion'
import {
  Cpu, GitBranch, RefreshCw, Activity, Code2, Zap,
} from 'lucide-react'

const iconMap = { Cpu, GitBranch, RefreshCw, Activity, Code2, Zap }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Cpu

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface p-10 group cursor-default"
    >
      {/* Icon - Rounded with soft background */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-light text-white mb-2 tracking-tight">
        {service.title}
      </h3>
      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">
        {service.subtitle}
      </p>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Capabilities */}
      <ul className="space-y-3 mb-8">
        {service.capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            {cap}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
