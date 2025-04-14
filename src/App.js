import React, { useEffect, useState } from 'react';
import BingoCard from './BingoCard';
import PersonalityResult from './components/Personality';
import cards from './data/cards';
import { personalityDescriptions } from './data/personalities';
import squigglyImage from './assets/images/squiggly.png';
import mousePointer from './assets/images/mouse-pointer.png';
import Header from './components/Header';
import Marquee from 'react-fast-marquee';
import AsteriskIcon from './assets/svg/Asterisk.svg';
import ArrowRight from './assets/svg/Arrow-right.svg';
import Title from './components/Title';
import Email from './components/Email';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [personality, setPersonality] = useState(null);
  const [showBingoCards, setShowBingoCards] = useState(true);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [topPersonality, setTopPersonality] = useState('');
  const [topStruggle, setTopStruggle] = useState('');

  const handleCardSelect = (text) => {
    setSelectedCards((prev) =>
      prev.includes(text) ? prev.filter((item) => item !== text) : [...prev, text]
    );
  };

  const handleSubmit = () => {
    if (selectedCards.length < 5) {
      return;
    }
    const personalityCounts = {};
    selectedCards.forEach((cardText) => {
      const card = cards.find((item) => item.text === cardText);
      card.personalities.forEach((personality) => {
        personalityCounts[personality] = (personalityCounts[personality] || 0) + 1;
      });
    });

    const topPersonality = Object.keys(personalityCounts).reduce((a, b) =>
      personalityCounts[a] > personalityCounts[b] ? a : b
    );

    setPersonality(personalityDescriptions[topPersonality]);
    setShowBingoCards(false);
    setShowEmailInput(true);
  };

  const handleEmailSubmit = async (email) => {
    setShowEmailInput(false); // Hide email input and show result
    return postToGDoc(email); // Record email in Google Sheets or any other storage as needed
  };

  useEffect(() => {
    const getFromGDoc = async () => {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzZpNxjU8ALf6JyqJwmIQFkD4_c1ChBpsRSjrzX2n4jOru1vxMoDgSnniHP2nmld52Q/exec',
        {
          method: 'GET',
          redirect: 'follow',
        }
      );

      const result = await response.json();
      setTopPersonality(result.personality);
      setTopStruggle(result.experience);
      return result;
    };

    getFromGDoc();
  }, []);

  const postToGDoc = async (email) => {
    // Send data to Google Sheets endpoint
    return fetch(
      'https://script.google.com/macros/s/AKfycbzZpNxjU8ALf6JyqJwmIQFkD4_c1ChBpsRSjrzX2n4jOru1vxMoDgSnniHP2nmld52Q/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: email,
          personality: personality.name,
          experiences: JSON.stringify(selectedCards),
        }),
      }
    );
  };

  return (
    <div className='App'>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <section className='background'>
          <div className='container image-container'>
            <img
              src={squigglyImage.src}
              alt=''
              className='squiggly-image'
            />

            <img
              src={mousePointer.src}
              alt=''
              className='pointer-image'
            />

            <div className='landing-section'>
              <div className='column'>
                <Title />

                <div style={{ alignSelf: 'flex-start', color: '#FFFFFF' }}>
                  <span>Powered by</span> <a href='https://www.kapstan.io' className='primary' target='_blank' rel='noreferrer'>Kapstan.io</a>
                </div>
              </div>

              <div className='column' style={{ alignSelf: 'flex-start', gap: '36px' }}>
                <h2>
                  Let's celebrate continuous delivery!
                </h2>

                <a href="#bingo" className='button-main button-primary' style={{ alignSelf: 'flex-start' }}>
                  Start Playing Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <Marquee className='marquee-container' autoFill>
          <span>DEVOPS<span style={{ letterSpacing: '-60%' }}> </span>BINGO</span>
          <AsteriskIcon />
          <span>POWERED<span style={{ letterSpacing: '-60%' }}> </span>BY<span style={{ letterSpacing: '-60%' }}> </span>KAPSTAN</span>
          <AsteriskIcon />
        </Marquee>

        <section id='bingo'>
          {showBingoCards && (
            <section className='bingo-section'>
              <div className='text-section'>
                <h2>
                  Discover Your Engineering Personality!
                </h2>

                <h3>
                  Dive into the DevOps madness! Check off your experiences to uncover the personality
                  that powers your engineering journey.
                </h3>
              </div>

              <div className='bingo-grid'>
                {cards.map((card, index) => (
                  <BingoCard
                    key={index}
                    text={card.text}
                    selected={selectedCards.includes(card.text)}
                    onSelect={handleCardSelect}
                  />
                ))}
              </div>

              <button disabled={selectedCards.length < 5} className='button-main primary' onClick={handleSubmit}>
                Reveal Your Personality {<ArrowRight />}
              </button>
            </section>
          )}

          {showEmailInput && <Email onSubmit={handleEmailSubmit} />}

          {(personality && !showEmailInput) && (
            <>
              <PersonalityResult personality={personality} />
              <Stats personality={topPersonality || personalityDescriptions.firefighter.name} struggle={topStruggle || cards[0].text} />
              <Banner />
            </>
          )}
        </section>
      </div>

      {!showBingoCards && <Footer />}
    </div>
  );
};

export default App;
