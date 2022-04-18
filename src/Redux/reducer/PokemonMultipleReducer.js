import {
  POKEMON_MULTIPLE_FAIL,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
} from "../actionsTypes";

const DefualtState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonMultiplereducer = (state = DefualtState, action) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon",
      };

    case POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        date: {
          ...state.date,
          [action.pokemonName]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PokemonMultiplereducer;
