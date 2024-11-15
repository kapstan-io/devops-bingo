import React, { useState } from "react";
import BingoCard from "./BingoCard";
import PersonalityResult from "./PersonalityResult";

const cards = [
  {
    text: "Set a 🔥 in production (Oops!)",
    personalities: ["The Firefighter", "The Flash"],
  },
  {
    text: "3 AM pager duty - resolved it by sunrise",
    personalities: ["The Firefighter", "The Guardian"],
  },
  {
    text: "“It worked on my laptop!” 👩‍💻",
    personalities: ["The Flash"],
  },
  {
    text: "Left a debug log in production",
    personalities: ["The Cleanup Commander", "The Detective"],
  },
  {
    text: "delete * from <table>;",
    personalities: ["The Cleanup Commander", "The Flash"],
  },
  {
    text: "Tested directly in production",
    personalities: ["The Flash", "The Firefighter"],
  },
  {
    text: "Can't attend the meeting - busy debugging 🔍",
    personalities: ["The Detective", "The Firefighter"],
  },
  {
    text: "Refactored mid-sprint “just a bit”",
    personalities: ["The Cleanup Commander", "The Guardian", "The Explorer"],
  },
  {
    text: "Ran terraform apply without plan",
    personalities: ["The Flash", "The Automator"],
  },
  {
    text: "Found the root cause buried five log files deep",
    personalities: ["The Detective", "The Firefighter"],
  },
  {
    text: "Committed a secret in logs/repo",
    personalities: [],
  },
  {
    text: "Tuned CI/CD for 5-second savings",
    personalities: ["The Automator", "The Flash"],
  },
  {
    text: "Set up a new monitoring alert",
    personalities: ["The Automator", "The Guardian"],
  },
  {
    text: "Refused to skip code review",
    personalities: ["The Guardian"],
  },
  {
    text: "Cleaned up a forgotten script lurking in production",
    personalities: ["The Cleanup Commander", "The Detective"],
  },
  {
    text: "Implemented a zero-downtime deployment during peak hours",
    personalities: ["The Flash", "The Guardian"],
  },
  {
    text: "Cloud Bill Induced Jaw Drop 💸",
    personalities: ["The Automator", "The Guardian", "The Cleanup Commander"],
  },
  {
    text: "Experienced the Auto-Scaling Apocalypse 🏰",
    personalities: ["The Automator", "The Detective"],
  },
  {
    text: "Helped with a compliance audit",
    personalities: ["The Guardian", "The Cleanup Commander"],
  },
  {
    text: "The ‘Quick Fix’ That Snowballed",
    personalities: [],
  },
  {
    text: "Discovered a bug that only shows up under the full moon",
    personalities: ["The Explorer", "The Detective"],
  },
  {
    text: "Always on-call, ready to jump in for any incident",
    personalities: ["The Firefighter", "The Guardian"],
  },
  {
    text: "Missed deadline due to deployment issues",
    personalities: [],
  },
  {
    text: "Experienced the False Alarm Frenzy",
    personalities: [],
  },
  {
    text: "It's just a one line change",
    personalities: ["The Flash", "The Automator"],
  },
];

const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [personality, setPersonality] = useState(null);

  const handleCardSelect = (text) => {
    setSelectedCards((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  };

  const handleSubmit = () => {
    const personalityCounts = {};
    selectedCards.forEach((cardText) => {
      const card = cards.find((item) => item.text === cardText);
      card.personalities.forEach((personality) => {
        personalityCounts[personality] =
          (personalityCounts[personality] || 0) + 1;
      });
    });

    if (Object.keys(personalityCounts).length < 1)
      return setPersonality("No Personality!", 0);

    const topPersonality = Object.keys(personalityCounts)?.reduce((a, b) =>
      personalityCounts[a] > personalityCounts[b] ? a : b
    );

    setPersonality(topPersonality);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="/kapstan-icon.png" alt="Kapstan logo" />
        <h1>
          DevOps Bingo <span>2024</span>
        </h1>
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
