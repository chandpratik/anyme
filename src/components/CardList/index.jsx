import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = () => {
  return (
    <div className="cardlist-outer-container">
      <div className="cardlist-header">
        <h1 className="cardlist-title">Top Airing</h1>
        <p>View all</p>
      </div>
      <div class="cardlist-inner-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
