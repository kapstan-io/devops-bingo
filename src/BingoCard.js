import React from 'react';

const BingoCard = ({ text, selected, onSelect }) => {
  return (
    <div
      className={`bingo-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(text)}
    >
      {text}
    </div>
  );
};

export default BingoCard;