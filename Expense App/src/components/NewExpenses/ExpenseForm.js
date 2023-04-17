import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleHandler = (event) => {
    // setEnteredInput({ ...enteredInput, enteredTitle: event.target.value });
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    // setEnteredInput({ ...enteredInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    // setEnteredInput({ ...enteredInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
  };
  const updateExpense = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.savedExpense(newExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={updateExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
