import React,{useContext} from 'react';
import {GlobalHook} from "../StateHooks/ContextState";

export const Balance = () => {
    const {transactions} = useContext(GlobalHook);
    const amounts = transactions.map(transaction=>transaction.amount) ;
    const total = amounts.reduce((outfn,item)=>(outfn+=item),0).toFixed(2);
    return (
        <>
        <h3>Balance</h3> 
        <h1 id="balance"> ${total}</h1>
        </>
    )
}
