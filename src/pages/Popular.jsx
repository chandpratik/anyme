import React from 'react';
import { CardGrid } from '../components';
import useFetch from '../hooks/useFetch';
export const Popular = ({ match }) => {
  const { response, loading } = useFetch(
    `https://api.jikan.moe/v3/top/anime/1/${match.params.type}`,
    false
  );
  return (
    <div>
      <CardGrid
        cardListTitle={`POPULAR ${match.params.type.toUpperCase()}`}
        response={response}
        loading={loading}
      />
    </div>
  );
};
