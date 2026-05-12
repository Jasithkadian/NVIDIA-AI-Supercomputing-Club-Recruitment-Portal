import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function BootSequence({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#000000',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/logo.png" alt="NVIDIA Logo" style={{ width: '180px', filter: 'brightness(100)' }} />
          </motion.div>
          
          {/* Green scan line */}
          <motion.div
            initial={{ width: 0, opacity: 1 }}
            animate={{ width: '250px', opacity: [1, 1, 0] }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            style={{
              height: '2px',
              backgroundColor: '#76b900',
              marginTop: '30px',
              boxShadow: '0 0 12px #76b900',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BootSequence;
