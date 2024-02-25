import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./News.css"; 

function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=jp&apiKey=d7e090645d72445aa9b121eccdf1a1be')
      .then((response) => {
        console.log(response.data);
        setNewsFeed(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="news-feed-container">
      {newsFeed.map((news, index) => {
        return (
          <div className="news-item" key={index}>
            <div className="image-container">
              <img src={news.urlToImage} alt="news" />
            </div>
            <div className="content">
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              <span>{news.source.name}</span>
              <span>{news.author}</span>
              <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFeed;
