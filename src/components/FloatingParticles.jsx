import React from 'react';
import { motion } from 'framer-motion';

function FloatingParticles() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 5 : 8;

  // Generate standard particles
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: `std-${i}`,
    size: Math.floor(Math.random() * 250) + 150, // 150px to 400px
    left: `${Math.floor(Math.random() * 100)}%`, // 0% to 100%
    duration: Math.floor(Math.random() * 8) + 8, // 8s to 16s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.2 + 0.15, // 0.15 to 0.35
    color: Math.random() > 0.5 ? '#76b900' : '#e0e0e0', // Green or soft gray
  }));

  // Generate 3 larger accent orbs
  const accentOrbs = Array.from({ length: 3 }).map((_, i) => ({
    id: `acc-${i}`,
    size: Math.floor(Math.random() * 200) + 300, // 300px to 500px
    left: `${Math.floor(Math.random() * 100)}%`,
    duration: Math.floor(Math.random() * 10) + 20, // 20s to 30s
    delay: Math.random() * 10,
    opacity: Math.random() * 0.15 + 0.15, // 0.15 to 0.30
    color: '#76b900',
  }));

  const allParticles = [...particles, ...accentOrbs];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {allParticles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: -500, // Start well below the screen
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -(typeof window !== 'undefined' ? window.innerHeight : 1000) - 600], // Drift upward slowly
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
            }
          }}
        >
          <motion.div
            style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: p.color }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [p.opacity, p.opacity + 0.2, p.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: p.delay
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default FloatingParticles;
