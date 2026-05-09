import React from 'react';

function DomainSpecific({ formData, handleDomainAnswer, nextStep, prevStep }) {
  const { domain, domainAnswers } = formData;

  const renderTechnical = () => (
    <>
      <div className="form-group">
        <label className="form-label">Technical Skills *</label>
        <input type="text" className="form-input" value={domainAnswers.techSkills || ''} onChange={(e) => handleDomainAnswer('techSkills', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Programming Languages Known *</label>
        <input type="text" className="form-input" value={domainAnswers.progLang || ''} onChange={(e) => handleDomainAnswer('progLang', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Frameworks / Tools Used *</label>
        <input type="text" className="form-input" value={domainAnswers.frameworks || ''} onChange={(e) => handleDomainAnswer('frameworks', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Previous Projects or Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.prevProjects || ''} onChange={(e) => handleDomainAnswer('prevProjects', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">GitHub / Project Links *</label>
        <input type="text" className="form-input" value={domainAnswers.projectLinks || ''} onChange={(e) => handleDomainAnswer('projectLinks', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Hackathon / Competition Participation</label>
        <textarea className="form-textarea" value={domainAnswers.hackathons || ''} onChange={(e) => handleDomainAnswer('hackathons', e.target.value)}></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Areas of Technical Interest *</label>
        <input type="text" className="form-input" value={domainAnswers.techInterest || ''} onChange={(e) => handleDomainAnswer('techInterest', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">How can you contribute technically to the club? *</label>
        <textarea className="form-textarea" value={domainAnswers.techContrib || ''} onChange={(e) => handleDomainAnswer('techContrib', e.target.value)} required></textarea>
      </div>
    </>
  );

  const renderResearch = () => (
    <>
      <div className="form-group">
        <label className="form-label">Research Interests *</label>
        <input type="text" className="form-input" value={domainAnswers.researchInterest || ''} onChange={(e) => handleDomainAnswer('researchInterest', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Innovation / Project Ideas *</label>
        <textarea className="form-textarea" value={domainAnswers.ideas || ''} onChange={(e) => handleDomainAnswer('ideas', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Experience in Research or Competitions *</label>
        <textarea className="form-textarea" value={domainAnswers.researchExp || ''} onChange={(e) => handleDomainAnswer('researchExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Problem-Solving Interests *</label>
        <input type="text" className="form-input" value={domainAnswers.problemSolving || ''} onChange={(e) => handleDomainAnswer('problemSolving', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Technical Writing / Documentation Skills *</label>
        <input type="text" className="form-input" value={domainAnswers.techWriting || ''} onChange={(e) => handleDomainAnswer('techWriting', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Research Goals *</label>
        <textarea className="form-textarea" value={domainAnswers.goals || ''} onChange={(e) => handleDomainAnswer('goals', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">How can you contribute to innovation within the club? *</label>
        <textarea className="form-textarea" value={domainAnswers.innovationContrib || ''} onChange={(e) => handleDomainAnswer('innovationContrib', e.target.value)} required></textarea>
      </div>
    </>
  );

  const renderMedia = () => (
    <>
      <div className="form-group">
        <label className="form-label">Social Media Handling Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.socialExp || ''} onChange={(e) => handleDomainAnswer('socialExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Content Creation Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.contentExp || ''} onChange={(e) => handleDomainAnswer('contentExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Reel / Video / Content Editing Experience *</label>
        <input type="text" className="form-input" value={domainAnswers.editingExp || ''} onChange={(e) => handleDomainAnswer('editingExp', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Photography / Videography Skills *</label>
        <input type="text" className="form-input" value={domainAnswers.photoVideo || ''} onChange={(e) => handleDomainAnswer('photoVideo', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Platforms / Tools Used *</label>
        <input type="text" className="form-input" value={domainAnswers.toolsUsed || ''} onChange={(e) => handleDomainAnswer('toolsUsed', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Previous Work or Portfolio Links *</label>
        <input type="text" className="form-input" value={domainAnswers.portfolio || ''} onChange={(e) => handleDomainAnswer('portfolio', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Creative Contribution Ideas *</label>
        <textarea className="form-textarea" value={domainAnswers.creativeIdeas || ''} onChange={(e) => handleDomainAnswer('creativeIdeas', e.target.value)} required></textarea>
      </div>
    </>
  );

  const renderDesign = () => (
    <>
      <div className="form-group">
        <label className="form-label">Canva / Figma / Photoshop / Illustrator Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.designExp || ''} onChange={(e) => handleDomainAnswer('designExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Poster / Banner / Design Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.posterExp || ''} onChange={(e) => handleDomainAnswer('posterExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">UI/UX or Branding Interests *</label>
        <input type="text" className="form-input" value={domainAnswers.uiux || ''} onChange={(e) => handleDomainAnswer('uiux', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Portfolio / Sample Design Links *</label>
        <input type="text" className="form-input" value={domainAnswers.designPortfolio || ''} onChange={(e) => handleDomainAnswer('designPortfolio', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Creative Design Ideas for the Club *</label>
        <textarea className="form-textarea" value={domainAnswers.designIdeas || ''} onChange={(e) => handleDomainAnswer('designIdeas', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Design Tools Known *</label>
        <input type="text" className="form-input" value={domainAnswers.designTools || ''} onChange={(e) => handleDomainAnswer('designTools', e.target.value)} required />
      </div>
    </>
  );

  const renderOutreach = () => (
    <>
      <div className="form-group">
        <label className="form-label">Communication Skills *</label>
        <input type="text" className="form-input" value={domainAnswers.commSkills || ''} onChange={(e) => handleDomainAnswer('commSkills', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Networking Abilities *</label>
        <input type="text" className="form-input" value={domainAnswers.networking || ''} onChange={(e) => handleDomainAnswer('networking', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Sponsorship / Outreach Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.sponsorExp || ''} onChange={(e) => handleDomainAnswer('sponsorExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Public Speaking / Hosting Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.speakingExp || ''} onChange={(e) => handleDomainAnswer('speakingExp', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Event Coordination Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.eventCoord || ''} onChange={(e) => handleDomainAnswer('eventCoord', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Leadership / Team Management Interests *</label>
        <input type="text" className="form-input" value={domainAnswers.leadership || ''} onChange={(e) => handleDomainAnswer('leadership', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Community Handling Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.community || ''} onChange={(e) => handleDomainAnswer('community', e.target.value)} required></textarea>
      </div>
    </>
  );

  const renderLogistics = () => (
    <>
      <div className="form-group">
        <label className="form-label">Event Management Experience *</label>
        <textarea className="form-textarea" value={domainAnswers.eventMgmt || ''} onChange={(e) => handleDomainAnswer('eventMgmt', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Coordination and Organizational Skills *</label>
        <input type="text" className="form-input" value={domainAnswers.orgSkills || ''} onChange={(e) => handleDomainAnswer('orgSkills', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Ability to Manage Operations During Events *</label>
        <textarea className="form-textarea" value={domainAnswers.operations || ''} onChange={(e) => handleDomainAnswer('operations', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Teamwork and Responsibility Handling *</label>
        <input type="text" className="form-input" value={domainAnswers.teamwork || ''} onChange={(e) => handleDomainAnswer('teamwork', e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Problem-Solving Under Pressure *</label>
        <textarea className="form-textarea" value={domainAnswers.pressure || ''} onChange={(e) => handleDomainAnswer('pressure', e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Experience Managing Registrations / Resources *</label>
        <textarea className="form-textarea" value={domainAnswers.resources || ''} onChange={(e) => handleDomainAnswer('resources', e.target.value)} required></textarea>
      </div>
    </>
  );

  return (
    <div>
      <h2>{domain}</h2>
      <p>Please provide details about your experience in {domain.toLowerCase()}.</p>
      
      {domain === 'Technical Domain' && renderTechnical()}
      {domain === 'Research & Innovation' && renderResearch()}
      {domain === 'Media' && renderMedia()}
      {domain === 'Design' && renderDesign()}
      {domain === 'Outreach' && renderOutreach()}
      {domain === 'Logistics' && renderLogistics()}

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
        <button className="btn btn-primary" onClick={nextStep}>Continue</button>
      </div>
    </div>
  );
}

export default DomainSpecific;
