import './PokemonDetail.css';
import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading pokemon data...</div>;
  }

  return (
    <div className="card">
      <div className="pokemon">
        <h1 className="pokemon__name">{pokemon.name}</h1>

        <div className="pokemon__img-section">
          <p className="pokemon__id">#{pokemon.id}</p>

          <img src={pokemon.pokemonImg} alt={pokemon.name} />
        </div>
      </div>

      <div className="stats">
        <div className="stats__height">
          <p className="muted">Height</p>
          <h3 className="item">{pokemon.height}</h3>
        </div>
        <div className="stats__weight">
          <p className="muted">Weight</p>
          <h3 className="item">{pokemon.weight}</h3>
        </div>
        <div className="stats__order">
          <p className="muted">Order</p>
          <h3 className="item">{pokemon.order}</h3>
        </div>
      </div>

      <div className="more__stats">
        <div className="types-abilities">
          <div className="base-xp">
            <h3>Base Experience</h3>
            <div>
              <p>{pokemon.base_experience}XP</p>
            </div>
          </div>
        </div>

        <div className="base-stats">
          <div className="stat">
            <p>
              <span className="muted"> HP </span>
              <span> {pokemon.usefulStats.hp}% </span>
            </p>

            <progress
              id="hp"
              max="100"
              value={pokemon.usefulStats.hp}
            ></progress>
          </div>

          <div className="stat">
            <p>
              <span className="muted"> Attack </span>
              <span> {pokemon.usefulStats.attack}% </span>
            </p>

            <progress
              id="attack"
              max="100"
              value={pokemon.usefulStats.attack}
            ></progress>
          </div>

          <div className="stat">
            <p>
              <span className="muted"> Defense </span>
              <span> {pokemon.usefulStats.defense}% </span>
            </p>

            <progress
              id="defense"
              max="100"
              value={pokemon.usefulStats.defense}
            ></progress>
          </div>

          <div className="stat">
            <p>
              <span className="muted"> Speed </span>
              <span> {pokemon.usefulStats.speed}% </span>
            </p>

            <progress
              id="speed"
              value={pokemon.usefulStats.speed}
              max="100"
            ></progress>
          </div>

          <div className="stat">
            <p>
              <span className="muted"> Special Attack </span>
              <span> {pokemon.usefulStats.specialAttack}% </span>
            </p>

            <progress
              id="specialAttack"
              max="100"
              value={pokemon.usefulStats.specialAttack}
            ></progress>
          </div>

          <div className="stat">
            <p>
              <span className="muted"> Special Defense </span>
              <span> {pokemon.usefulStats.specialDefense}% </span>
            </p>

            <progress
              id="specialDefense"
              max="100"
              value={pokemon.usefulStats.specialDefense}
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
