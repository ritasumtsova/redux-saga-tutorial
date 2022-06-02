import { APieceOfNews } from './../../types/store/generalInterfaces';
import { actionType } from '../../types/store/actionType';
import { newsTypes } from '../actionTypes/newsActionTypes';

export const getAllNews = (): actionType => {
  return {
    type: newsTypes.GET_ALL_NEWS,
  }
};

export const setNews = (news: APieceOfNews[]) => {
  return {
  type: newsTypes.SET_NEWS,
  payload: news
  };
};

export const setPopularNews = (news: APieceOfNews[]) => {
  return {
    type: newsTypes.SET_POPULAR_NEWS,
    payload: news
  };
};
