export default function UserForm({ form, handleChange, handleSubmit }: { form: { name: string, email: string }, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void }) {
    return (
        <section className="user-form-card" aria-labelledby="add-user-heading">
            <h2 id="add-user-heading">Agregar usuario</h2>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <input value={form.name} onChange={handleChange} id="name" name="name" type="text" placeholder="Ej: Ana Torres" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input value={form.email} onChange={handleChange} id="email" name="email" type="email" placeholder="ana@empresa.com" />
                </div>
                <button className="btn-primary">
                    Agregar
                </button>
            </form>
        </section>
    )
}