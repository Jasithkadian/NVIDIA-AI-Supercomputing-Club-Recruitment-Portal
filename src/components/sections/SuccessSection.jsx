import React from 'react';

function SuccessSection() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        borderRadius: '50%', 
        backgroundColor: 'rgba(118, 185, 0, 0.1)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '0 auto 2rem auto',
        boxShadow: '0 0 30px var(--nvidia-green-glow)'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--nvidia-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--nvidia-green)' }}>Application Submitted</h2>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
        Thank you for applying to the NVIDIA AI & Supercomputing Club. We will review your application and get back to you soon.
      </p>
      
      <div style={{ 
        padding: '1.5rem', 
        backgroundColor: 'rgba(0,0,0,0.02)', 
        border: '1px solid var(--bg-panel-border)', 
        borderRadius: '8px',
        display: 'inline-block'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          "The future belongs to those who build it."
        </p>
      </div>
    </div>
  );
}

export default SuccessSection;
