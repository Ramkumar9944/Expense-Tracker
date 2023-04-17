import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("All");
  const expenseFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  let filterExpense = "";
  if (filterYear === "All") {
    filterExpense = props.expenses;
  } else {
    filterExpense = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    });
  }
  const deleteExpenseHandler = (entry) => {
    filterExpense = filterExpense.filter((item) => item.title !== entry);
    props.deleteEntry(filterExpense);
  };
  return (
    <li>
      <div className="expenses">
        <ExpenseFilter
          setYear={filterYear}
          filterExpense={expenseFilterHandler}
        />
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList item={filterExpense} deleteItem={deleteExpenseHandler} />
      </div>
    </li>
  );
};
export default Expenses;
