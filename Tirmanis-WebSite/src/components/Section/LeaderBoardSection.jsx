import React, { useEffect, useState } from 'react';
import TabNavigationCard from '../molecules/TabNavigationCard';
import LeaderBoardCard from '../molecules/LeaderBoardCard';
import Table from '../molecules/Table';

const LeaderBoardSection = () => {
  const [data, setData] = useState([]);
  const [selectedGame, setSelectedGame] = useState('valo');

  useEffect(() => {
    const fetchData = async (game) => {
        const response = await fetch(`/src/assets/datas/${game}-data.json`);
        const data = await response.json();
        setData(data);
    };

    fetchData(selectedGame);
  }, [selectedGame]);

  const handleTabChange = (game) => {
    
    setSelectedGame(game);
    event.preventDefault();
  };

  return (
    <div className="container"id='leaderTable' >
      <div className="main-copy-text">
        <h1>LİDERLİK TABLOSU</h1>
      </div>
      <TabNavigationCard selectedGame={selectedGame} handleTabChange={handleTabChange} />
      <div className="table-container">
        <table className="table table-striped">
          <Table/>
          <LeaderBoardCard data={data} />
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardSection;
