import React, { useMemo } from 'react';


const BingoCard = ({ text, selected, onSelect }) => {
  const styles = useMemo(() => {
    return {
      opacity: (Math.random() * 0.5) + 0.4,
      transform: `translate(${-5 + Math.random() * 10}%, ${-5 + Math.random() * 10}%)`,
    }
  }, []);

  return (
    <div
      className={`bingo-card`}
      onClick={() => onSelect(text)}
    >
      <span className="selected-mark" style={selected ? styles : { opacity: 0 }} />
      <p style={{ zIndex: 1 }}>{text}</p>
    </div>
  );
};

export default BingoCard;