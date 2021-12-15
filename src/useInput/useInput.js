import {useState} from 'react'

function useInput(initialState) {
    const [state, setState] = useState(initialState)

    const reset = ()=>{
        setState(initialState)
    }
    const bind = {
        value: state,
        onChange: e =>{
            setState(e.target.value)
        }
    }
    return[state, bind, reset]
}
export default useInput;