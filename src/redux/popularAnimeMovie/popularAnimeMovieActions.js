import {
  FETCH_POPULAR_ANIME_MOVIE_START,
  FETCH_POPULAR_ANIME_MOVIE_SUCCESS,
  FETCH_POPULAR_ANIME_MOVIE_FAILURE,
} from './popularAnimeMovieTypes';

export const fetchPopularAnimeMovieStart = () => {
  return {
    type: FETCH_POPULAR_ANIME_MOVIE_START,
  };
};

export const fetchPopularAnimeMovieSuccess = popularAnimeMovie => {
  return {
    type: FETCH_POPULAR_ANIME_MOVIE_SUCCESS,
    payload: popularAnimeMovie,
  };
};

export const fetchPopularAnimeMovieFailure = errorMessage => {
  return {
    type: FETCH_POPULAR_ANIME_MOVIE_FAILURE,
    payload: errorMessage,
  };
};
