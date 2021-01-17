import React,{createContext,useReducer} from 'react';
import {ReducerHook} from "./ReducerHook";

// initializing State
const initialState = {
    transactions: [
        // Dummy Items
        // {id:1 ,text:"Books",amount:-20},
        // {id:2 ,text:"Food",amount:-100},
        // {id:3 ,text:"Salary",amount:350},
        // {id:4 ,text:"Groceries",amount:-100}
    ]
}


// Creating Context Api
export const GlobalHook = createContext(initialState);

// Provider Component
export const ContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(ReducerHook,initialState);
    function DeleteHistory (id){
        dispatch({
            type:"Delete_HISTORY",
            payload:id
        });
    } 
    function AddTrans (transaction){
        dispatch({
            type:"ADD_TRANS",
            payload:transaction
        });
    }
    return(<GlobalHook.Provider value={{
        transactions: state.transactions,
        DeleteHistory,
        AddTrans
    }}>
        {children}
    </GlobalHook.Provider>)
} 