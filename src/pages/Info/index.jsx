import React from 'react';
import './Info.css';
import useFetch from '../../hooks/useFetch';

export const Info = ({ match }) => {
  const { response, loading } = useFetch(
    `https://api.jikan.moe/v3/anime/${match.params.id}`,
    true
  );

  return (
    <div>
      {!loading && (
        <div className="info-outer-container">
          <div className="info-inner-container">
            <div className="info-image-container">
              <img src={response.image_url} alt="" />
            </div>
            <div className="info-box">
              <h1 className="info-title">{response.title}</h1>
              <div className="info-stats">
                <div className="stat">
                  <p>Score</p>
                  <p>{response.score ? response.score : 'No Scores'}</p>
                </div>
                <div className="stat">
                  <p>Rank</p>
                  <p>{response.rank ? response.rank : 'No Rank'}</p>
                </div>
                <div className="stat">
                  <p>Popularity</p>
                  <p>{response.popularity}</p>
                </div>
                <div className="stat">
                  <p>Members</p>
                  <p>{response.members}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-synopsis">
            <h3 className="info-synopsis-title">Synopsis</h3>
            <p className="info-synopsis-body">{response.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  );
};
