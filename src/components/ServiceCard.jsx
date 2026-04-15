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
      className="card-surface p-10 group cursor-default relative overflow-hidden"
    >
      {/* Index Indicator - Top Right */}
      <div className="absolute top-10 right-10 font-mono text-[10px] text-zinc-800 group-hover:text-accent-cyan/20 transition-colors select-none">
        {service.id || `0${index + 1}`}
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-accent-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Icon - Rounded with soft background and subtle glow */}
      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 mb-8 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all duration-500">
        <div className="absolute inset-0 bg-accent-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-7 h-7 relative z-10" />
      </div>

      <h3 className="text-2xl font-display font-light text-white mb-2 tracking-tight group-hover:text-accent-cyan transition-colors">
        {service.title}
      </h3>
      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
        {service.subtitle}
      </p>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">
        {service.description}
      </p>

      {/* Capabilities */}
      <div className="mb-10">
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 mb-4">Deep capabilities</p>
        <ul className="space-y-3">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-3 text-sm text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent-cyan group-hover:border-accent-cyan/40 transition-all duration-300" />
              {cap}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.03]">
        {service.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest bg-white/[0.02] text-zinc-600 border border-white/[0.05] group-hover:text-zinc-400 group-hover:border-white/[0.1] transition-all">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
