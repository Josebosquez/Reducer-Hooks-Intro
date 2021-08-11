import React, {useContext} from 'react'
import {CountContext} from "../context/countContext"

import { INCREMENT, DECREMENT, RESET, MULTIPLY_3, DIVIDE_2 } from "../context/types"

function Counter() {
    // const context = useContext(CountContext)
    // console.log(context)
    const {state: {count}, dispatch} = useContext(CountContext)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: INCREMENT})}>+</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: RESET })}>Reset</button>

            <button onClick={()=>dispatch({type: MULTIPLY_3})}>X3</button>
            <button onClick={()=>dispatch({type: DIVIDE_2})}>/2</button>
        </div>
    )
}

export default Counter
