import {
  SET_GENRE,
  SET_SORT_BY,
  SET_ORDER_BY,
  SET_RATING,
} from './searchParamsTypes';

export const setGenre = (value, queryParam) => {
  return {
    type: SET_GENRE,
    payload: { value, queryParam },
  };
};

export const setSortBy = (value, queryParam) => {
  return {
    type: SET_SORT_BY,
    payload: { value, queryParam },
  };
};

export const setOrderBy = (value, queryParam) => {
  return {
    type: SET_ORDER_BY,
    payload: { value, queryParam },
  };
};

export const setRating = (value, queryParam) => {
  return {
    type: SET_RATING,
    payload: { value, queryParam },
  };
};
