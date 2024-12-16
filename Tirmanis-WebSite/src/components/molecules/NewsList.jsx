import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/assets/datas/news-data.json");
      const data = await response.json();
      setNewsList(data.news);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Haberler</h1>
      <div className="row">
        {newsList.map((newsItem) => (
          <div className="col-md-6" key={newsItem.id}>
            <div className="card mb-4">
              <img src={newsItem.image} className="card-img-top" alt={newsItem.title} />
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.description}</p>
                <Link to={`/news/${newsItem.id}`} className="btn btn-primary">Detaylar</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
