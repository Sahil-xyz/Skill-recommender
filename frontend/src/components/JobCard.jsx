import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const JobCard = ({ job, index, isSelected, onClick }) => {
  return (
    <div 
      className="card flex-col gap-4" 
      style={{ 
        cursor: 'pointer',
        animationDelay: `${index * 0.1}s`,
        border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
        boxShadow: isSelected ? 'var(--shadow-glow)' : 'var(--shadow-md)',
      }}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="flex items-center gap-2" style={{ fontWeight: 600, fontSize: '1.1rem' }}>
          <Briefcase size={20} className="text-gradient" />
          {job.job}
        </h3>
        {isSelected && <ArrowRight size={20} className="text-gradient" />}
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span>Match Score</span>
          <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{job.match_score}%</span>
        </div>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ 
              width: `${job.match_score}%`,
              background: job.match_score >= 80 ? 'var(--success)' : 'var(--accent-gradient)'
            }}
          ></div>
        </div>
      </div>
      
      <div className="mt-2" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        Missing Skills: <span style={{ color: '#ef4444', fontWeight: 500 }}>{job.missing_skills?.length || 0}</span>
      </div>
    </div>
  );
};

export default JobCard;
