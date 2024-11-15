import React, { useState } from 'react';
import BingoCard from './BingoCard';
import PersonalityResult from './PersonalityResult';
import cards from './data/cards';
import personalityDescriptions from './data/personalities';

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [personality, setPersonality] = useState(null);
  const [email, setEmail] = useState('');
  const [showBingoCards, setShowBingoCards] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!validateEmail(inputEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailSubmit = () => {
    if (validateEmail(email)) {
      setShowEmailInput(false); // Hide email input and show result
      postToGDoc();// Record email in Google Sheets or any other storage as needed
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const postToGDoc = async () => {  
    // Send data to Google Sheets endpoint
    const response = await fetch("https://script.google.com/macros/s/AKfycbzZpNxjU8ALf6JyqJwmIQFkD4_c1ChBpsRSjrzX2n4jOru1vxMoDgSnniHP2nmld52Q/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        personality: personality,
      }),
    });
  
    const result = await response.json();
    if (result.status === "success") {
      console.log("Email recorded successfully");
    } else {
      console.error("Failed to record email");
    }
  };

  return (
    <div className="App">
      <div className="header">
      <img src="/kapstan-icon.png" alt="Kapstan logo" />
        <h1>DevOps Bingo <span>2024</span></h1>
      </div>
      
      {showBingoCards && (
        <div>
          <div>
            Been there, done that 😎? Select 5 or more cards to reveal your DevOps personality!
          </div>
          <div className="bingo-grid">
            {cards.map((card, index) => (
              <BingoCard
                key={index}
                text={card.text}
                selected={selectedCards.includes(card.text)}
                onSelect={handleCardSelect}
              />
            ))}
          </div>
          <button disabled={selectedCards.length < 5} onClick={handleSubmit}>Submit</button>
        </div>
      )} 
      { showEmailInput && (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <button onClick={handleEmailSubmit} disabled={emailError !== ''}>
            OK
          </button>
        </div>
      )}

      {personality && !showEmailInput && (
        <PersonalityResult
          personality={personality}
        />
      )}
    </div>
  );
};

export default App;