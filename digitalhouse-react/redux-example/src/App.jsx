import './App.css'

import Contador from "./components/Contador";
import { Provider } from 'react-redux'
import store from "./store"

function App() {

  return (
    <Provider store={store}>
        <div>
          <h1>Redux Toolkit</h1>
          {<Contador/>}
        </div>
    </Provider>
  ) 
}

export default App
