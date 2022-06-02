import { APieceOfNews } from './generalInterfaces';
import { newsTypes } from '../../store/actionTypes/newsActionTypes';

interface SET_NEWS {
  type: newsTypes.SET_NEWS;
  payload: APieceOfNews[];
}

interface SET_POPULAR_NEWS {
  type: newsTypes.SET_POPULAR_NEWS;
  payload: APieceOfNews[]
}

interface SET_NEWS_ERROR {
  type: newsTypes.SET_NEWS_ERROR;
  payload: any;
}

interface SET_POPULAR_NEWS_ERROR {
  type: newsTypes.SET_POPULAR_NEWS_ERROR;
  payload: any
}

interface GET_ALL_NEWS {
  type: newsTypes.GET_ALL_NEWS;
}

export type actionType =
  SET_NEWS
  | SET_POPULAR_NEWS
  | GET_ALL_NEWS
  | SET_NEWS_ERROR
  | SET_POPULAR_NEWS_ERROR;