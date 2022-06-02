import { setNews, setPopularNews } from './../actionCreators/news';
import { News } from './../../types/store/generalInterfaces';
import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { newsTypes } from '../actionTypes/newsActionTypes';
import { getLatestNews, getPopularNews } from '../../api/news';

export function* handleLatesNews() {
  try {
    const { hits }: News = yield call(getLatestNews, 'react');
    yield put(setNews(hits));
  } catch {
   yield put({
    type: newsTypes.SET_NEWS_ERROR,
    payload: 'can`t get latest news'
  });
  }
}

export function* handlePopularNews() {
  try {
    const { hits }: News = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch {
   yield put({
    type: newsTypes.SET_POPULAR_NEWS_ERROR,
    payload: 'can`t get popular news'
  });
  }
}

export function* handleAllNews() {
  yield fork(handleLatesNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(newsTypes.GET_ALL_NEWS, handleAllNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}