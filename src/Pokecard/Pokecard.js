import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-identity">
          <h2>{name}</h2>
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-stats">
          <dl>
            <dt>Type:</dt> <dd>{type}</dd>
          </dl>
          <dl>
            <dt>Experience:</dt> <dd>{base_experience}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Pokecard;
