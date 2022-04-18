import {
  GET_POKEMON,
  POKEMON_LIST_FAIL,
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
} from "../actionsTypes";

import axios from "axios";

const Api = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_MULTIPLE_LOADING,
    });
    const res = await axios.get(`${Api}${pokemon}`);

    return dispatch({
      type: POKEMON_MULTIPLE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_MULTIPLE_FAIL,
    });
  }
};

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_LIST_LOADING,
    });

    const perPage = 9;
    const offset = page * perPage - perPage;

    const res = await axios.get(`${Api}?limit=${perPage}&offset=${offset}`);

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_LIST_FAIL,
    });
  }
};
