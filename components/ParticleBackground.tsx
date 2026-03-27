"use client"

import Particles from "react-tsparticles"

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-20" // behind all content
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#8b5cf6" },
          links: { enable: true, color: "#8b5cf6", distance: 150, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1.2 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
    />
  )
}