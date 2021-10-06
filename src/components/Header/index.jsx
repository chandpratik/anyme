import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="app-header" onClick={handleClick}>
      <h1 className="app-header-title">Anyme</h1>
    </div>
  );
};
