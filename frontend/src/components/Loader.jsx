import React from 'react';

const Loader = ({ message = "Analyzing your skills..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 animate-fade-in">
      <div className="spinner"></div>
      <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{message}</p>
    </div>
  );
};

export default Loader;
