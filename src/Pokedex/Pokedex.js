import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { team, totalExp, isWinner } = this.props;

    const teamMembers = team.map(pokemon => (
      <Pokecard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        base_experience={pokemon.base_experience}
      />
    ));
    return (
      <div className="Pokedex">
        <h2 className={isWinner ? 'Pokedex-win' : 'Pokedex-lose'}>
          {isWinner ? 'This team wins!' : 'This team loses!'}
        </h2>
        <h3>Total Experience = {totalExp}</h3>
        <div className="Pokedex-cards">{teamMembers}</div>
      </div>
    );
  }
}

export default Pokedex;
