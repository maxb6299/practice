import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const decrementCount = () => {setCount(count - 1)};
    const resetCount = () => {setCount(0)};
    const incrementCount = () => {setCount(count + 1)};

    return(
        <>
            <div>Count: {count}</div>
            <div>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
                <button onClick={incrementCount}>Increment</button>
            </div>
        </>
    )
}

export default Counter