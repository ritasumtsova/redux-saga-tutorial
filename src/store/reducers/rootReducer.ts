import { combineReducers } from 'redux';
import errorReducer from './errors';
import newsReducer from './news';

const rootReducer = combineReducers({
  news: newsReducer,
  error: errorReducer
});

export default rootReducer;