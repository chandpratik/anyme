import React, { useState } from 'react';
import './SearchBar.css';
import {
  genreParams,
  orderParam,
  sortParam,
  ratingParam,
} from '../../constant/filterParam';
import { SearchParam } from '../SearchParam';

export const SearchBar = ({ setSearchResults, setLoading }) => {
  const [input, setInput] = useState('');
  const [genreData, setGenreData] = useState({
    value: '',
  });
  const [orderData, setOrderData] = useState({
    value: '',
  });
  const [sortData, setSortData] = useState({
    value: '',
  });
  const [ratingData, setRatingData] = useState({
    value: '',
  });

  const handleClick = (value, queryParam, setData) => {
    setData({ value, queryParam });
  };

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${input}&page=1${
          genreData.value !== '' ? `&genre=${genreData.queryParam}` : ''
        }${orderData.value !== '' ? `&order_by=${orderData.queryParam}` : ''}${
          sortData.value !== '' ? `&sort=${sortData.queryParam}` : ''
        }${ratingData.value !== '' ? `&rated=${ratingData.queryParam}` : ''}`
      );
      const { results: data } = await response.json();
      console.log(data);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-outer-container">
      <div className="search-inner-container">
        <div className="search-param">
          <div className="search-param-title">Anime</div>
          <input
            className="search-param-input"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter Min 3 Characters"
          />
        </div>
        <SearchParam
          genre={genreParams}
          handleClick={handleClick}
          title="Genre"
          data={genreData}
          setData={setGenreData}
        />
        <SearchParam
          genre={orderParam}
          handleClick={handleClick}
          title="Order By"
          data={orderData}
          setData={setOrderData}
        />
        <SearchParam
          genre={sortParam}
          handleClick={handleClick}
          title="Sort"
          data={sortData}
          setData={setSortData}
        />
        <SearchParam
          genre={ratingParam}
          handleClick={handleClick}
          title="Rated"
          data={ratingData}
          setData={setRatingData}
        />
        <div className="search-button-container">
          <button className="search-button" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
