import React,{useState,useContext} from 'react';
import {GlobalHook} from "../StateHooks/ContextState";

export const Transaction = () => {
    const[text,setText] = useState("");
    const[amount,setAmount] = useState(0);
    const {AddTrans} = useContext(GlobalHook);
    const onSubmit = e=>{
        e.preventDefault();
    const newTrans = {
        id: Math.floor(Math.random()*100000),
        text,
        amount: +amount
    }
        AddTrans(newTrans);    
    }  
    return (
        <>
        <h2 className="Trans">Add New Transaction</h2>
        <hr/>        
        <form className="form_trans" 
        onSubmit={onSubmit} >
            <label>
                <strong>Detail</strong><br/>
                <input type="text" required value={text} onChange={(e)=>setText(e.target.value)}/>
            </label>
            <br/>
            <label>
                <strong>Amount</strong> [Use prefix of minus "-"<br/>sign with Expense]<br/>
                <input type="number" required value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </label>  
            <br/>
            <input type="submit" value="Add Transaction"/>
        </form>
            
        </>
    )
}
