import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

export default function StatCounter({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollReveal()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const numericValue = parseFloat(value)
    const duration = 1800
    const startTime = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      const current = Math.round(eased * numericValue)
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center lg:text-left group">
      <div className="text-5xl lg:text-7xl font-light text-white tracking-tighter tabular-nums mb-2 group-hover:text-accent-cyan transition-colors">
        {count}
        {suffix}
      </div>
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 group-hover:text-zinc-400 transition-colors">{label}</p>
    </div>
  )
}
