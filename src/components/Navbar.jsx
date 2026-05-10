import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/research', label: 'Research' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const ease = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const location = useLocation()
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      {/* ── Fixed Logo (Left) ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-8 left-8 z-[100]"
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6600"
            strokeWidth="2.5"
          >
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" />
            <circle cx="12" cy="12" r="2" fill="#FF6600" />
          </svg>
          <span 
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-white font-semibold"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Single Core Labs
          </span>
        </Link>
      </motion.div>

      {/* ── Centered Pill Nav ── */}
      <motion.header
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-8 left-1/2 z-[100] flex items-center bg-[#121214]/75 backdrop-blur-[28px] saturate-[160%] border border-white/10 rounded-[100px] h-[48px] px-1.5 shadow-none whitespace-nowrap"
        style={{ border: '1px solid rgba(255, 255, 255, 0.09)' }}
      >
        <nav 
          className="flex items-center gap-[2px]"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.to || (item.to === '/' && location.pathname === '')
            const isHovered = hoveredItem === item.label

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                onMouseEnter={() => setHoveredItem(item.label)}
                className={`px-5 py-1.5 text-[12px] font-mono transition-colors duration-500 relative ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
                style={{ 
                  fontFamily: '"Geist Mono", monospace',
                  letterSpacing: '0.04em'
                }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Sliding Highlight */}
                {isHovered && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}

                {/* Active Indicator */}
                {isActive && !isHovered && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-x-5 -bottom-1 h-px bg-[#FF6600]/40 z-0"
                  />
                )}
              </NavLink>
            )
          })}
        </nav>
      </motion.header>
    </>
  )
}
