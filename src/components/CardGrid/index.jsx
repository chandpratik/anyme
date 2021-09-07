import React from 'react';
import { Card } from '../Card';

import './CardGrid.css';

export const CardGrid = ({ response, loading, cardListTitle }) => {
  return (
    <div className="cardgrid-outer-container">
      <h1 className="cardgrid-title">{cardListTitle}</h1>
      <div className="cardgrid-inner-container">
        {!loading &&
          response.map(({ title, image_url, mal_id }) => (
            <Card
              key={mal_id}
              title={title}
              image_url={image_url}
              id={mal_id}
            />
          ))}
      </div>
    </div>
  );
};
