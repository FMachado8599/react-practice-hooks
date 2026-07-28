import './App.css'
import { useState } from 'react'

import type { User } from './types/users'
import { initialUsers } from './types/users'
import UserList from './components/users/UserList';
import UserForm from './components/user_form/UserForm';

export default function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [form, setForm] = useState({ name: '', email: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) return;

    const newUser: User = {
      id: users.length + 1,
      name: form.name,
      email: form.email,
    };

    setUsers((prev) => [...prev, newUser]);
    setForm({ name: '', email: '' });

  }  

  return (
    <div className="page">
      <header className="page-header">
        <h1>Usuarios</h1>
        <p>Agregá, editá o borrá usuarios de la lista.</p>
      </header>

      <UserForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      
      <UserList users={users} />
    </div>
  )
}

