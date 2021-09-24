import React from 'react';
import { CardGrid } from '../components';
import useFetch from '../hooks/useFetch';
export const Popular = ({ match }) => {
  const { response, loading, error } = useFetch(
    `https://api.jikan.moe/v3/top/anime/1/${match.params.type}`
  );
  const data = response?.data.top;
  const type = match.params.type.toUpperCase();
  const message = error?.message;

  return (
    <CardGrid
      cardListTitle={type ? `POPULAR ${type}` : 'Search Results'}
      response={data}
      loading={loading}
      error={message}
    />
  );
};
