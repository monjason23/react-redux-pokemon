import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPokemons, selectPokemon } from '../actions';

class PokemonList extends Component {

    componentDidMount(){
        this.props.fetchPokemons();
    }

    renderList(){
        const poke_list = this.props.pokemons.data;
        if(!this.props.pokemons.isLoading)
        {
            return poke_list.results.map(pokemon => {
                return <li 
                    className="list-group-item"
                    onClick={()=>{this.props.selectPokemon(poke_list.results.indexOf(pokemon))}}
                    key={pokemon.name}>{pokemon.name}</li>
            })
        } else return <li>Loading</li>
    }

    render(){
        if(!this.props.pokemons.isLoading){
            console.log(this.props.pokemons.data)
        }
        
        return(
            <div className="pokemon-list">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pokemons: state.pokemons,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPokemon, fetchPokemons}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);