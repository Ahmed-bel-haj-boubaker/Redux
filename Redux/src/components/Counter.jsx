import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    </div>
  );
};

export default Counter;
