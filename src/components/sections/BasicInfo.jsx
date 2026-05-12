import React, { useState, useEffect } from 'react';
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

function BasicInfo({ formData, handleChange, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    
    // University Email Validation
    if (formData.universityEmail) {
      const email = formData.universityEmail.toLowerCase();
      if (!email.endsWith('@galgotiasuniversity.ac.in') && !email.endsWith('@galgotiasuniversity.edu.in')) {
        newErrors.universityEmail = 'Must be a @galgotiasuniversity.ac.in or .edu.in email';
      }
    }

    // Personal Email Validation
    if (formData.personalEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.personalEmail)) {
        newErrors.personalEmail = 'Invalid email format';
      }
    }

    // Phone Number Validation (Standard 10 digits)
    if (formData.phoneNumber) {
      const phoneRegex = /^[0-9]{10}$/;
      const cleaned = formData.phoneNumber.replace(/\D/g, '');
      if (cleaned.length !== 10) {
        newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [formData.universityEmail, formData.personalEmail, formData.phoneNumber]);

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isComplete = formData.fullName && 
                     formData.universityEmail && 
                     formData.phoneNumber && 
                     formData.department && 
                     formData.yearSemester &&
                     Object.keys(errors).length === 0;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 variants={itemVariants}>Basic Information</motion.h2>
      <motion.p variants={itemVariants}>Please provide your contact and academic details.</motion.p>
      
      <motion.div variants={itemVariants} className="form-group">
        <label className="form-label">Full Name *</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" placeholder="Enter your full name" required />
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">University Email *</label>
          <input 
            type="email" 
            name="universityEmail" 
            value={formData.universityEmail} 
            onChange={handleChange} 
            onBlur={handleBlur}
            className={`form-input ${touched.universityEmail && errors.universityEmail ? 'input-error' : ''}`} 
            placeholder="student@galgotiasuniversity.ac.in" 
            required 
          />
          {touched.universityEmail && errors.universityEmail && <span className="error-text">{errors.universityEmail}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Personal Email</label>
          <input 
            type="email" 
            name="personalEmail" 
            value={formData.personalEmail} 
            onChange={handleChange} 
            onBlur={handleBlur}
            className={`form-input ${touched.personalEmail && errors.personalEmail ? 'input-error' : ''}`} 
            placeholder="personal@email.com" 
          />
          {touched.personalEmail && errors.personalEmail && <span className="error-text">{errors.personalEmail}</span>}
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="form-group">
        <label className="form-label">Phone Number *</label>
        <input 
          type="tel" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          onBlur={handleBlur}
          className={`form-input ${touched.phoneNumber && errors.phoneNumber ? 'input-error' : ''}`} 
          placeholder="10-digit mobile number" 
          required 
        />
        {touched.phoneNumber && errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Department / Branch *</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-input" placeholder="e.g. Computer Science" required />
        </div>
        <div className="form-group">
          <label className="form-label">Year / Semester *</label>
          <input type="text" name="yearSemester" value={formData.yearSemester} onChange={handleChange} className="form-input" placeholder="e.g. 2nd Year / 4th Sem" required />
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="form-group">
        <label className="form-label">LinkedIn Profile </label>
        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="form-input" placeholder="https://linkedin.com/in/username" />
      </motion.div>
      
      <motion.div variants={itemVariants} className="form-group">
        <label className="form-label">GitHub / Portfolio / Behance (or anything to tell us about yourself) </label>
        <input type="url" name="github" value={formData.github} onChange={handleChange} className="form-input" placeholder="https://github.com/username" />
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

export default BasicInfo;
