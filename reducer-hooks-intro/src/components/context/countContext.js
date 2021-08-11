import React, {useReducer} from "react";

import { INCREMENT, DECREMENT, RESET, MULTIPLY_3, DIVIDE_2 } from "../context/types"

export const CountContext = React.createContext({}); // pass in an object


const initialState = {// the initial state
    count: 0,
};

function addOne(state){
    return{
        count: state+1,
    }
}

function reducer(state, action){ // accepts 2 arguments - state and action. 
    //action.type is a switch statement. 
    // got a case statement. Then we return an object. we need to match the initial state information in our return.

    switch (action.type){
        case INCREMENT:
        return addOne(state.count);

        // returning a object as well.
        case DECREMENT:
        return {
            count: state.count - 1
        };

        case RESET: 
        // let reset = 0;
        return {
            count: 0
        };
        
        case MULTIPLY_3:
            return {
                count: state.count * 3
        };

        case DIVIDE_2:
            return {
                count: state.count / 2
            }
        // if there are no cases, then return the default state.
        default: return state;
    }
}

function CountContextWrapper({children}){// counter will become a child of contextWrapper.
const [state, dispatch] = useReducer(reducer, initialState) // pull reducer from react. accepts 2 arguments. accepts 1st is reducer function, then initial state. Taking these params, it will spit out an array of state and dispatch. 
    return (
        <CountContext.Provider value={{state, dispatch}}> 
        {/* so now, because we have a value being passed (state, dispatch), any children in context wrapper can pull these two variables.  */}
            {children}
        </CountContext.Provider>
    )
}

export default CountContextWrapper;

// way it works.

// counter.js brings in useContext. then we bring it in from countContext. The countContext is the exported React.createContet({}) object.

// count context wrapper in app.js is the CountContextWrapper

// in app.js we wrapped our counter(child) in CountContextWrapper. since our CountContext.Provider is already being used in the function, we dont need to do it again. This means that we are passing state to its children. We allow our state (reducer function, initialState) and dispatch to be passed to CountContext.Provider. If something is wrapped in CountContext, then they will get it passed.