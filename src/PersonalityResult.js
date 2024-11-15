import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

const PersonalityResult = ({ personality }) => {
  const resultRef = useRef(null); // Reference to the result container

  const generateImage = async () => {
    if (resultRef.current) {
      const dataUrl = await toPng(resultRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${personality.label}-DevOps-Personality.png`;
      link.click();
    }
  };

  return (
    <>
      <div ref={resultRef} className="personality-result">
        <h2>Your DevOps Personality: {personality.label}</h2>
        {personality.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
        ))}
      </div>
      <button onClick={generateImage}>Download Image</button>
    </>
  );
};

export default PersonalityResult;