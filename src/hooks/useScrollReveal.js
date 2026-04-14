import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0.1,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return { ref, isVisible }
}
