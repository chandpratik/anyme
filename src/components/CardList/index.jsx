import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import './CardList.css';

export const CardList = ({ cardListTitle, loading, response, slug }) => {
  return (
    <div className="cardlist-outer-container">
      <div className="cardlist-header">
        <h1 className="cardlist-title">{cardListTitle}</h1>
        <Link to={`/popular/${slug}`}>View all</Link>
      </div>
      <div className="cardlist-inner-container">
        {!loading &&
          response
            .filter((_, idx) => idx < 5)
            .map(({ title, image_url, mal_id }) => (
              <Card key={mal_id} title={title} image_url={image_url} />
            ))}
      </div>
    </div>
  );
};
