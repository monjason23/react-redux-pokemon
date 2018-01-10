import React, { Component } from 'react';
import PokemonList from './containers/pokemon-list';
import PokemonDetails from './containers/pokemon-detail';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-4">
            <PokemonList />
          </div>
          <div className="col-8">
            <PokemonDetails />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
