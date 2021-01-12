import React from 'react'

export const Transaction = () => {
    return (
        <>
        <h2 className="Trans">Add New Transaction</h2>
        <hr/>        
        <form className="form_trans">
            <label>
                Enter Detail <br/>
                <input type="text" required/>
            </label>
            <br/>
            <label>
                Enter Amount <br/>
                <input type="number" required/>
            </label>
            <br/>
            <input type="submit" value="Income"/>
            <input type="submit" value="Expense"/>
        </form>
            
        </>
    )
}
