import React from 'react';
import useInput from './useInput';

function UserForm() {


    const[FirstName, bindFirstName, ResetFirstName] = useInput("")
    const[LastName, bindLastName, ResetLastName] = useInput("")

    const submit = (e) =>{
        e.preventDefault()
        alert(`My Full Name is ${FirstName} ${LastName}`)
        ResetFirstName();
        ResetLastName();
    }

    return (
        <>
        <form onSubmit={submit}>
        <div className='form'>
        <label>First Name</label>
        <input type="text"
                {...bindFirstName}
        />
        
        <label>Last Name</label>
        <input type="text"
                {...bindLastName}
        />
        <button>Submit</button>
        </div>
        </form>
        </>
    )
}

export default UserForm
