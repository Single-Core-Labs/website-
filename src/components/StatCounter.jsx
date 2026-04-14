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
    <div ref={ref} className="text-center lg:text-left">
      <div className="text-5xl lg:text-6xl font-extrabold text-accent-primary tracking-tighter tabular-nums mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-text-muted">{label}</p>
    </div>
  )
}
