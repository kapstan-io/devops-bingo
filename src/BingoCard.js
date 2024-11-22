import React from 'react';

const BingoCard = ({ text, selected, onSelect }) => {
  return (
    <div
      className={`bingo-card`}
      onClick={() => onSelect(text)}
    >
      {selected && <span className="selected-mark" />}
      <p style={{zIndex: 1}}>{text}</p>
    </div>
  );
};

export default BingoCard;