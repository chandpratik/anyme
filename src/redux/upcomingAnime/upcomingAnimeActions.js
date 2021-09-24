import {
  FETCH_UPCOMING_ANIME_START,
  FETCH_UPCOMING_ANIME_SUCCESS,
  FETCH_UPCOMING_ANIME_FAILURE,
} from './upcomingAnimeTypes';

export const fetchUpcomingAnimeStart = () => {
  return {
    type: FETCH_UPCOMING_ANIME_START,
  };
};

export const fetchUpcomingAnimeSuccess = upcomingAnime => {
  return {
    type: FETCH_UPCOMING_ANIME_SUCCESS,
    payload: upcomingAnime,
  };
};

export const fetchUpcomingAnimeFailure = errorMessage => {
  return {
    type: FETCH_UPCOMING_ANIME_FAILURE,
    payload: errorMessage,
  };
};
