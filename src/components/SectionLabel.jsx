export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        {children}
      </p>
    </div>
  )
}
