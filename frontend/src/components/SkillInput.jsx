import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SkillInput = ({ onAnalyze, isLoading }) => {
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.trim() && !isLoading) {
      onAnalyze(skills.trim());
    }
  };

  return (
    <div className="card animate-slide-up">
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Your Skills</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Enter the technologies, frameworks, and tools you already know.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="input-field"
          placeholder="Enter skills (e.g., python, react, ml)"
          disabled={isLoading}
        />
        
        <button 
          type="submit" 
          className="btn-primary" 
          disabled={!skills.trim() || isLoading}
          style={{ justifyContent: 'center', width: '100%' }}
        >
          {isLoading ? (
            <span>Processing...</span>
          ) : (
            <>
              <Search size={18} />
              Analyze Skills
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SkillInput;
