import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Cpu, Sparkles, Shield, BarChart3, Users, Zap } from 'lucide-react'

// Nav config — items with `children` get a dropdown
const navItems = [
  { to: '/', label: 'Home' },
  {
    label: 'Platform',
    to: '/products',
    children: [
      { to: '/products', label: 'Overview', desc: 'The full-stack AI platform', icon: Cpu },
      { to: '/enterprise/agentic', label: 'Agentic Solutions', desc: 'Build autonomous AI agents', icon: Zap },
      { to: '/enterprise/genai', label: 'GenAI Solutions', desc: 'RAG and LLM fine-tuning', icon: Sparkles },
    ],
  },
  {
    label: 'Solutions',
    to: '/services',
    children: [
      { to: '/services', label: 'Services', desc: 'Expert AI implementation', icon: Users },
      { to: '/enterprise', label: 'Enterprise', desc: 'Solutions for large scale', icon: Shield },
    ],
  },
  { to: '/research', label: 'Research' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// Flat list for mobile drawer
const allLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/research', label: 'Research' },
  { to: '/enterprise', label: 'Enterprise' },
  { to: '/enterprise/agentic', label: '↳ Agentic Solutions' },
  { to: '/enterprise/genai', label: '↳ GenAI Solutions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 p-2"
    >
      <div className="grid gap-1">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <Link
              key={i}
              to={item.to}
              className="flex items-start gap-4 px-4 py-3 hover:bg-white/5 rounded-2xl transition-all group"
            >
              {Icon && (
                <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white group-hover:text-accent-cyan transition-colors">
                  {item.label}
                </span>
                {item.desc && (
                  <span className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors leading-snug">
                    {item.desc}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location])

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        className={({ isActive }) =>
          `px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
            isActive ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  const isActive = location.pathname.startsWith(item.to)

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
          isActive ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && <DropdownMenu items={item.children} />}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <>
      {/* ── Logo — fixed top-left ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Single core labs"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display font-light text-lg text-white tracking-tight group-hover:text-accent-cyan transition-colors whitespace-nowrap hidden sm:block">
            Single core labs
          </span>
        </Link>
      </motion.div>

      {/* ── Centered pill nav ── */}
      <motion.header
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        className="fixed top-6 left-1/2 z-50 hidden md:flex items-center bg-black/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl"
      >
        <nav className="flex items-center gap-1">
          {navItems.map(item => (
            <NavItem key={item.label} item={item} />
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full text-[12px] uppercase tracking-wider font-bold bg-white text-black hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
          >
            Start
          </Link>
        </nav>
      </motion.header>

      {/* ── Mobile hamburger ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 right-6 z-50 md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
        onClick={() => setMobileOpen(o => !o)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-4 top-20 z-40 bg-black/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl flex flex-col items-start gap-4 shadow-2xl md:hidden"
          >
            {allLinks.map(({ to, label }) => (
              <NavLink
                key={to + label}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    label.startsWith('↳')
                      ? 'text-zinc-600 hover:text-zinc-300 pl-4 text-sm'
                      : isActive ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="w-full text-center bg-black text-white py-4 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all mt-2"
            >
              Get started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
