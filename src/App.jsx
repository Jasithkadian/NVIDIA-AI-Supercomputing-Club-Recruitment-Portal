import React from 'react';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <div className="nvidia-logo-container">
          <img src="/logo.png" alt="NVIDIA AI & Supercomputing Club Logo" style={{ maxWidth: '100%', height: 'auto', maxHeight: '120px' }} />
        </div>
      </div>
      <FormContainer />
    </div>
  );
}

export default App;
