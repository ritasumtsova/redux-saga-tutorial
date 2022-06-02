import { actionType } from '../../types/store/actionType';
import { ErrorInitState } from '../../types/store/initStateInterfaces';
import { newsTypes } from '../actionTypes/newsActionTypes';

const initState: ErrorInitState = {
  latestNewsError: '',
  popularNewsError: ''
};

const errorReducer = (state: ErrorInitState = initState, action: actionType) => {
  switch(action.type) {
    case newsTypes.SET_NEWS_ERROR: 
      return {
        ...state,
        latestNewsError: action.payload
      }

    case newsTypes.SET_POPULAR_NEWS_ERROR: 
      return {
        ...state,
        popularNewsError: action.payload
      }

    default:
      return state;
  }
};

export default errorReducer;