import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from '../Pokedex/Pokedex';

let hand1 = [];
let hand2 = [];
let team1Exp = 0;
let team2Exp = 0;

function assignTeams(array) {
  for (let i = 0; i < array.length; i++) {
    let team = Math.floor(Math.random() * 2) + 1;
    if ((team == 1 && hand1.length < 4) || hand2.length == 4) {
      hand1.push(array[i]);
      team1Exp += array[i].base_experience;
    } else if ((team == 2 && hand2.length < 4) || hand1.length == 4) {
      hand2.push(array[i]);
      team2Exp += array[i].base_experience;
    }
  }
}

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };

  render() {
    assignTeams(this.props.pokemons);

    return (
      <div className="Pokegame">
        <h1 className="Pokegame-title">Pokedex</h1>
        <Pokedex
          team={hand1}
          totalExp={team1Exp}
          isWinner={team1Exp > team2Exp}
        />
        <Pokedex
          team={hand2}
          totalExp={team2Exp}
          isWinner={team2Exp > team1Exp}
        />
      </div>
    );
  }
}

export default Pokegame;
