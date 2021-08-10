import React, {useContext} from 'react'
import {CountContext} from "../context/countContext"

function Counter() {
    // const context = useContext(CountContext)
    // console.log(context)
    const {state: {count}, dispatch} = useContext(CountContext)
    console.log(state);
    console.log(dispatch);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
    )
}

export default Counter
