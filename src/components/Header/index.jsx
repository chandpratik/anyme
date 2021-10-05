import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="header" onClick={handleClick}>
      <h1>Anyme</h1>
    </div>
  );
};
