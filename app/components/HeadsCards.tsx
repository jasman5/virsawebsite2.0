import React from 'react';
import './HeadsCards.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface HeadsCardsProps {
  title: string;
  description: string;
  imageUrl: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

const HeadsCards: React.FC<HeadsCardsProps> = ({ title, description, imageUrl, instagramUrl, linkedinUrl }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="bottom">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="social-links">
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadsCards; 