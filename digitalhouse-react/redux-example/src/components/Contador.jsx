import { decrement, decrement5, increment, increment5, reset } from '../reducer/contadorSlice';
import {useDispatch, useSelector} from "react-redux";

const Contador = () => {
	// Como acceder al estado de Redux que viene del provider
	const state = useSelector((state) => state.contador.contador); 


	// Como despacha acciones
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Contador</h2>
			<p>{state}</p>
			<nav>
				{/* <button onClick={() => dispatch(sumar5())}>+5</button>
				<button onClick={() => dispatch(sumar())}>+1</button>
				<button onClick={() => dispatch(reset())}>0</button>
				<button onClick={() => dispatch(restar())}>-1</button>
				<button onClick={() => dispatch(restar5())}>-5</button> */}
				<button onClick={()=> dispatch(increment5(5))}>+5</button> 
				<button onClick={()=> dispatch(increment())}>+1</button> 
				<button onClick={()=> dispatch(reset())}>0</button> 
				<button onClick={()=> dispatch(decrement())}>-1</button> 
				<button onClick={()=> dispatch(decrement5(5))}>-5</button> 


			</nav>
		</div>
	);
};

export default Contador;