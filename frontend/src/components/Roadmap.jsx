import React from 'react';
import { Route } from 'lucide-react';

const Roadmap = ({ missingSkills = [] }) => {
  if (missingSkills.length === 0) return null;

  return (
    <div className="card animate-slide-up" style={{ animationDelay: '0.4s', marginTop: '1.5rem' }}>
      <h3 className="section-header">
        <Route size={24} className="text-gradient" />
        Your Learning Roadmap
      </h3>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        Step-by-step path to master the skills required for this role.
      </p>

      <div className="roadmap-container">
        {missingSkills.map((skill, index) => (
          <div key={index} className="roadmap-item animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
            <div className="roadmap-dot"></div>
            <div style={{ paddingLeft: '1rem' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                Step {index + 1}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Learn {skill}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Master the core concepts of {skill} and build practical projects to add to your portfolio.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
