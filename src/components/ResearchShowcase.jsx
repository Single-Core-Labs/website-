import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FileText, Database } from 'lucide-react';
import SectionLabel from './SectionLabel';

const researchItems = [
  {
    type: 'Model',
    title: 'Core-v1-7B: Optimized Agentic Reasoning',
    date: 'April 2026',
    description: 'An open-source 7B parameter model fine-tuned entirely on multi-step reasoning traces. Outperforms GPT-4 on specific finance extraction tasks.',
    link: '#',
    icon: <Github className="w-4 h-4" />
  },
  {
    type: 'Paper',
    title: 'Self-Correcting LLM Workflows in High-Stakes Environments',
    date: 'March 2026',
    description: 'A novel framework for allowing LLMs to critique and rollback their own actions before executing state-changing API calls.',
    link: '#',
    icon: <FileText className="w-4 h-4" />
  },
  {
    type: 'Dataset',
    title: 'Enterprise-RLHF: 100k Human Preferences',
    date: 'February 2026',
    description: 'The largest open-source dataset of human preference routing for enterprise API tool use and task delegation.',
    link: '#',
    icon: <Database className="w-4 h-4" />
  }
];

export default function ResearchShowcase() {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-white/[0.06] relative">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel>Open Science</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-4 tracking-tight">
              Frontier Research
            </h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-sm font-light">
            We actively publish our findings and contribute open-source models to push the boundaries of applied AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group block p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{item.type}</span>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 pr-8 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {item.description}
              </p>
              
              <div className="mt-auto text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {item.date}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
