import React from 'react'
import { motion } from 'framer-motion'

export default function StrikethroughText({ text }) {
  return (
    <span className="relative inline-block">
      {text}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ originX: 0 }}
        className="absolute left-0 top-1/2 w-full h-[2px] bg-white transform -translate-y-1/2"
      />
    </span>
  )
}
