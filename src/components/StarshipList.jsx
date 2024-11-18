import React from 'react';
import Starship from './Starship';

const StarshipList = ({ starships }) => {
  return (
    <div>
      {starships.map((starship,index) => (
        <Starship key={index} starship={starship} />
      ))}
      </div>
  );
};

 export default StarshipList;