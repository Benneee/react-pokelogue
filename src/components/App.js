import React from 'react';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import pokemondata from '../api/pokemondata';
import { imageUrl, getPokemonId } from '../api/pokemonhelpers';

class App extends React.Component {
  state = { pokemons: [] };

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

      this.setState({ pokemons: pokemons });
    }
  };

  findPokemon = (query) => {
    console.log('query!: ', query);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onQuerySubmitted={this.findPokemon} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <PokemonList pokemons={this.state.pokemons} />
            </div>
            <div className="six wide column">
              <PokemonDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
