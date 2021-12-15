import React, {useState} from 'react';

const initialState = {
    fname: 'yahoo',
    lname: 'google',
}

function ObjectUseState() {
    const [person, setPerson] = useState(initialState)
    const nameChange = () =>{   
        // person.fname = 'google'
        // person.lname = 'yahoo'
        // setPerson(person);
        // console.log(person);
        const newPerson = {...person}
        newPerson.fname = 'google'
        newPerson.lname = 'yahoo'
        setPerson(newPerson);
    }

    console.log("object render");
    return (
        <div>
            <button onClick={nameChange} >{person.fname}  {person.lname}</button>
        </div>
    )
}

export default ObjectUseState
