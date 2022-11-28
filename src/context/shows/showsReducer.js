import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
  CLEAR_STATE,
} from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
        loading: false,
      };
    case CLEAR_SINGLE_SHOW:
      return {
        ...state,
        singleShow: {},
      };
      case CLEAR_STATE:
        return {
          ...state,
          shows:[]
        }
    default:
      return state;
  }
};

export default showsReducer;
