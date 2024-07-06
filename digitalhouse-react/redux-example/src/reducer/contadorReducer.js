import {DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET} from "../types";

// Initial State
const initialState = {
  contador: 0,
}

// Reducer
export default function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        contador: state.contador + 1,
      }
    }
    case INCREMENT_5: {
      return {
        ...state,
        contador: state.contador + action.payload,
      }
    }
    case DECREMENT: {
      return {
        ...state,
        contador: state.contador - 1,
      }
    }
    case DECREMENT_5: {
      return {
        ...state,
        contador: state.contador - action.payload,
      }
    }
    case RESET: {
      return {
        ...state,
        contador: 0,
      }
    }
    default:
      return state
  }
}