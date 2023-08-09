import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, []); 
  return (
    <div className="App">
      <h3>React News Feed</h3>
      {news.map((n,i)=> (<p key={i}>{n.title}</p>))}
    </div>
  );
}

export default App;
