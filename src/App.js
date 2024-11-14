import React, { useState } from 'react';
import BingoCard from './BingoCard';
import PersonalityResult from './PersonalityResult';

const cards = [
  { text: 'Production was on fire', personalities: ['The Firefighter', 'The Troubleshooter', 'The Hacker'] },
  { text: 'Shocked by Cloud bill', personalities: ['The Guardian', 'The Troubleshooter'] },
  { text: 'Woke up at 3AM with an alert', personalities: ['The Troubleshooter', 'The Firefighter', 'The Hacker'] },
  { text: 'Said “It worked on my laptop” at least once', personalities: ['The Hacker', 'The Sprinter'] },
  { text: 'Messed up manual configuration file', personalities: ['The Sprinter'] },
  { text: 'Committed secrets or passwords to the repository', personalities: ['The Sprinter'] },
  // Add the rest of the cards here...
];

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [personality, setPersonality] = useState(null);

  const handleCardSelect = (text) => {
    setSelectedCards((prev) =>
      prev.includes(text) ? prev.filter((item) => item !== text) : [...prev, text]
    );
  };

  const handleSubmit = () => {
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

    setPersonality(topPersonality);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="https://your-logo-url.com/logo.png" alt="Kapstan logo" />
        <h1>DevOps Bingo <span>2024</span></h1>
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
      <button onClick={handleSubmit}>Submit</button>
      {personality && <PersonalityResult personality={personality} />}
    </div>
  );
};

export default App;