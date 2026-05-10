import React, { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function YCCursor() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Use MotionValues for high performance
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleHover = (e) => {
      const target = e.target
      const isInteractive = target.closest('a, button, [role="button"]')
      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-[1.5px] border-[#FF6600]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 10,
          height: 10,
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(255, 102, 0, 0.08)' : 'transparent',
        }}
        transition={{
          scale: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
          backgroundColor: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
        }}
      />

      <style>{`
        body { cursor: none !important; }
        a, button, [role="button"], input, select, textarea { cursor: none !important; }
      `}</style>
    </>
  )
}
