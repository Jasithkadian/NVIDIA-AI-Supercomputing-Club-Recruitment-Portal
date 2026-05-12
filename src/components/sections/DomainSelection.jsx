import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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

const MagneticCard = ({ domain, isSelected, isFirstSelected, handleChange, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div variants={itemVariants} style={{ perspective: 1000, ...(isSelected && isFirstSelected ? { gridColumn: '1 / -1' } : {}) }}>
      <motion.label
        className={`selection-card domain-card ${isSelected ? 'selected domain-card-selected' : 'domain-card-unselected'}`}
        style={{
          rotateX,
          rotateY,
          display: 'flex',
          height: '100%',
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: index * 0.1 }}
        whileHover={{ 
          boxShadow: "0 0 30px rgba(118, 185, 0, 0.5)", 
          background: "linear-gradient(120deg, rgba(118,185,0,0.08) 0%, rgba(118,185,0,0.0) 100%)" 
        }}
      >
        <input 
          type="radio" 
          name="domain" 
          value={domain.id} 
          checked={isSelected} 
          onChange={handleChange} 
        />
        <div className="selection-icon domain-card-icon">
          {domain.icon}
        </div>
        <div className="selection-title domain-card-title">{domain.id}</div>
        {isSelected && (
          <p className="selection-desc domain-card-intro">{domain.intro}</p>
        )}
      </motion.label>
    </motion.div>
  );
};

function DomainSelection({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = formData.domain !== '';

  const domains = [
    {
      id: 'Technical Domain',
      intro: 'Build web tools, automations, and technical workflows that power club operations.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    },
    {
      id: 'Research & Innovation',
      intro: 'Explore AI, HPC, and emerging ideas while proposing project directions for the club.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
    },
    {
      id: 'Media',
      intro: 'Create high-quality content that highlights events, projects, and student impact.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
    },
    {
      id: 'Design',
      intro: 'Craft posters, visuals, and branded assets that make every initiative stand out.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
    },
    {
      id: 'Outreach',
      intro: 'Grow the community through student conversations, campaigns, and partnerships.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    {
      id: 'Logistics',
      intro: 'Plan and execute smooth events by coordinating resources, timelines, and teams.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
      id: 'No Preference',
      intro: 'Open to contributing where needed. We can match you based on your strengths.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
    }
  ];

  // Arrange domains: selected first, then others
  const arrangedDomains = formData.domain
    ? [
        domains.find(d => d.id === formData.domain),
        ...domains.filter(d => d.id !== formData.domain)
      ]
    : domains;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 variants={itemVariants}>Domain Selection</motion.h2>
      <motion.p variants={itemVariants}>Which domain are you applying for within the Team?</motion.p>
      
      <motion.div variants={itemVariants} className={`domain-grid ${formData.domain ? 'domain-grid-selected' : ''}`}>
        {arrangedDomains.map((domain, index) => (
          <MagneticCard 
            key={domain.id}
            domain={domain}
            isSelected={formData.domain === domain.id}
            isFirstSelected={formData.domain && index === 0}
            handleChange={handleChange}
            index={index}
          />
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="button-group">
        <motion.button 
          className="btn btn-secondary" 
          onClick={prevStep}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.94, y: 1 }}
        >
          Back
        </motion.button>
        <motion.button 
          className="btn btn-primary" 
          onClick={nextStep} 
          disabled={!isComplete}
          whileHover={isComplete ? { scale: 1.07, y: -6, boxShadow: "0 12px 40px rgba(118, 185, 0, 0.45)" } : {}}
          whileTap={isComplete ? { scale: 0.94, y: 1 } : {}}
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default DomainSelection;
