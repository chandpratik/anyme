import React from 'react';
import { Card } from '../Card';
import { Spinner } from '../Spinner';

import './CardGrid.css';

export const CardGrid = ({ response, loading, cardListTitle, error }) => {
  if (loading) return <Spinner />;
  if (error)
    return (
      <div className="error-box">
        <p>{error}</p>
      </div>
    );
  return (
    <div className="cardgrid-outer-container">
      <h1 className="cardgrid-title">{cardListTitle}</h1>
      <div className="cardgrid-inner-container">
        {response &&
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
