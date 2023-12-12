import Header from "./Components/Header";
import Summary from "./Components/Summary";
import ExpInc from "./Components/ExpInc";
import TransactionList from "./Components/TransactionList";
import Update from "./Components/Update";
import { GlobalProvider } from "./Components/Context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="mx-auto my-7 w-full">
      <Summary/>
      <ExpInc/>
      <TransactionList/>
      <Update/>
      </div>
    </GlobalProvider>
  );
}

export default App;
