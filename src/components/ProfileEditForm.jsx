import { useState } from 'react'
// displays all of the user's detail to be edited via form

// controlled form in that the user can choose what to edit
export default function ProfileEditForm({ handleSubmit, initialForm }) {

    const [ form, setForm ] = useState({ initialForm })

    return (
        <div>
            <form onSubmit={e => handleSubmit(e, form, setForm)}>

                <label htmlFor='name'>New Username: </label>
                <input type='text' id='name' 
                       value={form.name} 
                       onChange={e => setForm({...form, name: e.target.value})} />

                <label htmlFor='email'>New Email: </label>
                <input type='text' id='email' 
                       value={form.email} 
                       onChange={e => setForm({...form, email: e.target.value})} />

                <label htmlFor='password'>New Password: </label>
                <input type='password' id='password'
                       value={form.password} 
                       onChange={e => setForm({...form, content: e.target.value})} />
                
                <button type='submit'> Submit </button>

            </form>

        </div>
    )

}