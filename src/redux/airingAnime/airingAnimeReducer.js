import {
  FETCH_AIRING_ANIME_START,
  FETCH_AIRING_ANIME_SUCCESS,
  FETCH_AIRING_ANIME_FAILURE,
} from './airingAnimeTypes';

const initialState = {
  airingAnime: null,
  loading: true,
  errorMessage: null,
};

const airingAnimeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_AIRING_ANIME_START:
      return { ...state, loading: true };
    case FETCH_AIRING_ANIME_SUCCESS:
      return { ...state, airingAnime: payload, loading: false };
    case FETCH_AIRING_ANIME_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default airingAnimeReducer;
