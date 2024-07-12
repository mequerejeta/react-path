import { createAction, createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
        error: null
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
      },
      failedFetch : ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, failedFetch } = pokemonSlice.actions;

export const fetchPokemons = createAction('pokemon/fetchPokemons');