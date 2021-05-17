import { createContext, useReducer } from 'react';
import { CAPTURE, FETCH_POKEMON, pokemonReducer, RELEASE } from './PokemonReducer';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const defaultState = {
    wildPokemon: [], 
    capturedPokemon: []
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = pokemon => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = pokemon => () => {
    dispatch({ type: RELEASE, pokemon });
  };

  const fetchPokemon = wildPokemon => {
    dispatch({ type: FETCH_POKEMON, wildPokemon });
  };

  const { wildPokemon, capturedPokemon } = state;

  const providerValue = {
    wildPokemon,
    capturedPokemon,
    capture,
    release,
    fetchPokemon
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};