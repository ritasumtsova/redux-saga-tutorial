import React from 'react';
import { useSelector } from 'react-redux';
import { newsSelector } from './store/selectors/newsSelector';
import { useDispatch } from 'react-redux';
import { getAllNews } from './store/actionCreators/news';
import NewsComp from './components/news/News';

const App: React.FC = () => {
  const { latestNews, popularNews } = useSelector(newsSelector);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getAllNews());
  };

  return(
    <div>
      <button onClick={handleNews}>Get News</button>
      <NewsComp news={latestNews} title="Latest News" />
      <NewsComp news={popularNews} title="Popular News" />
    </div>
  );
};

export default App;
