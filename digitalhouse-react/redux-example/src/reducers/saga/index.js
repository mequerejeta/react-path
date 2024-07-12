import { all } from 'redux-saga/effects';
import watchGetPokemons from './saga';

// Importa tus sagas individuales

// Saga principal que combina todas las sagas individuales
export default function* rootSaga() {
  yield all([
    watchGetPokemons(), 
  ]);
}