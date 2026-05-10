import React from 'react';

function BasicInfo({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = formData.fullName && formData.universityEmail && formData.phoneNumber && formData.department && formData.yearSemester;

  return (
    <div>
      <h2>Basic Information</h2>
      <p>Please provide your contact and academic details.</p>
      
      <div className="form-group">
        <label className="form-label">Full Name *</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" placeholder="Enter your full name" required />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">University Email *</label>
          <input type="email" name="universityEmail" value={formData.universityEmail} onChange={handleChange} className="form-input" placeholder="student@university.edu" required />
        </div>
        <div className="form-group">
          <label className="form-label">Personal Email</label>
          <input type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} className="form-input" placeholder="personal@email.com" />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Phone Number *</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-input" placeholder="+1 (555) 000-0000" required />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Department / Branch *</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-input" placeholder="e.g. Computer Science" required />
        </div>
        <div className="form-group">
          <label className="form-label">Year / Semester *</label>
          <input type="text" name="yearSemester" value={formData.yearSemester} onChange={handleChange} className="form-input" placeholder="e.g. 2nd Year / 4th Sem" required />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">LinkedIn Profile </label>
        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="form-input" placeholder="https://linkedin.com/in/username" />
      </div>
      
      <div className="form-group">
        <label className="form-label">GitHub / Portfolio / Behance (or anything to tell us about yourself) </label>
        <input type="url" name="github" value={formData.github} onChange={handleChange} className="form-input" placeholder="https://github.com/username" />
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default BasicInfo;
