import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <>
      <motion.header
        animate={{ 
          marginTop: scrolled ? '1rem' : '1.5rem',
          paddingTop: '0.75rem', 
          paddingBottom: '0.75rem' 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 px-6 max-w-7xl w-[calc(100%-2rem)] flex items-center justify-between transition-all duration-300 rounded-full ${
          scrolled ? 'bg-white/70 backdrop-blur-xl border border-black/5 shadow-premium' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center text-white font-bold shadow-glow-accent">
            S
          </div>
          <span className="font-sans font-extrabold text-xl text-text-primary tracking-tight hidden sm:block">
            SingleCore
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'text-accent-primary bg-accent-primary/5' 
                    : 'text-text-muted hover:text-text-primary hover:bg-black/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-xs py-2 px-6">
            Work With Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-text-primary z-50"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-4 z-40 bg-white shadow-premium rounded-5xl flex flex-col items-center justify-center gap-8 border border-black/5"
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-sans text-4xl font-extrabold tracking-tighter transition-all ${
                    isActive ? 'text-accent-primary scale-110' : 'text-text-primary/40 hover:text-text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-8 scale-125">Let's Talk</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
