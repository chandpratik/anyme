import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

export const Card = ({ title, image_url, id }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/anime/${id}/${title.replace(/ /g, '_')}`);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image-container">
        <img src={image_url} alt="poster" />
      </div>

      <p className="card-title">{title}</p>
    </div>
  );
};
