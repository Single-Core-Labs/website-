import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeun_SPonSQJWNztbl7TNoNCkUku-ormIfOKkDJAHmEsYlFTA/viewform"

// Nav config — items with `children` get a dropdown
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  {
    label: 'Enterprise',
    to: '/enterprise',
    children: [
      { to: '/enterprise', label: 'Overview', desc: 'AI solutions at enterprise scale' },
      { to: '/enterprise/agentic', label: 'Agentic Solutions', desc: 'Build, train, and scale domain-specific agents' },
      { to: '/enterprise/genai', label: 'GenAI Solutions', desc: 'RAG, fine-tuning, APIs, and evaluation' },
    ],
  },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

// Flat list for mobile drawer
const allLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  { to: '/enterprise', label: 'Enterprise' },
  { to: '/enterprise/agentic', label: '↳ Agentic Solutions' },
  { to: '/enterprise/genai', label: '↳ GenAI Solutions' },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
    >
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.to}
          className="flex flex-col gap-0.5 px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/[0.04] last:border-0 group"
        >
          <span className="text-[12px] font-medium text-white group-hover:text-accent-cyan transition-colors">
            {item.label}
          </span>
          {item.desc && (
            <span className="text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors leading-snug">
              {item.desc}
            </span>
          )}
        </Link>
      ))}
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
          `px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 ${
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
        className={`flex items-center gap-1 px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 ${
          isActive ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
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
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold bg-black text-white border border-white/10 hover:border-white/40 transition-all"
          >
            Start
          </a>
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
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-black text-white py-4 rounded-full font-bold border border-white/10 hover:border-white/40 transition-all mt-2"
            >
              Get started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
