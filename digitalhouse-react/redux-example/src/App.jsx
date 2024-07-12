import "./App.css";

import  Contador  from "./components/Contador";
import { Pokemons } from './components/Pokemons';
import {Provider} from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					{/* <h1>React + Redux</h1> */}
				<Contador/>
					{/* <ShoppingCart /> */}
				<Pokemons />
				</header>
			</div>
		</Provider>
	);
}

export default App;