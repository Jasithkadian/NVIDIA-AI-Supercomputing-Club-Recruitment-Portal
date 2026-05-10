import React from 'react';

const CharCounter = ({ current, min = 100 }) => (
  <div className={`char-counter ${current >= min ? 'good' : ''}`}>
    {current} / {min} characters recommended
  </div>
);

function Motivation({ formData, handleChange, nextStep, prevStep }) {
  const isComplete = 
    formData.motivationJoin?.length >= 50 && 
    formData.motivationCore?.length >= 50 && 
    formData.valueBring?.length >= 50 && 
    formData.goals?.length >= 50 && 
    formData.ecosystemContribution?.length >= 50;

  return (
    <div>
      <h2>Motivation & Contribution</h2>
      <p>Help us understand your drive and vision for the club. (Min 50 chars per answer)</p>
      
      <div className="form-group">
        <label className="form-label">Why do you want to join the NVIDIA AI & Supercomputing Club? *</label>
        <textarea name="motivationJoin" value={formData.motivationJoin} onChange={handleChange} className="form-textarea" placeholder="Tell us your motivation..." required></textarea>
        <CharCounter current={formData.motivationJoin?.length || 0} min={100} />
      </div>
      
      <div className="form-group">
        <label className="form-label">Why are you interested in becoming a core member? *</label>
        <textarea name="motivationCore" value={formData.motivationCore} onChange={handleChange} className="form-textarea" placeholder="What drives you to lead..." required></textarea>
        <CharCounter current={formData.motivationCore?.length || 0} min={100} />
      </div>
      
      <div className="form-group">
        <label className="form-label">What value can you bring to the community? *</label>
        <textarea name="valueBring" value={formData.valueBring} onChange={handleChange} className="form-textarea" placeholder="Your skills, perspective, ideas..." required></textarea>
        <CharCounter current={formData.valueBring?.length || 0} min={100} />
      </div>
      
      <div className="form-group">
        <label className="form-label">What are your goals from this club? *</label>
        <textarea name="goals" value={formData.goals} onChange={handleChange} className="form-textarea" placeholder="Learning, networking, building..." required></textarea>
        <CharCounter current={formData.goals?.length || 0} min={100} />
      </div>
      
      <div className="form-group">
        <label className="form-label">How would you contribute towards building a strong and professional technical ecosystem? *</label>
        <textarea name="ecosystemContribution" value={formData.ecosystemContribution} onChange={handleChange} className="form-textarea" placeholder="Your vision for the ecosystem..." required></textarea>
        <CharCounter current={formData.ecosystemContribution?.length || 0} min={100} />
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default Motivation;
