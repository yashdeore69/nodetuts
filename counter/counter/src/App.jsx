import { useState } from "react";

function App() {
  return <div>
    <h1>
      COUNTER
    </h1>
    <Counter></Counter>
  </div>
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }


  return <div>
    <h2 id = "text">{count}</h2>
    <button onClick = {increaseCount}>Increase Counter</button>
    <button onClick = {decreaseCount}>Decrease Counter</button>
    <button onClick = {resetCount}>Reset Counter</button>
  </div>
}

export default App
