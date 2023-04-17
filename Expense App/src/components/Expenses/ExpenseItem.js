import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.title);
  };
  const checkHandler = () => {
    const check = document.getElementById("check");
    if (check.checked == true) {
      document.getElementById("delete").style.display = "block";
    } else {
      document.getElementById("delete").style.display = "none";
    }
  };
  return (
    <div className="expense-item">
      <input id="check" onChange={checkHandler} type="checkbox" />
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button id="delete" onClick={deleteHandler}>
        x
      </button>
    </div>
  );
};
export default ExpenseItem;
