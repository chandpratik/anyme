import {
  FETCH_UPCOMING_ANIME_START,
  FETCH_UPCOMING_ANIME_SUCCESS,
  FETCH_UPCOMING_ANIME_FAILURE,
} from './upcomingAnimeTypes';

const initialState = {
  upcomingAnime: null,
  loading: true,
  errorMessage: null,
};

const upcomingAnimeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_UPCOMING_ANIME_START:
      return { ...state, loading: true };
    case FETCH_UPCOMING_ANIME_SUCCESS:
      return { ...state, upcomingAnime: payload, loading: false };
    case FETCH_UPCOMING_ANIME_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default upcomingAnimeReducer;
