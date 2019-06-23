import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img src={imgSrc} alt={name} />
        <div className="Pokecard-stats">
          <p>Type: {type}</p>
          <p>EXP: {base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
