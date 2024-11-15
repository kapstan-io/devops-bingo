import React from 'react';

const PersonalityResult = ({ personality }) => {
  return (
    <div className="result">
      <h2>Your DevOps Personality: {personality.label}</h2>
      {personality.description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
      ))}
    </div>
  );
};

export default PersonalityResult;