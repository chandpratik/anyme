import React from 'react';
import './SearchParam.css';

export const SearchParam = ({ title, genre, handleClick, data, action }) => {
  return (
    <div className="search-param">
      <div className="search-param-title">{title}</div>
      <input className="search-param-input" type="text" value={data.value} />
      <div className="search-dropdown">
        <ul>
          {genre.map(({ id, value, queryParam }) => (
            <li onClick={() => handleClick(value, queryParam, action)} key={id}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
