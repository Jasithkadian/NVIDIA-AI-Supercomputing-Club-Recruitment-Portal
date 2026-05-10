import React from 'react';

function DomainSpecific({ formData, handleDomainAnswer, nextStep, prevStep }) {
  const { domain, domainAnswers } = formData;
  const requiresBestWork = ['Technical Domain', 'Research & Innovation', 'Media', 'Design'];
  const isComplete = (
    (domain === 'Outreach' ? (domainAnswers.outreachTask || '').trim() : true) &&
    (domain === 'Logistics' ? (domainAnswers.eventMgmt || '').trim() : true) &&
    (requiresBestWork.includes(domain) ? (domainAnswers.bestWork || '').trim() : true) &&
    (domainAnswers.communities || '').trim() &&
    (domainAnswers.eventIdea || '').trim() &&
    (domainAnswers.anythingElse || '').trim() &&
    (domainAnswers.techContrib || '').trim() &&
    (domainAnswers.weeklyAvail || '').trim()
  );

  const renderTechnical = () => (
    <>
      <div className="form-group">
        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Share your best technical work (link + short description) *</label>
        <textarea className="form-textarea" value={domainAnswers.bestWork || ''} onChange={(e) => handleDomainAnswer('bestWork', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">What technical event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe a technical workshop, hackathon, or demo day you'd like to organize..." rows="5" required></textarea>
      </div>
    </>
  );

  const renderResearch = () => (
    <>
      <div className="form-group">
        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Share your best research work (link/document + short summary) *</label>
        <textarea className="form-textarea" value={domainAnswers.bestWork || ''} onChange={(e) => handleDomainAnswer('bestWork', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">What research event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe a research symposium, paper discussion, or innovation showcase you'd like to organize..." rows="5" required></textarea>
      </div>
    </>
  );

  const renderMedia = () => (
    <>
      <div className="form-group">
        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Share your best media work (portfolio/reel + short summary) *</label>
        <textarea className="form-textarea" value={domainAnswers.bestWork || ''} onChange={(e) => handleDomainAnswer('bestWork', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">What media event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe a content series, documentary, or media campaign you'd like to create..." rows="5" required></textarea>
      </div>
    </>
  );

  const renderDesign = () => (
    <>
      <div className="form-group">
        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Share your best design work (portfolio + short summary) *</label>
        <textarea className="form-textarea" value={domainAnswers.bestWork || ''} onChange={(e) => handleDomainAnswer('bestWork', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">What design event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe a design workshop, branding session, or visual asset creation event you'd like to organize..." rows="5" required></textarea>
      </div>
    </>
  );

  const renderOutreach = () => (
    <>
      <div className="form-group">        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">        <label className="form-label">Ask 5 students: “What comes to mind when you hear NVIDIA Supercomputing Club?” Summarize responses and prepare a convincing argument to make them join. *</label>
        <textarea className="form-textarea" value={domainAnswers.outreachTask || ''} onChange={(e) => handleDomainAnswer('outreachTask', e.target.value)} required></textarea>
      </div>      <div className="form-group">
        <label className="form-label">What outreach event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe a community engagement event, campus awareness campaign, or recruitment drive you'd like to organize..." rows="5" required></textarea>
      </div>    </>
  );

  const renderLogistics = () => (
    <>
      <div className="form-group">
        <label className="form-label">What communities are you currently part of? *</label>
        <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Previous event management experience *</label>
        <textarea className="form-textarea" value={domainAnswers.eventMgmt || ''} onChange={(e) => handleDomainAnswer('eventMgmt', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">What logistics/event idea would you propose for the club? (4-5 lines) *</label>
        <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe an event you'd like to organize and manage for the club..." rows="5" required></textarea>
      </div>
    </>
  );

  return (
    <div>
      <h2>{domain}</h2>
      <p>Please answer the short domain-specific questions below.</p>
      
      {domain === 'Technical Domain' && renderTechnical()}
      {domain === 'Research & Innovation' && renderResearch()}
      {domain === 'Media' && renderMedia()}
      {domain === 'Design' && renderDesign()}
      {domain === 'Outreach' && renderOutreach()}
      {domain === 'Logistics' && renderLogistics()}
      {domain === 'No Preference' && (
        <>
          <div className="form-group">
            <label className="form-label">What communities are you currently part of? *</label>
            <textarea className="form-textarea" value={domainAnswers.communities || ''} onChange={(e) => handleDomainAnswer('communities', e.target.value)} placeholder="List any clubs, organizations, or communities you're involved with..." required></textarea>
          </div>
          <div className="form-group">
            <label className="form-label">Share your best work from any domain (link + short summary) *</label>
            <textarea className="form-textarea" value={domainAnswers.bestWork || ''} onChange={(e) => handleDomainAnswer('bestWork', e.target.value)} required></textarea>
          </div>
          <div className="form-group">
            <label className="form-label">What event idea would you propose for the club? (4-5 lines) *</label>
            <textarea className="form-textarea" value={domainAnswers.eventIdea || ''} onChange={(e) => handleDomainAnswer('eventIdea', e.target.value)} placeholder="Describe any event idea you'd like to organize for the club..." rows="5" required></textarea>
          </div>
        </>
      )}

      <div className="form-group">
        <label className="form-label">Anything else you want us to know? *</label>
        <textarea className="form-textarea" value={domainAnswers.anythingElse || ''} onChange={(e) => handleDomainAnswer('anythingElse', e.target.value)} placeholder="Share any additional information, achievements, or context that would help us understand you better..." rows="4" required></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">How can you contribute technically to the club? *</label>
        <textarea className="form-textarea" value={domainAnswers.techContrib || ''} onChange={(e) => handleDomainAnswer('techContrib', e.target.value)} required></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Weekly Availability *</label>
        <select className="form-select" value={domainAnswers.weeklyAvail || ''} onChange={(e) => handleDomainAnswer('weeklyAvail', e.target.value)} required>
          <option value="" disabled>Select availability</option>
          <option value="1-3 hours">1-3 hours / week</option>
          <option value="3-5 hours">3-5 hours / week</option>
          <option value="5-10 hours">5-10 hours / week</option>
          <option value="10+ hours">10+ hours / week</option>
        </select>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep} disabled={!isComplete}>Continue</button>
      </div>
    </div>
  );
}

export default DomainSpecific;
