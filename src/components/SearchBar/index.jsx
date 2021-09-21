import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SearchBar.css';
import {
  genreParams,
  orderParam,
  sortParam,
  ratingParam,
} from '../../constant/filterParam';
import {
  setGenre,
  setSortBy,
  setOrderBy,
  setRating,
} from '../../redux/searchParams/searchParamsActions';
import { SearchParam } from '../SearchParam';

export const SearchBar = ({ setSearchResults, setLoading }) => {
  const genre = useSelector(state => state.searchParam.genre);
  const orderBy = useSelector(state => state.searchParam.orderBy);
  const sortBy = useSelector(state => state.searchParam.sortBy);
  const rating = useSelector(state => state.searchParam.rating);

  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleClick = (value, queryParam, action) => {
    dispatch(action(value, queryParam));
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
          genre.queryParam !== '' ? `&genre=${genre.queryParam}` : ''
        }${orderBy.queryParam !== '' ? `&order_by=${orderBy.queryParam}` : ''}${
          sortBy.queryParam !== '' ? `&sort=${sortBy.queryParam}` : ''
        }${rating.queryParam !== '' ? `&rated=${rating.queryParam}` : ''}`
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
          data={genre}
          action={setGenre}
        />
        <SearchParam
          genre={orderParam}
          handleClick={handleClick}
          title="Order By"
          data={orderBy}
          action={setOrderBy}
        />
        <SearchParam
          genre={sortParam}
          handleClick={handleClick}
          title="Sort"
          data={sortBy}
          action={setSortBy}
        />
        <SearchParam
          genre={ratingParam}
          handleClick={handleClick}
          title="Rated"
          data={rating}
          action={setRating}
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
