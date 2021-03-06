import React from 'react';
import { APieceOfNews } from '../../types/store/generalInterfaces';
import './News.css';

interface NewsProps {
  news: APieceOfNews[];
  title: string;
  error?: string
}

const NewsComp: React.FC<NewsProps> = ({ news, title, error }) => {
  if (!news || news.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  return(
    <div>
      <h2>{`${title}:`}</h2>
      <ul className="news-list">
        {news.map(({ objectID, url, title, points, num_comments, created_at, author}) => (
          <li key={objectID} className="news">
            <div className="description">
              <a href={url} className="news-title">{title || 'No title'}</a>
              <span className="text">{`${points || 0} points`}</span>
              <span className="comments">{`${num_comments || 0} comments`}</span>
              <span className="date">{new Date(created_at).toLocaleDateString()}</span>
              <span className="author">{author || 'no author'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComp;