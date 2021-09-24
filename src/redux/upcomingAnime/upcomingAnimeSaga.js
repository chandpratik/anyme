import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_UPCOMING_ANIME_START } from './upcomingAnimeTypes';
import {
  fetchUpcomingAnimeSuccess,
  fetchUpcomingAnimeFailure,
} from './upcomingAnimeActions';
import { getUpcomingAnime } from '../../api/popularAnime';

export function* fetchUpcomingAnimeAsync() {
  try {
    const response = yield call(getUpcomingAnime);
    yield put(fetchUpcomingAnimeSuccess(response.data.top));
  } catch (error) {
    yield put(fetchUpcomingAnimeFailure(error.message));
  }
}

export function* fetchUpcomingAnimeStart() {
  yield takeLatest(FETCH_UPCOMING_ANIME_START, fetchUpcomingAnimeAsync);
}

export function* fetchUpcomingAnimeSaga() {
  yield all([call(fetchUpcomingAnimeStart)]);
}
