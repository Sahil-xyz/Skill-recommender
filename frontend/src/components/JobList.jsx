import React from 'react';
import JobCard from './JobCard';
import { Target } from 'lucide-react';

const JobList = ({ jobs, selectedJob, onSelectJob }) => {
  if (!jobs || jobs.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="section-header">
        <Target size={24} className="text-gradient" />
        Top Job Recommendations
      </div>
      
      <div className="flex flex-col gap-4">
        {jobs.map((job, index) => (
          <JobCard 
            key={index} 
            job={job} 
            index={index} 
            isSelected={selectedJob === job}
            onClick={() => onSelectJob(job)} 
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
