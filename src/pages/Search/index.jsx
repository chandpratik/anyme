import React from 'react';
import { useLocation } from 'react-router-dom';
import { CardGrid } from '../../components';
import useFetch from '../../hooks/useFetch';

export const Search = () => {
  const QUERY = 'https://api.jikan.moe/v3/search/anime' + useLocation().search;

  const { response, loading, error } = useFetch(QUERY);
  const errorMessage = error?.response.data.message;
  const data = response?.data.results;

  return (
    <CardGrid
      response={data}
      loading={loading}
      error={errorMessage}
      cardListTitle="Search Results"
    />
  );
};
