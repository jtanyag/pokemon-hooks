import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PokemonContext } from './PokemonContext';

const WildPokemon = () => {
  const { wildPokemon, capture, fetchPokemon } = useContext(PokemonContext);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(res => {
      fetchPokemon(res.data.results);
    })
  }, []);

  return (
    <div className='wild-pokemon'>
      <h1>Wild Pokemon:</h1>
      <div className='list'>
        {wildPokemon.length === 0 ? <div className='spinner-4'></div> : wildPokemon.map(pokemon => {
          const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          const pokemonNumber = pokemon.url.slice(34, -1);
        
          return (
            <div className='list-item' key={pokemon.name}>
              <p>{pokemonNumber}. {pokemonName}</p>
              <img className='pokemon-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={pokemonName} />
              <button onClick={capture(pokemon)}>Throw pokeball</button>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default WildPokemon;