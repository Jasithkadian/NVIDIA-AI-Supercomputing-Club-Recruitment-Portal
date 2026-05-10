import React from 'react';

function Motivation({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = formData.motivationJoin && formData.motivationCore && formData.valueBring && formData.goals && formData.ecosystemContribution;

  return (
    <div>
      <h2>Motivation & Contribution</h2>
      <p>Help us understand your drive and vision for the club.</p>
      
      <div className="form-group">
        <label className="form-label">Why do you want to join the NVIDIA AI & Supercomputing Club? *</label>
        <textarea name="motivationJoin" value={formData.motivationJoin} onChange={handleChange} className="form-textarea" placeholder="Tell us your motivation..." required></textarea>
      </div>
      
      <div className="form-group">
        <label className="form-label">Why are you interested in becoming a core member? *</label>
        <textarea name="motivationCore" value={formData.motivationCore} onChange={handleChange} className="form-textarea" placeholder="What drives you to lead..." required></textarea>
      </div>
      
      <div className="form-group">
        <label className="form-label">What value can you bring to the community? *</label>
        <textarea name="valueBring" value={formData.valueBring} onChange={handleChange} className="form-textarea" placeholder="Your skills, perspective, ideas..." required></textarea>
      </div>
      
      <div className="form-group">
        <label className="form-label">What are your goals from this club? *</label>
        <textarea name="goals" value={formData.goals} onChange={handleChange} className="form-textarea" placeholder="Learning, networking, building..." required></textarea>
      </div>
      
      <div className="form-group">
        <label className="form-label">How would you contribute towards building a strong and professional technical ecosystem? *</label>
        <textarea name="ecosystemContribution" value={formData.ecosystemContribution} onChange={handleChange} className="form-textarea" placeholder="Your vision for the ecosystem..." required></textarea>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default Motivation;
