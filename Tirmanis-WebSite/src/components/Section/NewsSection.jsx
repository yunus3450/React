// import React from 'react'
// import NewsCard from '../molecules/NewsCard'

// const NewsSection = ({data}) => {
//   return (
//     <div id="news" className="container">
//     <div className="main-copy-text">
//         <h1>HABERLER</h1>
//       </div>
//     <div className="row">
//       {data.map((news, index) => (
//         <NewsCard
//           key={index}
//           src={news.src}
//           href={news.href}
//           date={news.date}
//           title={news.title}
//         />
//       ))}
//     </div>
//   </div>
//   )
// }

// export default NewsSection
// src/components/NewsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../molecules/NewsCard';

const NewsSection = ({ data }) => {
  return (
    <div id="news" className="container">
      <div className="main-copy-text">
        <h1>HABERLER</h1>
      </div>
      <div className="row">
        {data.map((news, index) => (
          
            
              <NewsCard
                key={index}
                href={news.href}
                src={news.src}
                date={news.date}
                title={news.title}
              />
            
          
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
