import React, { useEffect } from 'react';
import { connect, batch } from 'react-redux';

import { fetchUpcomingAnimeStart } from '../redux/upcomingAnime/upcomingAnimeActions';
import { fetchAiringAnimeStart } from '../redux/airingAnime/airingAnimeActions';
import { fetchAllTimePopularAnimeStart } from '../redux/allTimePopularAnime/allTimePopularAnimeActions';
import { fetchPopularAnimeMovieStart } from '../redux/popularAnimeMovie/popularAnimeMovieActions';

import { CardList, SearchBar } from '../components';

const Home = ({
  fetchUpcomingAnimeStart,
  fetchAllTimePopularAnimeStart,
  fetchAiringAnimeStart,
  fetchPopularAnimeMovieStart,
  upcomingAnime,
  airingAnime,
  allTimePopularAnime,
  popularAnimeMovie,
}) => {
  useEffect(() => {
    batch(() => {
      fetchUpcomingAnimeStart();
      fetchAllTimePopularAnimeStart();
      fetchAiringAnimeStart();
      fetchPopularAnimeMovieStart();
    });
  }, [
    fetchUpcomingAnimeStart,
    fetchAllTimePopularAnimeStart,
    fetchAiringAnimeStart,
    fetchPopularAnimeMovieStart,
  ]);

  return (
    <>
      <SearchBar />
      <CardList
        cardListTitle="POPULAR THIS SEASON"
        response={airingAnime.airingAnime}
        loading={airingAnime.loading}
        error={airingAnime.errorMessage}
        slug="airing"
      />
      <CardList
        cardListTitle="POPULAR UPCOMING"
        response={upcomingAnime.upcomingAnime}
        loading={upcomingAnime.loading}
        error={upcomingAnime.errorMessage}
        slug="upcoming"
      />
      <CardList
        cardListTitle="ALL TIME POPULAR"
        response={allTimePopularAnime.allTimePopularAnime}
        loading={allTimePopularAnime.loading}
        error={allTimePopularAnime.errorMessage}
        slug="tv"
      />
      <CardList
        cardListTitle="POPULAR ANIME MOVIE"
        response={popularAnimeMovie.popularAnimeMovie}
        loading={popularAnimeMovie.loading}
        error={popularAnimeMovie.errorMessage}
        slug="movie"
      />
    </>
  );
};

const mapStateToProps = state => ({
  upcomingAnime: state.upcomingAnime,
  airingAnime: state.airingAnime,
  allTimePopularAnime: state.allTimePopularAnime,
  popularAnimeMovie: state.popularAnimeMovie,
});

const mapDispatchToProps = dispatch => ({
  fetchUpcomingAnimeStart: () => dispatch(fetchUpcomingAnimeStart()),
  fetchAiringAnimeStart: () => dispatch(fetchAiringAnimeStart()),
  fetchAllTimePopularAnimeStart: () =>
    dispatch(fetchAllTimePopularAnimeStart()),
  fetchPopularAnimeMovieStart: () => dispatch(fetchPopularAnimeMovieStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
