import { initialUsers } from '../types/users'
import type { History, Action } from '../types/users'

export function historyReducer(state: History, action: Action): History {

  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        previous: [...state.previous, state.current],
        current: [...state.current, action.payload],
        next: [],
      };
    case 'DELETE_USER':
      return {
        ...state,
        previous: [...state.previous, state.current],
        current: state.current.filter((user) => user.id !== action.payload),
        next: [],
      };
    case 'UNDO': {
      if (state.previous.length === 0) return state

      const anterior = state.previous[state.previous.length - 1]
      const nuevoPrevious = state.previous.slice(0, -1)

      return {
        previous: nuevoPrevious,
        current: anterior,
        next: [...state.next, state.current],
      };
    }
    case 'REDO': {
      if (state.next.length === 0) return state

      const siguiente = state.next[state.next.length - 1]
      const nuevoNext = state.next.slice(0, -1)

      return {
        previous: [...state.previous, state.current],
        current: siguiente,
        next: nuevoNext,
      };
    }
    default:
      return state;
  }
}