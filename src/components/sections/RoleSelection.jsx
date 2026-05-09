import React from 'react';

function RoleSelection({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = formData.role !== '';

  return (
    <div>
      <h2>Role Selection</h2>
      <p>Which role are you applying for in the club?</p>
      
      <div className="selection-grid">
        <label className={`selection-card ${formData.role === 'Core Team Member' ? 'selected' : ''}`}>
          <input 
            type="radio" 
            name="role" 
            value="Core Team Member" 
            checked={formData.role === 'Core Team Member'} 
            onChange={handleChange} 
          />
          <div className="selection-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          </div>
          <div className="selection-title">Core Team Member</div>
          <p className="selection-desc">Lead projects, manage domains, and drive the club's vision.</p>
        </label>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default RoleSelection;
