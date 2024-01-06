import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const savedExpenseHandler = (savedData) => {
    const new_expense = {
      ...savedData,
      id: Math.random().toString(),
    };
    props.newExpense(new_expense);
    setEdit(false);
  };
  const [isEdit, setEdit] = useState(false);
  const startEdit = () => {
    setEdit(true);
  };
  const stopEdit = () => {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!isEdit && (
        <button type="button" onClick={startEdit}>
          Add New Expenses
        </button>
      )}
      {isEdit && (
        <ExpenseForm savedExpense={savedExpenseHandler} onCancel={stopEdit} />
      )}
    </div>
  );
};
export default NewExpense;
