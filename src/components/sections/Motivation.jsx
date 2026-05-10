import React from 'react';

const CharCounter = ({ current }) => (
  <div className="char-counter">
    {current} characters
  </div>
);

function Motivation({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = 
    formData.motivationJoin?.trim().length > 0 && 
    formData.goals?.trim().length > 0;

  return (
    <div>
      <h2>Motivation & Contribution</h2>
      <p>Help us understand your drive and vision for the club.</p>
      
      <div className="form-group">
        <label className="form-label">Why do you want to join the NVIDIA AI & Supercomputing Club? *</label>
        <textarea name="motivationJoin" value={formData.motivationJoin} onChange={handleChange} className="form-textarea" placeholder="Tell us your motivation..." required></textarea>
        <CharCounter current={formData.motivationJoin?.length || 0} />
      </div>
      
      <div className="form-group">
        <label className="form-label">What are your goals from this club? *</label>
        <textarea name="goals" value={formData.goals} onChange={handleChange} className="form-textarea" placeholder="Learning, networking, building..." required></textarea>
        <CharCounter current={formData.goals?.length || 0} />
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default Motivation;
