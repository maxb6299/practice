import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const decrementCount = () => {setCount(count - 1)};
    const resetCount = () => {setCount(0)};
    const incrementCount = () => {setCount(count + 1)};

    return(
        <>
            <div class='counter-container'>
                <div class='counter-title'>Count: {count}</div>
                <div>
                    <button class='counter-button' onClick={decrementCount}>Decrement</button>
                    <button class='counter-button' onClick={resetCount}>Reset</button>
                    <button class='counter-button' onClick={incrementCount}>Increment</button>
                </div>
            </div>
        </>
    )
}

export default Counter