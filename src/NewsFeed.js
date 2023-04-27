import React, { useEffect, useState } from 'react';
import './NewsFeed.css';

function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '37df8e563ca74df691fd40293f43b0b1';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="newsfeed-container">
      <h2>Top Headlines (News API)</h2>
      <div className="newsfeed-scrollable">
        {news.map((article, index) => (
          <div key={index} className="newsfeed-article">
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;