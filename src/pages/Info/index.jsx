import React from 'react';
import './Info.css';
import useFetch from '../../hooks/useFetch';

export const Info = ({ match }) => {
  const { response, loading, error } = useFetch(
    `https://api.jikan.moe/v3/anime/${match.params.id}`,
    true
  );
  if (loading) return <h1>Loading</h1>;
  if (error)
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  return (
    <div className="info-outer-container">
      <div className="info-inner-container">
        <div className="info-image-container">
          <img src={response?.data.image_url} alt="" />
        </div>
        <div className="info-box">
          <h1 className="info-title">{response?.data.title}</h1>
          <div className="info-stats">
            <div className="stat">
              <p>Score</p>
              <p>{response?.data.score ? response.data.score : 'No Scores'}</p>
            </div>
            <div className="stat">
              <p>Rank</p>
              <p>{response?.data.rank ? response.data.rank : 'No Rank'}</p>
            </div>
            <div className="stat">
              <p>Popularity</p>
              <p>{response?.data.popularity}</p>
            </div>
            <div className="stat">
              <p>Members</p>
              <p>{response?.data.members}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-synopsis">
        <h3 className="info-synopsis-title">Synopsis</h3>
        <p className="info-synopsis-body">{response?.data.synopsis}</p>
      </div>
    </div>
  );
};
