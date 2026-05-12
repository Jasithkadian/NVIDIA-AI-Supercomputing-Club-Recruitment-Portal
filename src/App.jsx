import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormContainer from './components/FormContainer';
import FloatingParticles from './components/FloatingParticles';
import CursorSpotlight from './components/CursorSpotlight';
import CursorTrail from './components/CursorTrail';
import BootSequence from './components/BootSequence';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <CursorTrail />
      <CursorSpotlight />
      
      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <div className="app-container">
          <FloatingParticles />
          
          {/* Watermark Logo */}
          <motion.div 
            className="watermark-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10 }}
          >
            <motion.img 
              src="/logo.png" 
              alt="NVIDIA" 
              style={{ width: '100px', cursor: 'pointer' }} 
              whileHover={{ filter: 'drop-shadow(0 0 8px rgba(118, 185, 0, 0.6))' }}
            />
            <div style={{ fontSize: '10px', fontWeight: 300, letterSpacing: '0.08em', marginTop: '4px', color: 'var(--text-secondary)' }}>
              AI & SUPERCOMPUTING CLUB
            </div>
          </motion.div>

          <div className="header-container">
            <motion.div 
              className="nvidia-logo-container"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.1 }}
            >
              <img src="/logo.png" alt="NVIDIA AI & Supercomputing Club Logo" style={{ maxWidth: '100%', height: 'auto', maxHeight: '120px' }} />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <FormContainer />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;
