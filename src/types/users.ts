export type User = {
    id: string,
    name: string,
    email: string
}

export type History = {
  previous: User[][],
  current: User[],
  next: User[][]
}
type AddAction = {
  type: 'ADD_USER',
  payload: User
}
type DeleteAction = {
  type: 'DELETE_USER',
  payload: string
}
type UndoAction = {
  type: 'UNDO'
}
type RedoAction = {
  type: 'REDO'
}
export type Action = AddAction | DeleteAction | UndoAction | RedoAction

export const initialUsers: User[] = [
  { id: '1', name: 'Ana Torres', email: 'ana@empresa.com' },
  { id: '2', name: 'Bruno Giménez', email: 'bruno.gimenez@empresa.com' },
  { id: '3', name: 'Carla Núñez', email: 'carla.nunez@empresa.com' },
]