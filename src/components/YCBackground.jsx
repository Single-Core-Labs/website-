import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralMesh() {
  const meshRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const { points, lineGeometry } = useMemo(() => {
    const size = 30
    const segments = 25
    const points = []
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const x = (i / segments - 0.5) * size
        const y = (j / segments - 0.5) * size
        const z = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 0.5
        points.push(new THREE.Vector3(x, y, z))
      }
    }

    const indices = []
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < segments; j++) {
        const a = i * (segments + 1) + j
        const b = (i + 1) * (segments + 1) + j
        const c = i * (segments + 1) + (j + 1)
        const d = (i + 1) * (segments + 1) + (j + 1)
        indices.push(a, b, b, d, d, c, c, a)
      }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    geometry.setIndex(indices)
    return { points, lineGeometry: geometry }
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Mouse interaction
    const targetX = state.mouse.x * 2
    const targetY = state.mouse.y * 2
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, targetX, 0.05)
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, targetY, 0.05)

    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.current.y * 0.05 + Math.sin(time * 0.2) * 0.05
      meshRef.current.rotation.y = mouse.current.x * 0.05 + Math.cos(time * 0.2) * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#ffffff" opacity={0.05} transparent />
      </lineSegments>
      <points geometry={lineGeometry}>
        <pointsMaterial color="#FF6600" size={0.03} transparent opacity={0.2} />
      </points>
    </group>
  )
}

export default function YCBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0A0A0B]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <NeuralMesh />
      </Canvas>
      <div className="grain-overlay" />
    </div>
  )
}
