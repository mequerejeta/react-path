import {configureStore} from "@reduxjs/toolkit";
import contadorReducer from '../reducers/contadorReducer';
import createSagaMiddleware from 'redux-saga';
import { pokemonSlice } from '../reducers/apiSlice';
import rootSaga from '../reducers/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		contador: contadorReducer,
		pokemons: pokemonSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(sagaMiddleware)
})

// Ejectuar saga
sagaMiddleware.run(rootSaga)


export default store;
