import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter,setCounter] = useState(0);
  const handleClick = (value) => {
    setCounter(counter+value);
  }
  const handleMultiply = () => {
    setCounter(counter*2);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => handleClick(1)}>INCREASE</button>
      <button onClick={() => handleClick(-1)}>DECREASE</button>
      <button onClick={handleMultiply}>MULTIPLY</button>
    </div>
  );
}
