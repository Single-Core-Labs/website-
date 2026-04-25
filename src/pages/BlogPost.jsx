import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import blogPosts from '../data/blog.json'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-6">Post not found</h1>
          <Link to="/blog" className="text-purple-400 hover:underline">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-32 pb-32">
      <Helmet>
        <title>{post.title} | Single Core Labs Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="section-container">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Insights
        </Link>

        {/* Post Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono uppercase tracking-widest text-purple-400">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
              <Calendar className="w-3 h-3" />
              {post.date}
            </div>
          </div>
          
          <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tightest mb-10">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 py-8 border-y border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <User className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{post.author}</p>
                <p className="text-zinc-600 text-xs">Research Lead</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/5" />
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              6 min read
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-zinc max-w-none">
            {/* Split content by newlines and render as paragraphs for now */}
            {post.content.split('\n').map((para, i) => (
              <p key={i} className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
                {para}
              </p>
            ))}
          </div>

          {/* Simple Placeholder for more rich content */}
          <div className="mt-16 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 border-dashed">
            <p className="text-zinc-600 text-center text-sm italic">
              Additional technical charts, diagrams, and code blocks can be added here in the future.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}
