import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const linksLeft = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
]

const linksRight = [
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        className="fixed top-8 left-1/2 z-50 flex items-center bg-black/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl"
      >
        {/* Desktop Nav - Unified Centered Pill */}
        <nav className="hidden md:flex items-center gap-1">
          {linksLeft.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Centered Logo */}
          <Link to="/" className="flex items-center justify-center px-6 group border-x border-white/5 mx-2">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-display font-light text-xl text-white tracking-tight group-hover:text-accent-cyan transition-colors whitespace-nowrap"
            >
              Single core labs
            </motion.span>
          </Link>

          {linksRight.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          
          {/* Subtle separator and CTA */}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Link to="/contact" className="px-6 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold bg-black text-white border border-white/10 hover:border-white/40 transition-all">
            Start
          </Link>
        </nav>

        {/* Mobile View - Compact Pill */}
        <div className="md:hidden flex items-center gap-4 px-4 py-2">
          <Link to="/" className="group">
            <span className="font-display font-light text-lg text-white tracking-tight group-hover:text-accent-cyan transition-colors whitespace-nowrap">
              Single core labs
            </span>
          </Link>
          <div className="w-px h-4 bg-white/10" />
          <button
            className="text-white p-1 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed inset-x-6 top-28 left-1/2 z-40 w-[calc(100%-3rem)] max-w-sm bg-black/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-6 shadow-2xl"
          >
            {[...linksLeft, ...linksRight].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="w-full text-center bg-black text-white py-4 rounded-full font-bold shadow-xl border border-white/10 hover:border-white/40 transition-all">Get started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
