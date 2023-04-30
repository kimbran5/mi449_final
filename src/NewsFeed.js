import React, { useEffect, useState } from 'react';
import './NewsFeed.css';

function NewsFeed() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const apiKey = 'Jr7xFi2b7aD3qhNKJ0EqGgr26aY2vLLD';
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setNews(data.results))
        .catch(error => console.log(error));
    }, []);
  
    return (
      <div className="newsfeed-container">
        <h2>Top Headlines</h2>
        <div className="newsfeed-scrollable">
          {news.map((article, index) => (
            <div key={index} className="newsfeed-article">
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default NewsFeed;
