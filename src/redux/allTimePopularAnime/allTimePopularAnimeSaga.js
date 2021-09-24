import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_ALL_TIME_POPULAR_ANIME_START } from './allTimePopularAnimeTypes';
import {
  fetchAllTimePopularAnimeSuccess,
  fetchAllTimePopularAnimeFailure,
} from './allTimePopularAnimeActions';
import { getAllTimePopularAnime } from '../../api/popularAnime';

export function* fetchAllTimePopularAnimeAsync() {
  try {
    const response = yield call(getAllTimePopularAnime);
    yield put(fetchAllTimePopularAnimeSuccess(response.data.top));
  } catch (error) {
    yield put(fetchAllTimePopularAnimeFailure(error.message));
    console.log(error);
  }
}

export function* fetchAllTimePopularAnimeStart() {
  yield takeLatest(
    FETCH_ALL_TIME_POPULAR_ANIME_START,
    fetchAllTimePopularAnimeAsync
  );
}

export function* fetchAllTimePopularAnimeSaga() {
  yield all([call(fetchAllTimePopularAnimeStart)]);
}
