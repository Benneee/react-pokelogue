import React from 'react';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import pokemondata from '../api/pokemondata';
import {
  imageUrl,
  getPokemonId,
  buildUpPokemonDetails,
} from '../api/pokemonhelpers';

class App extends React.Component {
  state = { pokemons: [], selectedPokemon: null, errorMessage: null };

  componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = async () => {
    const response = await pokemondata.get('/pokemon/');

    if (response.status === 200) {
      const data = response.data.results;
      const pokemons = data.map((pokemon) => {
        return {
          name: pokemon.name,
          id: getPokemonId(pokemon.url),
          sprite: `${imageUrl}${getPokemonId(pokemon.url)}.png`,
        };
      });
      this.setSelectedPokemon(pokemons[0]);
      this.setState({ pokemons: pokemons, errorMessage: null });
    }
  };

  setSelectedPokemon = async (pokemon) => {
    const response = await pokemondata.get(`/pokemon/${pokemon.id}`);

    if (response.status === 200) {
      const pokemonDetails = buildUpPokemonDetails(response.data);
      this.setState({ selectedPokemon: pokemonDetails, errorMessage: null });
    }
  };

  findPokemon = async (query) => {
    try {
      const response = await pokemondata.get(`/pokemon/${query.toLowerCase()}`);
      const pokemonDetails = buildUpPokemonDetails(response.data);
      this.setState({ selectedPokemon: pokemonDetails, errorMessage: null });
    } catch (error) {
      this.setState({ errorMessage: 'Pokemon not found' });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onQuerySubmitted={this.findPokemon} />
        <p style={{ marginTop: '10px', color: 'red' }}>
          {this.state.errorMessage}
        </p>
        <div className="ui grid stackable">
          <div className="ui row">
            <div className="ten wide column">
              <PokemonList
                pokemons={this.state.pokemons}
                onSelectPokemon={this.setSelectedPokemon}
              />
            </div>
            <div className="six wide column">
              <PokemonDetail pokemon={this.state.selectedPokemon} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
