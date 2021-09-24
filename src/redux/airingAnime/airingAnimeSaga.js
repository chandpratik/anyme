import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_AIRING_ANIME_START } from './airingAnimeTypes';
import {
  fetchAiringAnimeSuccess,
  fetchAiringAnimeFailure,
} from './airingAnimeActions';
import { getAiringAnime } from '../../api/popularAnime';

export function* fetchAiringAnimeAsync() {
  try {
    const response = yield call(getAiringAnime);
    yield put(fetchAiringAnimeSuccess(response.data.top));
  } catch (error) {
    yield put(fetchAiringAnimeFailure(error.message));
    console.log(error);
  }
}

export function* fetchAiringAnimeStart() {
  yield takeLatest(FETCH_AIRING_ANIME_START, fetchAiringAnimeAsync);
}

export function* fetchAiringAnimeSaga() {
  yield all([call(fetchAiringAnimeStart)]);
}
