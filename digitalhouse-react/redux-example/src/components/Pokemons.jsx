import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchPokemons } from '../reducers/apiSlice';

// import { getPokemons } from '../reducers/thunk/thunk';


export const Pokemons = () => {

  const [localPage, setLocalPage] = useState(0);

  const dispatch = useDispatch();
  const { isLoading, pokemons = [] } = useSelector(state => state.pokemons);
  
  console.log(pokemons);
  useEffect(() => {
    dispatch( fetchPokemons(localPage) );    
  }, [localPage])

  return (
    <>
        <h1>Pokemons</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
          {
            pokemons.map( ({ name }) => (
              <li key={ name }>{ name }</li>
            ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={() => setLocalPage(localPage + 1)}
        >
          Next
        </button>
    </>
  )
}