import React from 'react';
import { CardList } from '../components';
import useFetch from '../hooks/useFetch';

export const Home = () => {
  const { response: upcoming, loading: upcomingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/upcoming'
  );
  const { response: airing, loading: airingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/airing'
  );
  const { response: allTime, loading: allTimeLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/tv'
  );
  const { response: movies, loading: moviesLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/movie'
  );

  return (
    <>
      <CardList
        cardListTitle="POPULAR THIS SEASON"
        response={airing}
        loading={airingLoading}
        slug="airing"
      />
      <CardList
        cardListTitle="POPULAR UPCOMING"
        response={upcoming}
        loading={upcomingLoading}
        slug="upcoming"
      />
      <CardList
        cardListTitle="ALL TIME POPULAR"
        response={allTime}
        loading={allTimeLoading}
        slug="tv"
      />
      <CardList
        cardListTitle="ALL TIME POPULAR MOVIES"
        response={movies}
        loading={moviesLoading}
        slug="movie"
      />
    </>
  );
};
