import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Layout from '../Layout';

const News = () => {
    const { gameType } = useParams(); 
    const [news, setNews] = useState(); 
      
    useEffect(() => {
        const fetchData = async () => {
            
            const response = await fetch("/src/assets/datas/news-games-data.json");
            const data = await response.json();
            const selectedNews = data[gameType]; 

            if(selectedNews){
                setNews(selectedNews); 
                }
        };
        fetchData();
    }, [gameType]);

    
     if(!news) return <div>loading</div>

    return (
      
        <Layout logo="logo" >
            <div className="section-blog-title">
                <div className="h1">{news.title}</div>
                </div>
                <div className="blog-img">
                    <img src={news.image} alt={news.title} />
                </div>
            
            
             {news.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            <p><a target="_blank" rel="noopener noreferrer" href={news.links[0].url}>{news.links[0].text}</a> Discord sunucusundan üniversite elçine ulaşabilirsin.</p>
            <p>Turnuvaya kayıt olmak için <a target="_blank" rel="noopener noreferrer" href={news.links[1].url}>{news.links[1].text}</a> tıklayın!</p>
            <p>Turnuva kural setine <a target="_blank" rel="noopener noreferrer" href={news.links[2].url}>{news.links[2].text}</a> ulaşabilirsiniz.</p>
            <p><strong>ÖNEMLİ: </strong>Tüm turnuva ve iletişim süreci <a target="_blank" rel="noopener noreferrer" href={news.links[3].url}>{news.links[3].text}</a> üzerinden ilerleyecek.</p>
            
            <ul>
                {news.prizes.map((prize, index) => (
                    <li key={index}>{prize}</li>
                ))}
            </ul>
            <p>{news.closing}</p> 
        </Layout>
        
    );
}

export default News;
