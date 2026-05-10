import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import YCBackground from './components/YCBackground'
import YCCursor from './components/YCCursor'

const Home = lazy(() => import('./pages/Home'))
const Research = lazy(() => import('./pages/Research'))
const Products = lazy(() => import('./pages/Products'))
const Contact = lazy(() => import('./pages/Contact'))
const Enterprise = lazy(() => import('./pages/Enterprise'))
const About = lazy(() => import('./pages/About'))
const AgenticSolutions = lazy(() => import('./pages/AgenticSolutions'))
const GenAISolutions = lazy(() => import('./pages/GenAISolutions'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/10 border-t-[#FF6600] rounded-full animate-spin" />
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
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/enterprise/agentic" element={<AgenticSolutions />} />
          <Route path="/enterprise/genai" element={<GenAISolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#FF6600]/30 selection:text-white">
        <YCCursor />
        <YCBackground />
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
        {/* Only show footer on subpages or at the bottom of home if needed */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
