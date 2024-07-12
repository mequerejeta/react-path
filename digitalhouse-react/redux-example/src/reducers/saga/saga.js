import { call, put, takeEvery } from 'redux-saga/effects'
import { failedFetch, setPokemons, startLoadingPokemons } from '../apiSlice';

// Servicio obtener datos
const fetchPokemon = async(page = 0) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
  const data = await resp.json();
  return data;
}

// Saga para obtener datos
function* getPokemons(action) {
  const  page  = action.payload;

  try {
    // Actualizar el estado del store
    yield put(startLoadingPokemons());


    // Obtener datos de la API
    const data = yield call(fetchPokemon, page);

    // Guardar datos en el store si es exitoso
    yield put(setPokemons({ pokemons: data.results, page}));

  } catch (error) {

    // En caso de tener un error ejecuto una acción
    yield put(failedFetch({ error: error.message }));
    console.log(error);
    
  }
}

// Saga principal para observar la acción getPokemons
function* watchGetPokemons() {
  yield takeEvery('pokemon/fetchPokemons', getPokemons);
}

export default watchGetPokemons;