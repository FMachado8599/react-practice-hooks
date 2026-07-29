import { initialUsers } from '../types/users'
import type { History, Action } from '../types/users'

export function historyReducer(state: History, action: Action): History {

    const anterior = state.previous[state.previous.length - 1]
    const nuevoPrevious = state.previous.slice(0, -1)

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
    case 'UNDO':
        if (state.previous.length === 0) return state
      return {
        ...state,
        next: [...state.next, state.current],
        current: state.previous.pop() || [],
      };
    case 'REDO':
        if (state.next.length === 0) return state
      return {
        ...state,
        previous: [...state.previous, state.current],
        current: state.next.pop() || [],
      };
    default:
      return state;
  }
}