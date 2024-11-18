import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div>
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
    </div>
  );
};

export default StarshipCard;
      