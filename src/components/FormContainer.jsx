import React, { useState, useEffect } from 'react';
import WelcomeSection from './sections/WelcomeSection';
import BasicInfo from './sections/BasicInfo';
import DomainSelection from './sections/DomainSelection';
import DomainSpecific from './sections/DomainSpecific';
import Motivation from './sections/Motivation';
import FinalVerification from './sections/FinalVerification';
import SuccessSection from './sections/SuccessSection';

const STORAGE_KEY = 'nvidia_recruitment_form_data';

function FormContainer() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState('next');
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
    return {
      fullName: '',
      universityEmail: '',
      personalEmail: '',
      phoneNumber: '',
      department: '',
      yearSemester: '',
      linkedin: '',
      github: '',
      domain: '',
      domainAnswers: {},
      motivationJoin: '',
      motivationCore: '',
      valueBring: '',
      goals: '',
      ecosystemContribution: '',
      agreeActive: false,
      agreeGenuine: false,
      agreeProfessional: false,
      website: '', // Honeypot field
    };
  });

  // Save to local storage whenever formData changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    setDirection('next');
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection('prev');
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleDomainAnswer = (name, value) => {
    setFormData({
      ...formData,
      domainAnswers: {
        ...formData.domainAnswers,
        [name]: value
      }
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Use environment variable from Vite (import.meta.env)
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        localStorage.removeItem(STORAGE_KEY);
        setStep(7); // Success
      } else {
        console.error('Server error:', result.error);
        alert('Submission failed: ' + result.error);
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed: " + error.message + "\n\nPlease try again later or contact support if the issue persists.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const animationClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
    
    return (
      <div className={animationClass} key={step}>
        {(() => {
          switch (step) {
            case 1:
              return <WelcomeSection nextStep={nextStep} />;
            case 2:
              return <BasicInfo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
              return <DomainSelection formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
            case 4:
              return <DomainSpecific formData={formData} handleDomainAnswer={handleDomainAnswer} nextStep={nextStep} prevStep={prevStep} />;
            case 5:
              return <Motivation formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
            case 6:
              return <FinalVerification formData={formData} handleChange={handleChange} submitForm={handleSubmit} prevStep={prevStep} isSubmitting={isSubmitting} />;
            case 7:
              return <SuccessSection />;
            default:
              return <WelcomeSection nextStep={nextStep} />;
          }
        })()}
      </div>
    );
  };

  const totalSteps = 6;
  const currentProgress = step > totalSteps ? totalSteps : step;
  const progressPercent = ((currentProgress - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="form-panel">
      {step < 7 && (
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="progress-text">Step {currentProgress} of {totalSteps}</div>
        </div>
      )}
      <div className="step-container">
        {renderStep()}
      </div>
    </div>
  );
}

export default FormContainer;
