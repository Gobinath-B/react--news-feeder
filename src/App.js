import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');
  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]); 
 
  const handleClick = (e)=>{
    setSearch(e.target.value);
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${search}`)
  }
  
  return (
    <div className="App">
      <h3>React News Feed</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleClick} />
        <button >search</button>
      </form>
      {news.map((n,i)=> (<p key={i}>{n.title}</p>))}
    </div>
  );
}

export default App;
