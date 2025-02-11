import { useState } from "react";
import BasicCalculator from './components/basicCalculator';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if(count !==0) {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <main>
    <h1>Our number: {count}</h1>
    <button onClick={() => increment()}>Increment</button><br />
    <button onClick={() => decrement()}>Decrement</button><br />
    <button onClick={() => reset()}>Reset</button><br />

    <BasicCalculator />
    </main>
  )

}

export default App;