import { setPokemons, startLoadingPokemons } from '../apiSlice';

export const getPokemons = ( page = 0 ) => {
    return async( dispatch ) => {
        dispatch( startLoadingPokemons() );

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        const data = await resp.json();

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}