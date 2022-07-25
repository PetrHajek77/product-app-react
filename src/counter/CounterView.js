import { useEffect } from "react";

function CounterView({ counter }) {
  useEffect(() => {
    console.log("calling useeffect in counter view");

    return () => {
      console.log("cleanup of counter view useeffect");
    };
  }, []);

  useEffect(() => {
    console.log("counter has been changed");
  }, [counter]);

  return <div>{counter}</div>;
}

export default CounterView;
