// src/components/ContentSection/SkillsSection.jsx
import React from 'react';
import './Skills.css';

const SkillsSection = () => (
  <div className="skills-section">

    <div className="skills-inner"> 
<h3 className="software-experience">Software Experience</h3>
    <div className="skills-grid">
      {[
        { name: 'Javascript', src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
        { name: 'HTML5', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { name: 'MongoDB', src: './mongodb.png' },
        { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
        { name: 'Github', src: './git.png' },
        { name: 'Postman', src: './postman.png' },
        { name: 'Neovim', src: './neovim.png' },
        { name: 'Linux', src: './linux.png' },
        { name: 'Docker', src: './docker.png' }
      ].map(({ name, src }) => (
        <div className="skill-item" key={name}>
          <span className="skill-icon">{name}</span>
          <img width="45px" height="45px" src={src} alt={name} className="skill-icon" />
        </div>
      ))}
    </div>


    </div>
      </div>
);

export default SkillsSection;

