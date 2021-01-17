import './app.css';
import Header from "./Functional_Components/Header";
import {Balance} from "./Functional_Components/Balance";
import {IncomeExpense} from "./Functional_Components/IncomeExpense";
import {Transaction} from "./Functional_Components/Transaction";
import {History} from "./Functional_Components/History";

import {ContextProvider} from "./StateHooks/ContextState";
function App() {
  return (
    <ContextProvider >
     <Header/>
     <div className="container">
     <Balance/>
     </div>
     <div className="IncomeExpense">
     <IncomeExpense/>
     </div>
     <div className="Transaction">
       <Transaction/>
     </div>
     <div className="History">
       <History/>
     </div>
    </ContextProvider>
  );
}

export default App;
