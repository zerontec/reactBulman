import { POKEMON_LIST_FAIL, POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS 
    } from "../actionsTypes"

const DefaultState ={

loading: false,
data: [],
errorMsg: '',
count: 0

};




const PokemonListReducer = (state = DefaultState, action) => {
switch (action.type){
case POKEMON_LIST_LOADING:
    return {
...state,
loading:true,
errorMsg: ''

    };

    case POKEMON_LIST_FAIL:
        return{
...state,
loading:false,
errorMsg: 'unable to get Pokemon'

        };


        case POKEMON_LIST_SUCCESS:
            return{

...state,
loading:false,
data:action.payload.results,
errorMsg:'',
count: action.payload.count,

            };
            default: 
return state;

};








};


export default PokemonListReducer;