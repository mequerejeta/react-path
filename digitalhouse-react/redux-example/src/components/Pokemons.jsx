import { useDispatch, useSelector } from 'react-redux'
export const  Pokemons = () => {

    const {isLoading, pokemons = [], page, error } = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    useEffect(() => {
        
       dispatch(getPokemons())
    }, []);
    return(
        <div>
            <h1>Pokemons</h1>
            {error && <p>Algo a salido mal</p>}
            {isLoading && <p>Cargando ....</p> }
            <div>
                {pokemons.map((pokemon) => (
                   <p key={pokemon.name}>{pokemon.name}</p> 
                ))}
            </div>
            <button onClick = {() => dispatch(getPokemons(page))}>
                Next Page
            </button>
        </div>
    )
}