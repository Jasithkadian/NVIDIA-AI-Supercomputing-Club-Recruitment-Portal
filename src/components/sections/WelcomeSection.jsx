import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.92 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } }
};

function WelcomeSection({ nextStep }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        <h2 style={{ marginBottom: '0.4rem' }}>Welcome to the Future</h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ height: '3px', backgroundColor: '#76b900', borderRadius: '2px', boxShadow: '0 0 8px rgba(118, 185, 0, 0.5)' }}
        />
      </motion.div>
      <motion.p variants={itemVariants}>
        Welcome to the official core team recruitment form for the <strong>NVIDIA AI & Supercomputing Club</strong>.
      </motion.p>
      <motion.p variants={itemVariants}>
        This community is focused on innovation, accelerated computing, AI technologies, research, development, creativity, outreach, and professional growth.
      </motion.p>
      <motion.p variants={itemVariants}>
        We aim to build a strong student-driven technical ecosystem inspired by futuristic technologies, collaboration, leadership, and real-world impact.
      </motion.p>
      <motion.div variants={itemVariants} style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(118, 185, 0, 0.1)', borderLeft: '4px solid var(--nvidia-green)', borderRadius: '0 8px 8px 0' }}>
        <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 500 }}>
          Notice: Only genuinely interested and active students should apply.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="button-group" style={{ justifyContent: 'flex-end' }}>
        <motion.button 
          className="btn btn-primary" 
          onClick={nextStep}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0 12px 40px rgba(118, 185, 0, 0.45)" }}
          whileTap={{ scale: 0.94, y: 1 }}
        >
          Begin Application <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default WelcomeSection;
