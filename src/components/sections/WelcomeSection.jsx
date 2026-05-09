import React from 'react';

function WelcomeSection({ nextStep }) {
  return (
    <div>
      <h2>Welcome to the Future</h2>
      <p>
        Welcome to the official core team recruitment form for the <strong>NVIDIA AI & Supercomputing Club</strong>.
      </p>
      <p>
        This community is focused on innovation, accelerated computing, AI technologies, research, development, creativity, outreach, and professional growth.
      </p>
      <p>
        We aim to build a strong student-driven technical ecosystem inspired by futuristic technologies, collaboration, leadership, and real-world impact.
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(118, 185, 0, 0.1)', borderLeft: '4px solid var(--nvidia-green)', borderRadius: '0 8px 8px 0' }}>
        <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 500 }}>
          Notice: Only genuinely interested and active students should apply.
        </p>
      </div>
      <div className="button-group" style={{ justifyContent: 'flex-end' }}>
        <button className="btn btn-primary" onClick={nextStep}>
          Begin Application <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
