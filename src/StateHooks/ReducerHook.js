export default (state,actions)=>{
    switch(actions.type){
        case "Delete_HISTORY":
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !==
                    actions.payload)
            }
        case "ADD_TRANS":
            return {
                ...state,
                transactions:[actions.payload, ...state.transactions]
                }    
        default: 
        return state; 
    }

}