"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CloudAIBackground() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: 200 + Math.random() * 200,
      top: Math.random() * 100,
      left: Math.random() * 100,
      color:
        i % 2 === 0
          ? "radial-gradient(circle, #a78bfa, transparent)"
          : "radial-gradient(circle, #60a5fa, transparent)",
      duration: 25 + Math.random() * 10,
    }))

    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#f5efff] via-[#efe7ff] to-[#e6d9ff]">

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[120px] opacity-60"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -100, 60, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}