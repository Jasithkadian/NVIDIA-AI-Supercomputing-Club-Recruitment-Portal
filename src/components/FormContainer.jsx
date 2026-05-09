import React, { useState } from 'react';
import WelcomeSection from './sections/WelcomeSection';
import BasicInfo from './sections/BasicInfo';
import RoleSelection from './sections/RoleSelection';
import DomainSelection from './sections/DomainSelection';
import DomainSpecific from './sections/DomainSpecific';
import Motivation from './sections/Motivation';
import FinalVerification from './sections/FinalVerification';
import SuccessSection from './sections/SuccessSection';

function FormContainer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    universityEmail: '',
    personalEmail: '',
    phoneNumber: '',
    department: '',
    yearSemester: '',
    linkedin: '',
    github: '',
    role: '', // 'Core Team Member' or 'General Member'
    domain: '', // 'Technical Domain', 'Research & Innovation', etc.
    // Domain specific fields...
    technicalSkills: '',
    programmingLanguages: '',
    frameworks: '',
    previousProjects: '',
    hackathonExp: '',
    techInterest: '',
    availability: '',
    contribution: '',
    // General Domain specific fields map to these generic ones or specialized
    domainAnswers: {},
    // Motivation
    motivationJoin: '',
    motivationCore: '',
    valueBring: '',
    goals: '',
    ecosystemContribution: '',
    // Verification
    agreeActive: false,
    agreeGenuine: false,
    agreeProfessional: false,
  });

  const nextStep = () => {
    // Conditional logic
    if (step === 3 && formData.role === 'General Member') {
      // Skip to final verification
      setStep(7);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step === 7 && formData.role === 'General Member') {
      setStep(3);
    } else {
      setStep(step - 1);
    }
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
    
    // Format the data for the sheet
    const payload = {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName,
      email: formData.universityEmail,
      phoneNumber: formData.phoneNumber,
      department: `${formData.department} (${formData.yearSemester})`,
      domain: formData.role === 'Core Team Member' ? formData.domain : formData.role,
      skills: formData.domainAnswers.techSkills || formData.domainAnswers.commSkills || formData.domainAnswers.designTools || 'N/A',
      portfolio: formData.domainAnswers.projectLinks || formData.domainAnswers.portfolio || formData.domainAnswers.designPortfolio || formData.linkedin || formData.github || 'N/A',
      motivation: formData.motivationJoin || 'N/A',
      availability: formData.domainAnswers.weeklyAvail || 'N/A',
      rawAnswers: JSON.stringify(formData.domainAnswers)
    };

    try {
      // REPLACE THIS URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyyGsW2bu1NREFQCzBy47RdGMN0ebmDIoOuTCBU3sKDPPMQ5q68uxATzYppQFAkrE3J0g/exec";
      
      if (GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Simulate network request for development without URL
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.warn("Please replace GOOGLE_SCRIPT_URL with your actual Apps Script URL.");
      }
      
      setStep(8); // Success
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeSection nextStep={nextStep} />;
      case 2:
        return <BasicInfo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <RoleSelection formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <DomainSelection formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <DomainSpecific formData={formData} handleDomainAnswer={handleDomainAnswer} nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <Motivation formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 7:
        return <FinalVerification formData={formData} handleChange={handleChange} submitForm={handleSubmit} prevStep={prevStep} isSubmitting={isSubmitting} />;
      case 8:
        return <SuccessSection />;
      default:
        return <WelcomeSection nextStep={nextStep} />;
    }
  };

  // Calculate progress
  let totalSteps = formData.role === 'General Member' ? 4 : 7; // Welcome, Basic, Role, Final (4)
  let currentProgress = step > 7 ? totalSteps : step;
  if (formData.role === 'General Member' && step === 7) currentProgress = 4;
  
  const progressPercent = ((currentProgress - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="form-panel">
      {step < 8 && (
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="progress-text">Step {currentProgress} of {totalSteps}</div>
        </div>
      )}
      <div className="step-enter" key={step}>
        {renderStep()}
      </div>
    </div>
  );
}

export default FormContainer;
