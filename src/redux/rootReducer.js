import { combineReducers } from 'redux';

import searchParamReducer from './searchParams/searchParamsReducer';
import upcomingAnimeReducer from './upcomingAnime/upcomingAnimeReducer';
import airingAnimeReducer from './airingAnime/airingAnimeReducer';
import allTimePopularAnimeReducer from './allTimePopularAnime/allTimePopularAnimeReducer';
import popularAnimeMovieReducer from './popularAnimeMovie/popularAnimeMovieReducer';

const rootReducer = combineReducers({
  searchParam: searchParamReducer,
  upcomingAnime: upcomingAnimeReducer,
  airingAnime: airingAnimeReducer,
  allTimePopularAnime: allTimePopularAnimeReducer,
  popularAnimeMovie: popularAnimeMovieReducer,
});

export default rootReducer;
