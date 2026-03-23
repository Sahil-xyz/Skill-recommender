import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link to="/" className="logo">
          <BrainCircuit className="text-gradient" size={28} />
          <span>Skill <span className="text-gradient">Recommender</span></span>
        </Link>
        
        <div className="flex gap-4">
          {location.pathname !== '/dashboard' && (
            <Link to="/dashboard" className="btn-primary">
              Launch App
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
