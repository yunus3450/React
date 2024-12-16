import React from 'react';
import TournamentsCard from '../molecules/TournamentsCard';

const TournamentsSection = ({ tournamentsInfo }) => (
    <div id='tournaments' className="container">
      <div className="main-copy-text">
        <h1>AÇIK TURNUVALAR</h1>
      </div>
      <div className="row">
        {tournamentsInfo.map((tournament, index) => (
          <TournamentsCard
          key={index}
          url={tournament.url}
          src={tournament.src}
          />
        ))}
      </div>
    </div>
  );
  
  export default TournamentsSection;
  