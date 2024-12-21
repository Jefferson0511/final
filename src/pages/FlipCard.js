import React, { useState } from "react";
import "./FlipCard.css"; // FlipCard specific CSS

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        {/* Front of the card */}
        <div className="flip-card-front">
          <h2>Front of the Card</h2>
          <p>This is the front of the card with some dummy data.</p>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back">
          <h2>Back of the Card</h2>
          <p>This is the back of the card with more dummy data.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
