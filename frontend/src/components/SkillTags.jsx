import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const SkillTags = ({ missingSkills = [], userSkills = [] }) => {
  return (
    <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h3 className="section-header">Skill Gap Analysis</h3>
      
      <div className="mb-6">
        <h4 className="flex items-center gap-2 mb-3" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          <AlertCircle size={18} color="#ef4444" />
          Missing Skills to Learn
        </h4>
        <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
          {missingSkills.length > 0 ? (
            missingSkills.map((skill, index) => (
              <span key={index} className="chip missing">
                {skill}
              </span>
            ))
          ) : (
            <span style={{ color: 'var(--success)', fontSize: '0.95rem' }}>
              Great job! You have all the key skills for this role.
            </span>
          )}
        </div>
      </div>

      <div>
        <h4 className="flex items-center gap-2 mb-3" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          <CheckCircle size={18} color="var(--success)" />
          Your Matching Skills
        </h4>
        <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
          {userSkills.length > 0 ? (
            userSkills.map((skill, index) => (
              <span key={index} className="chip">
                {skill}
              </span>
            ))
          ) : (
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              No matching skills found.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillTags;
