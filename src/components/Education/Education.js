import React from 'react';
import './Education.css'; // Import your CSS file
import Gatech from '../../Assets/gt-seal_logo.png';
import UCR from '../../Assets/UC_Riverside_seal.png';

const Education = () => {
  const educationData = [
    {
      school: 'Georgia Institute of Technology',
      degree: 'Master of Science in Computer Science',
      dates: 'January 2024 - December 2026',
      description: 'Online Master of Science in Computer Science (OMSCS) program.',
      logo: Gatech,
      bulletPoints: ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.']
    },
    {
      school: 'University of California, Riverside',
      degree: 'Bachelor of Science in Computer Engineering',
      dates: 'September 2015 - December 2019',
      description: 'Undergraduate degree in Computer Science.',
      logo: UCR,
      bulletPoints: ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.']
    }
  ];

  return (
    <div className="education-section">
      <h1>Education</h1>
      {educationData.map((edu, index) => (
        <div className="education-entry" key={index}>
          <img src={edu.logo} alt={`${edu.school} logo`} className="education-logo" />
          <div className="education-details">
            <h2>{edu.school}</h2>
            <h3>{edu.degree}</h3>
            <p>{edu.dates}</p>
            <p>{edu.description}</p>
            <ul>
              {edu.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;