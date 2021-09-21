import { combineReducers } from 'redux';

import searchParamReducer from './searchParams/searchParamsReducer';

const rootReducer = combineReducers({ searchParam: searchParamReducer });

export default rootReducer;
