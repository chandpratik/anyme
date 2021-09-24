import { all, call } from 'redux-saga/effects';

import { fetchUpcomingAnimeSaga } from './upcomingAnime/upcomingAnimeSaga';
import { fetchAiringAnimeSaga } from './airingAnime/airingAnimeSaga';
import { fetchAllTimePopularAnimeSaga } from './allTimePopularAnime/allTimePopularAnimeSaga';
import { fetchPopularAnimeMovieSaga } from './popularAnimeMovie/popularAnimeMovieSaga';

export default function* rootSaga() {
  yield all([
    call(fetchUpcomingAnimeSaga),
    call(fetchAiringAnimeSaga),
    call(fetchAllTimePopularAnimeSaga),
    call(fetchPopularAnimeMovieSaga),
  ]);
}
