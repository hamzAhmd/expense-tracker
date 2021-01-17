import React,{useContext} from 'react';
import {TransList} from "./TransList";
import {GlobalHook} from "../StateHooks/ContextState";

export const History = () => {
    const {transactions} = useContext(GlobalHook);
    return (
        <>
        <h2 className="Hist">History</h2>
        <hr/>        
        <ul className="History-List">
            {transactions.map(transaction=>(<TransList key={transaction.id} transaction={transaction}/>))}
        </ul>
        </>
        )
}
