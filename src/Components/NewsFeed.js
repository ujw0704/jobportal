import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {newsFeed.map((news, index) => {
        return (
          <div key={index}>
            <div>
              <img src={news.urlToImage} alt="news" />
            </div>
            <h1>{news.content}</h1>
            <h1>{news.source.name}</h1>
            <h1>{news.description}</h1>
            <h1>{news.author}</h1>
            <h1>{news.title}</h1>
            <h1>{news.url}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFeed;
