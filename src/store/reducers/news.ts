import { actionType } from '../../types/store/actionType';
import { NewsInitState } from '../../types/store/initStateInterfaces';
import { newsTypes } from '../actionTypes/newsActionTypes';

const initState: NewsInitState = {
  latestNews: [],
  popularNews: []
};

const newsReducer = (state: NewsInitState = initState, action: actionType) => {
  switch(action.type) {
    case newsTypes.SET_NEWS: 
      return {
        ...state,
        latestNews: action.payload
      }

    case newsTypes.SET_POPULAR_NEWS: 
      return {
        ...state,
        popularNews: action.payload
      }

    default:
      return state;
  }
};

export default newsReducer;
