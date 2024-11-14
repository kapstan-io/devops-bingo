import React from 'react';

const PersonalityResult = ({ personality }) => {
  return (
    <div className="result">
      <h2>Your DevOps Personality:</h2>
      <p>{personality}</p>
    </div>
  );
};

export default PersonalityResult;