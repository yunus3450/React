import React, { useEffect, useState } from 'react';
import GamesSection from './Section/GameSection';
import TournamentsSection from './Section/TournamentsSection';
import LeaderBoardSection from './Section/LeaderBoardSection';
import NewsSection from './Section/NewsSection';
import FaqSection from './Section/FaqSection';

const Main = () => {
  const[gamesInfo, setGamesInfo] = useState([])
  const [newsData, setNewsData] = useState([]);
  const [tournamentsData, setTournamentsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [gamesResponse,newsResponse, tournamentsResponse] = await Promise.all([
        fetch('/data/games-info.json'),
        fetch('/data/news-data.json'),
        fetch('/data/tournaments-data.json')
 ])
       
      const gamesInfo = await gamesResponse.json();
      const newsData = await newsResponse.json();
      const tournamentsData = await tournamentsResponse.json();
      
      setGamesInfo(gamesInfo);
      setNewsData(newsData);
      setTournamentsData(tournamentsData);

    }
    fetchData()
  },[])
  

 

  return (
    <div className='container'>
      <div className='container main-container'>
        <img src="src/assets/img/promo-image.png" alt="tirmanis-serisi-promo-image" />
      </div>
      <div>
        <span className="main-copy-text">
          ZAFER İÇİN YARIŞ, BÜYÜK ÖDÜL HAVUZUNDAN PAY KAP VE YEREL LİGLERDE
          MÜCADELE ETME FIRSATI YAKALA!
        </span>
      </div>
      
      <GamesSection gamesInfo={gamesInfo} />
      <TournamentsSection tournamentsInfo={tournamentsData} />
      <LeaderBoardSection/>
      <NewsSection data={newsData}/>
      <FaqSection/>   
    </div>
  );
};



export default Main