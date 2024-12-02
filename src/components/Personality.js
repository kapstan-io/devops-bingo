import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { ReactComponent as ArrowRight } from '../assets/svg/Arrow-right.svg';

const PersonalityResult = ({ personality }) => {
  const resultRef = useRef(null);

  const generateImage = async () => {
    if (resultRef.current) {
      const dataUrl = await toPng(resultRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${personality.label}-DevOps-Personality.png`;
      link.click();
    }
  };

  // TODO: Share to Twitter and LinkedIn

  return (
    <section ref={resultRef} className="container result-section">
      <h2>Congratulations,<br />you're {personality.resultName}!</h2>

      <div style={{ padding: '0px 500px' }}>
        <div className='personality-image' style={{ background: 'white' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
        <button className='button-main inverted' onClick={generateImage}>
          <span>Show Off Your Persona</span>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default PersonalityResult;