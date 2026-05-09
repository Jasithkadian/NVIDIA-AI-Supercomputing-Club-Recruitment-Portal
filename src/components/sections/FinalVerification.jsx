import React from 'react';

function FinalVerification({ formData, handleChange, submitForm, prevStep, isSubmitting }) {
  const isComplete = formData.agreeActive && formData.agreeGenuine && formData.agreeProfessional;

  return (
    <div>
      <h2>Final Verification</h2>
      <p>Please confirm your application details before submitting.</p>
      
      <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--bg-panel-border)' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--nvidia-green)' }}>Application Summary</h3>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Name:</strong> {formData.fullName}</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Email:</strong> {formData.universityEmail}</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Role:</strong> {formData.role}</p>
        {formData.role === 'Core Team Member' && (
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Domain:</strong> {formData.domain}</p>
        )}
      </div>

      <div className="form-group">
        <label className="checkbox-group">
          <input type="checkbox" name="agreeActive" checked={formData.agreeActive} onChange={handleChange} />
          <div className="checkbox-custom">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={formData.agreeActive ? "#000" : "transparent"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="checkbox-label">I confirm my active participation and commitment to the club's activities if selected.</span>
        </label>
        
        <label className="checkbox-group">
          <input type="checkbox" name="agreeGenuine" checked={formData.agreeGenuine} onChange={handleChange} />
          <div className="checkbox-custom">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={formData.agreeGenuine ? "#000" : "transparent"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="checkbox-label">I confirm that all information provided in this form is genuine and accurate.</span>
        </label>
        
        <label className="checkbox-group">
          <input type="checkbox" name="agreeProfessional" checked={formData.agreeProfessional} onChange={handleChange} />
          <div className="checkbox-custom">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={formData.agreeProfessional ? "#000" : "transparent"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="checkbox-label">I agree to maintain professionalism and teamwork within the community.</span>
        </label>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep} disabled={isSubmitting}>Back</button>
        <button className="btn btn-primary" onClick={submitForm} disabled={!isComplete || isSubmitting}>
          {isSubmitting ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </div>
  );
}

export default FinalVerification;
