import {
  SET_GENRE,
  SET_SORT_BY,
  SET_ORDER_BY,
  SET_RATING,
} from './searchParamsTypes';

const initialState = {
  genre: {
    value: '',
    queryParam: '',
  },
  orderBy: {
    value: '',
    queryParam: '',
  },
  sortBy: {
    value: '',
    queryParam: '',
  },
  rating: {
    value: '',
    queryParam: '',
  },
};

const searchParamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_ORDER_BY:
      return {
        ...state,
        orderBy: action.payload,
      };

    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export default searchParamReducer;
