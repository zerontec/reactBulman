import {createStore, applyMiddleware} from  'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import RootReducer from '../reducer/RootReducer';

export const store = createStore (


    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;