import React, {useState} from 'react';

const initialState = ['google', 'yahoo']

function ObjectUseState() {
    const [persons, setPersons] = useState(initialState)
    
    const changeName = () =>{
        // persons.push('google')
        // persons.push('yahoo')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('yahoo')
        newPersons.push('google')
        setPersons(newPersons)
    }

    console.log("Array render");
    return (
        <div>
            {
                persons.map(person =>(
                    <div className='string'>{person}</div>
                ))
            }
            <button onClick={changeName} >Click</button>
        </div>
    )
}

export default ObjectUseState
