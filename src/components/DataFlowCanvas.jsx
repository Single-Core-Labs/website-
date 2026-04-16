import { useEffect, useRef } from 'react'

export default function DataFlowCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Node types: 'raw' (input), 'proc' (processing core), 'out' (output)
    const W = () => canvas.width
    const H = () => canvas.height

    // Particles flowing along paths
    const particles = []
    const MAX_PARTICLES = 38

    function randomRaw() {
      return {
        x: W() * 0.08 + Math.random() * W() * 0.08,
        y: Math.random() * H(),
        phase: 'toCore',
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.003,
        size: 1.5 + Math.random() * 1.5,
        color: `rgba(82, 39, 255, ${0.4 + Math.random() * 0.4})`,
        targetY: H() / 2,
      }
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = randomRaw()
      p.progress = Math.random()
      particles.push(p)
    }

    // Static anchor nodes (raw inputs on left)
    const inputNodes = Array.from({ length: 5 }, (_, i) => ({
      x: W() * 0.1,
      y: H() * (0.15 + i * 0.175),
    }))

    // Output nodes on right
    const outputNodes = Array.from({ length: 4 }, (_, i) => ({
      x: W() * 0.9,
      y: H() * (0.2 + i * 0.2),
    }))

    let t = 0

    function draw() {
      t += 0.008
      ctx.clearRect(0, 0, W(), H())

      const cx = W() / 2
      const cy = H() / 2
      const coreR = Math.min(W(), H()) * 0.07

      // ── Draw connection lines from input nodes to core ──
      inputNodes.forEach(n => {
        const grad = ctx.createLinearGradient(n.x, n.y, cx, cy)
        grad.addColorStop(0, 'rgba(82,39,255,0.08)')
        grad.addColorStop(1, 'rgba(82,39,255,0.02)')
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        ctx.quadraticCurveTo(cx * 0.5, cy, cx - coreR, cy)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // ── Draw connection lines from core to output nodes ──
      outputNodes.forEach(n => {
        const grad = ctx.createLinearGradient(cx, cy, n.x, n.y)
        grad.addColorStop(0, 'rgba(255,159,252,0.02)')
        grad.addColorStop(1, 'rgba(255,159,252,0.1)')
        ctx.beginPath()
        ctx.moveTo(cx + coreR, cy)
        ctx.quadraticCurveTo(cx * 1.5, cy, n.x, n.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // ── Draw input nodes ──
      inputNodes.forEach((n, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + i)
        ctx.beginPath()
        ctx.arc(n.x, n.y, 3 + pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(82,39,255,${0.3 + pulse * 0.3})`
        ctx.fill()
        // outer ring
        ctx.beginPath()
        ctx.arc(n.x, n.y, 7 + pulse * 2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(82,39,255,${0.08 + pulse * 0.08})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // ── Draw output nodes ──
      outputNodes.forEach((n, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + i + 2)
        ctx.beginPath()
        ctx.arc(n.x, n.y, 3 + pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,159,252,${0.3 + pulse * 0.3})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(n.x, n.y, 7 + pulse * 2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,159,252,${0.08 + pulse * 0.08})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // ── Draw processing core ──
      const corePulse = 0.5 + 0.5 * Math.sin(t * 2)
      // outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3)
      glowGrad.addColorStop(0, `rgba(82,39,255,${0.06 + corePulse * 0.04})`)
      glowGrad.addColorStop(1, 'rgba(82,39,255,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, coreR * 3, 0, Math.PI * 2)
      ctx.fillStyle = glowGrad
      ctx.fill()
      // core ring
      ctx.beginPath()
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(82,39,255,${0.2 + corePulse * 0.2})`
      ctx.lineWidth = 1.5
      ctx.stroke()
      // inner dot
      ctx.beginPath()
      ctx.arc(cx, cy, coreR * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(82,39,255,${0.4 + corePulse * 0.3})`
      ctx.fill()
      // rotating tick marks
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + t
        const x1 = cx + Math.cos(angle) * (coreR * 0.75)
        const y1 = cy + Math.sin(angle) * (coreR * 0.75)
        const x2 = cx + Math.cos(angle) * coreR
        const y2 = cy + Math.sin(angle) * coreR
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `rgba(82,39,255,${0.3 + corePulse * 0.2})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // ── Move & draw particles ──
      particles.forEach(p => {
        p.progress += p.speed

        let px, py
        if (p.phase === 'toCore') {
          // Bezier from input side to core
          const bx = W() * 0.25
          const t0 = Math.min(p.progress, 1)
          px = (1 - t0) * (1 - t0) * p.x + 2 * (1 - t0) * t0 * bx + t0 * t0 * (cx - coreR)
          py = (1 - t0) * (1 - t0) * p.y + 2 * (1 - t0) * t0 * cy + t0 * t0 * cy
          if (p.progress >= 1) {
            p.phase = 'fromCore'
            p.progress = 0
            p.x = cx + coreR
            p.y = cy
            const out = outputNodes[Math.floor(Math.random() * outputNodes.length)]
            p.destX = out.x
            p.destY = out.y
            p.color = `rgba(255,159,252,${0.4 + Math.random() * 0.4})`
          }
        } else {
          const bx = W() * 0.75
          const t0 = Math.min(p.progress, 1)
          px = (1 - t0) * (1 - t0) * (cx + coreR) + 2 * (1 - t0) * t0 * bx + t0 * t0 * p.destX
          py = (1 - t0) * (1 - t0) * cy + 2 * (1 - t0) * t0 * cy + t0 * t0 * p.destY
          if (p.progress >= 1) {
            // reset
            Object.assign(p, randomRaw())
          }
        }

        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  )
}
