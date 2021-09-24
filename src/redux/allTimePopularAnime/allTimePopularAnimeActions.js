import {
  FETCH_ALL_TIME_POPULAR_ANIME_START,
  FETCH_ALL_TIME_POPULAR_ANIME_SUCCESS,
  FETCH_ALL_TIME_POPULAR_ANIME_FAILURE,
} from './allTimePopularAnimeTypes';

export const fetchAllTimePopularAnimeStart = () => {
  return {
    type: FETCH_ALL_TIME_POPULAR_ANIME_START,
  };
};

export const fetchAllTimePopularAnimeSuccess = allTimePopularAnime => {
  return {
    type: FETCH_ALL_TIME_POPULAR_ANIME_SUCCESS,
    payload: allTimePopularAnime,
  };
};

export const fetchAllTimePopularAnimeFailure = errorMessage => {
  return {
    type: FETCH_ALL_TIME_POPULAR_ANIME_FAILURE,
    payload: errorMessage,
  };
};
