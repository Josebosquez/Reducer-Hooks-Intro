import React, {useReducer} from "react";

export const CountContext = React.createContext({});
const initialState = {
    count: 0,
};

function reducer(state, action){
    switch (action.type){
        case "INCREMENT":
        return {
            count: state + 1
        }
        case "DECREMENT":
        return {
            count: state - 1
        }
        default: return state;
    }
}

function CountContextWrapper({children}){
const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{state,dispatch}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextWrapper;