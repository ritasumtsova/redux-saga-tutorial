import { setNews, setPopularNews } from './../actionCreators/news';
import { News } from './../../types/store/generalInterfaces';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { newsTypes } from '../actionTypes/newsActionTypes';
import { getLatestNews, getPopularNews } from '../../api/news';

export function* handleLatesNews() {
  const { hits }: News = yield call(getLatestNews, 'react');
  yield put(setNews(hits));
}

export function* handlePopularNews() {
  const { hits }: News = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

export function* handleAllNews() {
  yield all([
    call(handleLatesNews),
    call(handlePopularNews)
  ])
}

export function* watchClickSaga() {
  yield takeEvery(newsTypes.GET_ALL_NEWS, handleAllNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}