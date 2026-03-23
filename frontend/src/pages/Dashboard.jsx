import React, { useState, useEffect } from 'react';
import SkillInput from '../components/SkillInput';
import JobList from '../components/JobList';
import SkillTags from '../components/SkillTags';
import Roadmap from '../components/Roadmap';
import Loader from '../components/Loader';
import { fetchJobRecommendations } from '../services/api';
import { AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [error, setError] = useState(null);
  const [userSkillsInput, setUserSkillsInput] = useState("");

  const handleAnalyze = async (skills) => {
    setIsLoading(true);
    setError(null);
    setUserSkillsInput(skills);
    
    try {
      const cleanSkillsForAPI = skills.replace(/,/g, ' ');
      const data = await fetchJobRecommendations(cleanSkillsForAPI);
      setJobs(data);
      if (data && data.length > 0) {
        setSelectedJob(data[0]); // Select first job by default
      } else {
        setSelectedJob(null);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // Convert input string to array of clean lowercase words/phrases
  const userSkillsList = userSkillsInput
    .split(',')
    .map(s => s.trim().toLowerCase())
    .filter(s => s.length > 0)
    .flatMap(s => s.split(' ')); // Split by space if user didn't use commas

  // Clean array with unique values
  const uniqueUserSkills = [...new Set(userSkillsList)];

  return (
    <div className="container dashboard-layout">
      {/* Left Column - Input and List */}
      <div className="flex-col gap-6">
        <SkillInput onAnalyze={handleAnalyze} isLoading={isLoading} />
        
        {error && (
          <div className="card mt-4 p-4 animate-fade-in" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
            <div className="flex items-center gap-2" style={{ color: '#ef4444' }}>
              <AlertTriangle size={20} />
              <span>{error}</span>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="mt-8">
            <Loader message="Finding the best roles for you..." />
          </div>
        ) : jobs.length > 0 ? (
          <div className="mt-8">
            <JobList 
              jobs={jobs} 
              selectedJob={selectedJob} 
              onSelectJob={setSelectedJob} 
            />
          </div>
        ) : null}
      </div>

      {/* Right Column - Details and Roadmap */}
      <div className="flex-col gap-6" style={{ minHeight: '500px' }}>
        {!isLoading && !selectedJob && userSkillsInput === "" && (
          <div className="empty-state">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Ready to find your match?
            </h3>
            <p>Enter your skills on the left to see jobs that fit your profile.</p>
          </div>
        )}

        {!isLoading && selectedJob && (
          <div className="animate-fade-in flex flex-col gap-6">
            <SkillTags 
              missingSkills={selectedJob.missing_skills} 
              userSkills={uniqueUserSkills} 
            />
            
            <Roadmap missingSkills={selectedJob.missing_skills} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
