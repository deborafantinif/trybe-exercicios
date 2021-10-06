import React from "react";
import Pokemon from "./Pokemon";
import data from './data';

class Pokedex extends React.Component {
  render() {
    return <div>
      <h1 className='title'>Pokedex</h1>

      <div className='container'>
        {data.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </div>
  }
}

export default Pokedex;