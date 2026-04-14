export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[3px] text-accent-cyan mb-4 flex items-center gap-2 ${className}`}>
      <span className="text-accent-purple">{'>'}</span>
      {children}
    </p>
  )
}
