import './Pokemon.css';
import React from 'react';

const Pokemon = ({ pokemon, onSelectPokemon }) => {
  return (
    <div className="pokemon ui card" onClick={() => onSelectPokemon(pokemon)}>
      <div className="image-container">
        <img src={pokemon.sprite} alt={pokemon.name} />
      </div>
      <div className="content">
        <div className="meta">
          <p>#{pokemon.id}</p>
        </div>
        <p className="header" href="#">
          {pokemon.name}
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
