import {failedFetch, fetchPokemons, loadingPokemons} from '../reducer/pokemonSlice'

export const getPokemons = (page) => {
    return async(dispatch) => {
        dispatch(loadingPokemons())
        //llamada a la API para obtener datos:
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page* 10}')
            const data = await response.json()

            //colocar los datos de los pokemons en mi state: fetchPokemons
            dispatch(fetchPokemons({pokemons: data.results, page: page +1}))
        } catch (error) {
            dispatch(failedFetch({error: error.message}))
        }
    }
}
