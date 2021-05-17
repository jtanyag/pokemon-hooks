import React from 'react';
import WildPokemon from './WildPokemon';
import CapturedPokemon from './CapturedPokemon';
import { PokemonContextProvider } from './PokemonContext';
import './App.css';

function App() {
  return (
    <PokemonContextProvider>
      <div className='app'>
        <WildPokemon />
        <CapturedPokemon />
      </div>
    </PokemonContextProvider>
  );
};

export default App;