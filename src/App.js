import './app.css';
import Header from "./Functional_Components/Header";
import {Balance} from "./Functional_Components/Balance";
import {IncomeExpense} from "./Functional_Components/IncomeExpense";
import {Transaction} from "./Functional_Components/Transaction";
import {History} from "./Functional_Components/History";

function App() {
  return (
    <div >
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
    </div>
  );
}

export default App;
