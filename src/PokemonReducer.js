const updateWildPokemon = (wildPokemon, capturedPokemon) => wildPokemon.filter(pokemon => pokemon !== capturedPokemon);

const capturePokemon = (pokemon, state) => ({
  wildPokemon: updateWildPokemon(state.wildPokemon, pokemon),
  capturedPokemon: [...state.capturedPokemon, pokemon]
});

const updateCapturedPokemon = (capturedPokemon, releasedPokemon) => capturedPokemon.filter(pokemon => pokemon !== releasedPokemon);

const releasePokemon = (releasedPokemon, state) => ({
  wildPokemon: [...state.wildPokemon, releasedPokemon],
  capturedPokemon: updateCapturedPokemon(state.capturedPokemon, releasedPokemon)
});

const fetchPokemon = (wildPokemon, state) => ({
  wildPokemon: wildPokemon,
  capturedPokemon: state.capturedPokemon
});

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'CAPTURE':
      return capturePokemon(action.pokemon, state);
    case 'RELEASE':
      return releasePokemon(action.pokemon, state);
    case 'FETCH_POKEMON':
      return fetchPokemon(action.wildPokemon, state);
    default:
      return state;
  }
}

export const CAPTURE = 'CAPTURE';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const RELEASE = 'RELEASE';