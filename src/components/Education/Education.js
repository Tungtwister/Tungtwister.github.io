import React from 'react';
import './Education.css'; // Import your CSS file
import Gatech from '../../Assets/gt-seal_logo.png';
import UCR from '../../Assets/UC_Riverside_seal.png';

const Education = () => {
  const educationData = [
    {
      school: 'Georgia Institute of Technology',
      degree: 'Master of Science in Computer Science',
      dates: 'January 2024 - Expected December 2026',
      logo: Gatech,
      bulletPoints: [
        'Renowned for its rigorous graduate programs in computing and engineering.',
        'Coursework includes Machine Learning, Robotics AI Techniques, and Quantum Computing.',
        'Strengthened software engineering practices through team-based projects, emphasizing scalability, version control (Git), and agile methodologies.'
      ]
    },
    {
      school: 'University of California, Riverside',
      degree: 'Bachelor of Science in Computer Engineering',
      dates: 'September 2015 - December 2019',
      logo: UCR,
      bulletPoints: [
        'Top public research university with a focus on innovation and diversity.',
        'Built a strong foundation in computer architecture, embedded systems, and machine learning.',
        'Participated in collaborative team projects and coursework, developing a passion for using technology to solve real-world problems.'
      ]
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