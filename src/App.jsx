import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Research = lazy(() => import('./pages/Research'))
const Products = lazy(() => import('./pages/Products'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-primary flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
