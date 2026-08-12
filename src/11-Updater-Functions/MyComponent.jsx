//updater function is used when new state is dependent on the previous state. 
//It takes a function as an argument which receives the previous state and returns the new state.
// ex- setYear(year+1) can be written as setYear(prevYear => prevYear + 1)
// it is just a good practice to use updater function when new state is dependent on the previous state even if the new state is not dependent on the previous state. It is just a good practice to use updater function when new state is dependent on the previous state even if the new state is not dependent on the previous state.
import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1); //it automatically takes the previous state and returns the new state
        setCount(prevCount => prevCount + 1); 
        setCount(prevCount => prevCount + 1); 
        //if we use setCount(count + 1) then it will not work as expected because it will take the current state and return the new state.
        //if we used setCount(count+1) three times then it will only increment the count by 1 instead of 3 because it will take the current state and return the new state.
        //if we use setCount(prevCount => prevCount + 1) three times then it will increment the count by 3 because it will take the previous state and return the new state.
    }

    function decrement() {
        setCount(prevCount => prevCount - 1); 
        setCount(prevCount => prevCount - 1); 
        setCount(prevCount => prevCount - 1); 
    }


    function reset() {
        setCount(0); //it will reset the count to 0
    }

    return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        
    </div>
);

}



export default MyComponent;