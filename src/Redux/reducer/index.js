import { GET_POKEMON } from "../actionsTypes";

const initialState ={

pokemons: [],
allPokemon: []

}


function rootReducer(state = initialState, action){
switch(action.type){


case GET_POKEMON:

return{

    ...state,
    pokemons: action.payload,
    allPokemon: action.payload.results
}



default:
    return state;

};




}

export default rootReducer;
