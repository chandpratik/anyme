import React from 'react';
import './Card.css';

const Card = ({ title, image_url }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image_url} alt="poster" />
      </div>

      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
