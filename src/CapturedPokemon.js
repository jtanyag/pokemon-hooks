import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const CapturedPokemon = () => {
  const { capturedPokemon, release } = useContext(PokemonContext);

  return (
    <div className='captured-pokemon'>
      <h1>Captured Pokemon:</h1>
      <div className='list'>
        {capturedPokemon.length === 0 ? <p>You haven't caught any pokemon yet...</p> : capturedPokemon.map(pokemon => {
          const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          const pokemonNumber = pokemon.url.slice(34, -1);

          return (
            <div className='list-item' key={pokemon.name}>
              <p>{pokemonNumber}. {pokemonName}</p>
              <img className='pokemon-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={pokemonName} />
              <button onClick={release(pokemon)}>Bye bye, {pokemonName}</button>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default CapturedPokemon;