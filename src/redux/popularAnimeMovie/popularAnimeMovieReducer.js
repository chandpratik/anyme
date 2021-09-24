import {
  FETCH_POPULAR_ANIME_MOVIE_START,
  FETCH_POPULAR_ANIME_MOVIE_SUCCESS,
  FETCH_POPULAR_ANIME_MOVIE_FAILURE,
} from './popularAnimeMovieTypes';

const initialState = {
  popularAnimeMovie: null,
  loading: true,
  errorMessage: null,
};

const popularAnimeMovieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POPULAR_ANIME_MOVIE_START:
      return { ...state, loading: true };
    case FETCH_POPULAR_ANIME_MOVIE_SUCCESS:
      return { ...state, popularAnimeMovie: payload, loading: false };
    case FETCH_POPULAR_ANIME_MOVIE_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default popularAnimeMovieReducer;
