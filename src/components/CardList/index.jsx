import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = ({ cardListTitle, loading, response }) => {
  return (
    <div className="cardlist-outer-container">
      <div className="cardlist-header">
        <h1 className="cardlist-title">{cardListTitle}</h1>
        <p>View all</p>
      </div>
      <div className="cardlist-inner-container">
        {!loading &&
          response
            .filter((_, idx) => idx < 5)
            .map(({ title, image_url, mal_id }) => (
              <Card id={mal_id} title={title} image_url={image_url} />
            ))}
      </div>
    </div>
  );
};

export default CardList;
