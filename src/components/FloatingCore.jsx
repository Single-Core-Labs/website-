import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05)
    }
  })

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[3, 0]} />
      <meshBasicMaterial 
        color="#FF6600" 
        wireframe 
        transparent 
        opacity={0.6}
      />
      {/* Subtle point light inside for the glow effect */}
      <pointLight color="#FF6600" intensity={2} distance={10} />
    </mesh>
  )
}

export default function FloatingCore() {
  return (
    <div className="w-full h-[300px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Core />
        </Float>
      </Canvas>
    </div>
  )
}
