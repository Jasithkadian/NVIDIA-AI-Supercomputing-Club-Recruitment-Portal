import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CursorSpotlight() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const springConfig = { stiffness: 80, damping: 25 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(118, 185, 0, 0.08) 0%, rgba(118, 185, 0, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 50,
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
}

export default CursorSpotlight;
