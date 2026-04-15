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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl flex items-center justify-between transition-all duration-300 rounded-full bg-zinc-950/50 backdrop-blur-md border border-white/10 px-6 py-2 shadow-2xl"
      >
        {/* Placeholder for left-side spatial balance on desktop, or can be empty */}
        <div className="flex items-center gap-2 shrink-0 md:w-[120px]">
          {/* Logo visible only on mobile here, on desktop it's centered */}
          <Link to="/" className="md:hidden flex items-center gap-2 shrink-0">
            <span className="font-sans font-black text-xl text-white tracking-tighter">
              WD
            </span>
          </Link>
        </div>

        {/* Desktop nav with centered logo */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 absolute left-1/2 -translate-x-1/2">
          {linksLeft.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Centered WD Logo */}
          <Link to="/" className="flex items-center justify-center px-4 group">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="font-sans font-black text-2xl text-white tracking-tighter group-hover:text-accent-cyan transition-colors"
            >
              WD
            </motion.span>
          </Link>

          {linksRight.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3 md:w-[120px] justify-end">
          <Link to="/contact" className="hidden sm:block bg-white text-black text-xs font-bold py-2.5 px-6 rounded-full hover:bg-zinc-200 transition-colors">
            Get started
          </Link>
          
          {/* Mobile toggle - visible only on small screens */}
          <button
            className="md:hidden text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-zinc-900 border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-6"
          >
            {[...linksLeft, ...linksRight].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-xl font-medium ${
                    isActive ? 'text-white' : 'text-zinc-500'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="w-full text-center bg-white text-black py-4 rounded-full font-bold">Get started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
