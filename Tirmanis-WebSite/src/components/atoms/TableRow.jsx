import React from 'react';

const defaultTeamLogo = 'src/assets/img/favicon.svg'

const TableRow = ({ index, team }) => {
    const logoUrl = team["Takım Logo Url"] ? team["Takım Logo Url"] : defaultTeamLogo;
  
    return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className='team-container'>
        <img src={logoUrl} alt={team} className='team-logo' />
          <span>{team["Takım Adı"]}</span>
        </div>
      </td>
      <td>{team["Top. Klasman 1"]}</td>
      <td>{team["Top. Klasman 2"]}</td>
      <td>{team["Top. Klasman 3"]}</td>
      <td>{team["TOPLAM"]}</td>
    </tr>
  );
};

export default TableRow;
