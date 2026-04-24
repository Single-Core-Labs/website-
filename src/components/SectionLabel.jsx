export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="relative flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shadow-[0_0_15px_rgba(139,92,246,1)] z-10" />
        <span className="absolute w-3 h-3 rounded-full bg-accent-purple/40 animate-pulse-slow blur-[2px]" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">
        {children}
      </p>
    </div>
  )
}
