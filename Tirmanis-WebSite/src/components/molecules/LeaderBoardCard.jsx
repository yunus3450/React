import React from 'react';
import TableRow from '../atoms/TableRow';

const LeaderBoardCard = ({ data }) => {
  return (
    
    <tbody id='leaderTable'>
      {data.map((item, index) => (
        <TableRow
        key={index} 
        index={index}
        team={item} />
      ))}
    </tbody>
    
  );
};

export default LeaderBoardCard;
