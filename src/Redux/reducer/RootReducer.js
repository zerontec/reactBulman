import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultiplereducer from "./PokemonMultipleReducer";


const RootReducer = combineReducers({



    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultiplereducer
});


export default RootReducer;