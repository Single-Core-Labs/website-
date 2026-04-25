import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

import blogPosts from '../data/blog.json'

export default function Blog() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-32 pb-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 text-left">
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tightest mb-8">
            Insights from the <br />AI Frontier
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light tracking-tight">
            Technical research, industry strategy, and engineering deep-dives from the team at Single Core Labs.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-8 group flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    {post.category}
                  </span>
                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl font-light text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-white font-medium group-hover:gap-4 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center card-surface border-dashed">
              <p className="text-zinc-500 font-light italic">Technical research and insights coming soon.</p>
            </div>
          )}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-32 p-12 card-surface relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-subtle-grid opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-light text-white mb-4 tracking-tight">Stay updated</h2>
            <p className="text-zinc-500 text-sm mb-8">Get our latest research and technical guides delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/30"
              />
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}
