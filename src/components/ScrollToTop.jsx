import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Force instant scroll by removing smooth scrolling temporarily
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.style.scrollBehavior = originalStyle
    }, 100)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
