import React from 'react';
import ShareIcon from '../assets/svg/Share.svg';
import { personalityImages } from '../data/personalities';

const PersonalityResult = ({ personality }) => {
  const pageURL = window.location.protocol + '//' + window.location.hostname + '/personas/' + personality.shareLink;
  const text = personality.shareText;

  const handleLinkedIn = () => {
    const link = `https://www.linkedin.com/sharing/share-offsite/?url=${pageURL}&text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
  };

  const handleTwitter = () => {
    const link = `https://twitter.com/intent/tweet?url=${pageURL}&text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
  };

  return (
    <section className="container result-section">
      <h2>Congratulations,<br />you're {personality.resultName}!</h2>

      <div>
        <article className="column personality-card">
          <img alt='Most common persona' src={personalityImages[personality.name].src} className="top-image" />

          <span>{personality.description}</span>

          <div className="row" style={{ gap: '24px', alignItems: 'center' }}>
            <button className='button-main inverted' onClick={handleLinkedIn}>
              <ShareIcon />
              <span>LinkedIn</span>
            </button>

            <button className='button-main inverted' onClick={handleTwitter}>
              <ShareIcon />
              <span>X</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PersonalityResult;