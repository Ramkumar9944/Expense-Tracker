import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Cricket Bat",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Home Theatre",
    amount: 799.49,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e3",
    title: "Cricket Ball",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Play Station",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummy);
  const NewExpenseHandler = (newone) => {
    setExpenses((prevExpense) => {
      return [newone, ...prevExpense];
    });
  };
  const deleteExpenseHandler = (entry) => {
    console.log(entry);
    setExpenses(entry);
  };
  return (
    <div>
      <NewExpense newExpense={NewExpenseHandler} />
      <Expenses expenses={expenses} deleteEntry={deleteExpenseHandler} />
    </div>
  );
};
export default App;
