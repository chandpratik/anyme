import React, { useState } from 'react';
import { CardGrid, CardList, SearchBar } from '../components';
import useFetch from '../hooks/useFetch';

export const Home = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const { response: upcoming, loading: upcomingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/upcoming',
    false
  );
  const { response: airing, loading: airingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/airing',
    false
  );
  const { response: allTime, loading: allTimeLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/tv',
    false
  );
  const { response: movies, loading: moviesLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/movie',
    false
  );

  return (
    <>
      <SearchBar setSearchResults={setSearchResults} setLoading={setLoading} />
      {searchResults ? (
        <CardGrid
          response={searchResults}
          loading={loading}
          cardListTitle="Search Results"
        />
      ) : (
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
      )}
    </>
  );
};
