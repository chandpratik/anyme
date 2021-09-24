import {
  FETCH_AIRING_ANIME_START,
  FETCH_AIRING_ANIME_SUCCESS,
  FETCH_AIRING_ANIME_FAILURE,
} from './airingAnimeTypes';

export const fetchAiringAnimeStart = () => {
  return {
    type: FETCH_AIRING_ANIME_START,
  };
};

export const fetchAiringAnimeSuccess = airingAnime => {
  return {
    type: FETCH_AIRING_ANIME_SUCCESS,
    payload: airingAnime,
  };
};

export const fetchAiringAnimeFailure = errorMessage => {
  return {
    type: FETCH_AIRING_ANIME_FAILURE,
    payload: errorMessage,
  };
};
