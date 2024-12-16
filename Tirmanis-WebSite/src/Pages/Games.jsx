import Layout from '../Layout';
import TournamentsSection from '../components/Section/TournamentsSection';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import LeaderBoardCard from '../components/molecules/LeaderBoardCard';
import Table from '../components/molecules/Table';
import FaqSection from '../components/Section/FaqSection';
 
const Games = () => {
  const { game } = useParams(); 
  const [teams, setTeams] = useState([]);
  const [tournamentsData, setTournamentsData] = useState([]);
  const [promo, setPromo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
     
        const response = await fetch("/src/assets/datas/games-data.json");
        const gamesData = await response.json();
        
        const selectedGame = gamesData[game];
        if (selectedGame) {
          const teamsResponse = await fetch(`src/assets/datas/${selectedGame.dataFile}`);
          const data = await teamsResponse.json();
          
          setTeams(data);
          setPromo(selectedGame.promo);
          setTournamentsData(selectedGame.tournaments);
        }
    };
  
    fetchData();
  }, [game]);

  return (
      <Layout logo={game === "valorant" ? 'logo-red' : game === "lol" ? 'logo-yellow' : 'logo-blue'} filtered={[2, 3, 5]} >
        <div className='container main-container'>
          <img src={promo} alt={`${game} logo`} />
        </div>
        <TournamentsSection tournamentsInfo={tournamentsData} />
        <div className="container">
          <div className="main-copy-text">
            <h1>LİDERLİK TABLOSU</h1>
          </div>
          <div className="table-container">
            <table className="table table-striped">
              <Table/>
              <LeaderBoardCard data={teams} />
            </table>
          </div>
          <FaqSection/>
        </div>
      </Layout>
  );
};

export default Games;