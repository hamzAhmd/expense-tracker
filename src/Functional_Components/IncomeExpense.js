import React,{useContext} from 'react';
import {GlobalHook} from "../StateHooks/ContextState";

export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalHook);
    const amounts = transactions.map(transaction=>transaction.amount);
    
    const inc_amount = amounts
            .filter(val=>val>0)
            .reduce((acc,item)=>(acc+=item),0)
            .toFixed(2);
    const exp_amount = Math.abs(amounts
            .filter(val=>val<0)
            .reduce((outfn,val)=>(outfn+=val),0))
            .toFixed(2);        
    return (
        <>
        <h2 className="Income">
            Income
            <h1 id="Inc">${inc_amount}</h1>
            </h2>
        <h2 className="Expense">
            Expense
            <h1 id="Exp">${exp_amount}</h1>
            </h2>
        </>
    )
}
