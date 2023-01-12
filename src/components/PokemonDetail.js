import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading pokemon data...</div>;
  }

  return <div>{pokemon.name}</div>;
};

export default PokemonDetail;
