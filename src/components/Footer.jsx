import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'GPU Infrastructure',
  'AI Orchestration',
  'MLOps',
  'AI Observability',
  'AI App Development',
  'AI Optimization',
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <span className="font-black text-2xl text-white tracking-tighter">Single core labs</span>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-xs">
            Deep capability areas covering the full AI infrastructure lifecycle — from bare‑metal GPU clusters to production LLM observability.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
          <ul className="space-y-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Services</h4>
          <ul className="space-y-4">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
          <ul className="space-y-4 text-sm font-medium text-zinc-400">
            <li>Pune, Maharashtra</li>
            <li className="pt-2">
              <a href="mailto:hello@singlecorelabs.ai" className="hover:text-white transition-colors">
                hello@singlecorelabs.ai
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="hover:text-white transition-colors">
                +91 99999 99999
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
