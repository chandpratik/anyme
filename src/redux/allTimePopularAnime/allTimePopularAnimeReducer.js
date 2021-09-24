import {
  FETCH_ALL_TIME_POPULAR_ANIME_START,
  FETCH_ALL_TIME_POPULAR_ANIME_SUCCESS,
  FETCH_ALL_TIME_POPULAR_ANIME_FAILURE,
} from './allTimePopularAnimeTypes';

const initialState = {
  allTimePopularAnime: null,
  loading: true,
  errorMessage: null,
};

const allTimePopularAnimeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_TIME_POPULAR_ANIME_START:
      return { ...state, loading: true };
    case FETCH_ALL_TIME_POPULAR_ANIME_SUCCESS:
      return { ...state, allTimePopularAnime: payload, loading: false };
    case FETCH_ALL_TIME_POPULAR_ANIME_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default allTimePopularAnimeReducer;
