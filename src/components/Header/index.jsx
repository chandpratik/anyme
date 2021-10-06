import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="app-header">
      <h1 className="app-header-title" onClick={handleClick}>
        Anyme
      </h1>
    </div>
  );
};
