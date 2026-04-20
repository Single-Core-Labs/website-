import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <span className="font-display font-light text-xl text-white tracking-tight">Single core labs</span>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-xs">
            We translate deep expertise in building frontier models and agents into enterprise solutions. Combining our platform, experienced teams, and advanced processes to accelerate your AI transformation journey.
          </p>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/single-core-labs/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Navigation</h4>
          <ul className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-zinc-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Pune, Maharashtra</li>
            <li>
              <a href="mailto:singlecorelabs.in@gmail.com" className="hover:text-white transition-colors">
                singlecorelabs.in@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Single core labs. All rights reserved.
        </p>
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
          intelligence meets instinct.
        </p>
      </div>
    </footer>
  )
}