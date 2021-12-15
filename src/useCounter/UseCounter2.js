import React from 'react';
import useCounter from './useCounter';

function UseCounter2() {
    const [count, Increment, Reset, Decrement] = useCounter(10,10);
    return (
        <>
            <h1>Number: {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default UseCounter2
