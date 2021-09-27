import React from 'react';
import './CardSkeleton.css';
export const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="card-image-skeleton" />
      <div className="card-title-skeleton" />
    </div>
  );
};
