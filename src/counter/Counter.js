import { useState } from "react";
import "./Counter.css";
import CounterView from "./CounterView";

function Counter() {
  const [count, setCount] = useState(0);

  const changeNumber = (value) => {
    setCount(count + value);
  };
  return (
    <div className="counter-container">
      <CounterView counter={count} />
      <button onClick={() => changeNumber(1)}>Increment</button>
      <button onClick={() => changeNumber(-1)}>Decrement</button>
    </div>
  );
}

export default Counter;
