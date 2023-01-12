import './PokemonList.css';
import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemons, onSelectPokemon }) => {
  const renderedList = pokemons.map((pokemon) => (
    <Pokemon
      key={pokemon.id}
      pokemon={pokemon}
      onSelectPokemon={onSelectPokemon}
    />
  ));

  return <div className="pokemon-list">{renderedList}</div>;
};

export default PokemonList;
