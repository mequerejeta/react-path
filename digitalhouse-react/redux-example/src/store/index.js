import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../reducer/contadorSlice'
import { pokemonSlice } from '../reducer/pokemonSlice';
import thunk from 'redux-thunk'

// import contadorReducer from '../reducer/contadorReducer'

const store = configureStore({
    reducer:{
        // contador : contadorReducer
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
    middleware: [thunk]
})

export default store;