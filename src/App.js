

import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 5.5,
    date: new Date(2020, 7, 25),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 249.99,
    date: new Date(2021, 4, 14),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 399.99,
    date: new Date(2022, 4, 20),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 4, 21),
  },
  {
    id: "e5",
    title: "Upgrading the Fusca",
    amount: 999,
    date: new Date(2022, 4, 22),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const appExpenseHandler = newExpense =>{
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    })
  } 

  return (
    <div className="App">
      <NewExpense onAddExpense = {appExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;