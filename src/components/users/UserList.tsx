import type { User } from '../../types/users'
import { DeleteIcon, EditIcon } from '../../lib/icons'

export default function UserList({ users }: { users: User[] }) {
    return (

        <section className="user-list-card">
            <h2>Listado</h2>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-row">
                        <div className="user-info">
                            <span className="user-name">{user.name}</span>
                            <span className="user-email">{user.email}</span>
                        </div>
                        <div className="user-actions">
                            <button className="btn-icon" aria-label={`Editar usuario ${user.name}`}>
                                <EditIcon />
                            </button>
                            <button className="btn-icon" aria-label={`Borrar usuario ${user.name}`}>
                                <DeleteIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
