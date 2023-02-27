import './App.css';
import { Routes, Route, Router } from "react-router-dom"
import { Checklist } from './challenges/Checklist';
import { CreditGrowth } from "./challenges/CreditGrowth";
import { DebtFree } from "./challenges/DebtFree"
import { Investments } from "./challenges/Investments";
import { Savings } from "./challenges/Savings"

function App() {
  return <>
    <Router>
      <div className="App">
        <Checklist />
      </div>
      <Routes>
        <Route path="/challenge/credit_growth" element={<CreditGrowth />} />
        <Route path="/challenge/debt_free" element={<DebtFree />} />
        <Route path="/challenge/investments" element={<Investments />} />
        <Route path="/challenge/savings" element={<Savings />} />
      </Routes>
    </Router>
  </>
}

export default App;
