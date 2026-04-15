import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/#how-it-works', label: 'How it works' },
  { to: '/research', label: 'AI Security' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/courses', label: 'Resources' },
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
        className="fixed top-6 left-0 right-0 z-50 w-full px-6 md:px-12 flex items-center justify-between pointer-events-none"
      >
        {/* Brand/Logo - Left Side */}
        <div className="flex items-center gap-2 shrink-0 pointer-events-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-medium text-2xl text-white tracking-tight group-hover:text-accent-secondary transition-colors">
              qintara
            </span>
          </Link>
        </div>

        {/* Centered Pill Navigation */}
        <nav className="hidden md:flex items-center bg-zinc-900/40 backdrop-blur-xl rounded-full px-1.5 py-1.5 border border-white/5 shadow-2xl absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/5' 
                    : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA - Right Side */}
        <div className="flex items-center gap-4 justify-end pointer-events-auto">
          <Link to="/contact" className="hidden sm:block bg-white text-black text-[13px] font-semibold py-2.5 px-7 rounded-full hover:bg-zinc-200 transition-colors">
            Get started
          </Link>
          
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
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
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-2xl font-display font-medium ${
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
