import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Target, BookOpen } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <section className="hero">
        <h1 className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Find the Best Jobs Based on <span className="text-gradient">Your Skills</span>
        </h1>
        <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Analyze your skills, identify gaps, and discover what you need to learn next to land your dream role in tech. Start your personalized learning journey today.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button 
            className="btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}
            onClick={() => navigate('/dashboard')}
          >
            Start Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="container mb-4" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Zap className="text-gradient mb-4" size={32} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Instant Analysis</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Get immediate feedback on how your current skills match with top industry roles.</p>
          </div>
          <div className="card animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Target className="text-gradient mb-4" size={32} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Identify Gaps</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Discover exactly which technologies and skills you're missing for your target jobs.</p>
          </div>
          <div className="card animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <BookOpen className="text-gradient mb-4" size={32} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Custom Roadmaps</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Follow an automatically generated, step-by-step path to acquire missing skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
