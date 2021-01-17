import React,{useContext} from 'react';
import {GlobalHook} from "../StateHooks/ContextState";

export const TransList = ({transaction}) => {
    const {DeleteHistory} = useContext(GlobalHook);
    const sign = transaction.amount < 0 ? '-':'+';
    return (
            <li className={transaction.amount<0 ? 'minus':'plus'}>
                <button className="del-btn" 
                onClick={()=>DeleteHistory(transaction.id)}>x</button>
                <span>{transaction.text}</span>
                <span>{sign}${Math.abs(transaction.amount)}</span>
            </li>
    )
}
