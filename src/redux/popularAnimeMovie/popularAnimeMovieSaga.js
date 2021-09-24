import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_POPULAR_ANIME_MOVIE_START } from './popularAnimeMovieTypes';
import {
  fetchPopularAnimeMovieSuccess,
  fetchPopularAnimeMovieFailure,
} from './popularAnimeMovieActions';
import { getPopularAnimeMovie } from '../../api/popularAnime';

export function* fetchAiringAnimeAsync() {
  try {
    const response = yield call(getPopularAnimeMovie);
    yield put(fetchPopularAnimeMovieSuccess(response.data.top));
  } catch (error) {
    yield put(fetchPopularAnimeMovieFailure(error.message));
    console.log(error);
  }
}

export function* fetchAiringAnimeStart() {
  yield takeLatest(FETCH_POPULAR_ANIME_MOVIE_START, fetchAiringAnimeAsync);
}

export function* fetchPopularAnimeMovieSaga() {
  yield all([call(fetchAiringAnimeStart)]);
}
