export type User = {
    id: number,
    name: string,
    email: string
}

export const initialUsers: User[] = [
  { id: 1, name: 'Ana Torres', email: 'ana@empresa.com' },
  { id: 2, name: 'Bruno Giménez', email: 'bruno.gimenez@empresa.com' },
  { id: 3, name: 'Carla Núñez', email: 'carla.nunez@empresa.com' },
]