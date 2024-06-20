import React from 'react';
import './Card.css';

const Card = ({ title, sets, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-sets">{sets}</div>
      </div>
      <div className="card-arrow">&gt;</div>
    </div>
  );
};

export default Card;
