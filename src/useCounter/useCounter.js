import {useState} from 'react'

function useCounter(initialValue = 0, value) {

    const [count, setCounter] = useState(initialValue);
    const Increment = () =>{
        setCounter(count + value);
    }
    const Reset = () =>{
        setCounter(0);
    }
    const Decrement = () =>{
        setCounter(count - value);
    }
    return [count, Increment, Reset, Decrement]
}

export default useCounter
