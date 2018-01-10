import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonDetails extends Component {
    renderData(){
        const poke_details = this.props.selectedPokemon;
        if(!poke_details.firstLoad){
            if(!poke_details.isLoading){
                return (
                    <div>
                        <h3>{poke_details.data.name}</h3>
                        <ul>
                            {
                                (() => {
                                    return poke_details.data.abilities.map(ability => {
                                        return <li key={ability.ability.name}> {ability.ability.name} </li>
                                    })
                                })()
                            }
                        </ul>
                    </div>
                )
            }  else return <div>Loading</div>
        } else return <div>Choose your pokemon</div>
    }

    render(){
        console.log(this.props.selectedPokemon)
        return(
            <div>
                {this.renderData()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedPokemon: state.selectedPokemon,
    }
}

export default connect(mapStateToProps)(PokemonDetails);