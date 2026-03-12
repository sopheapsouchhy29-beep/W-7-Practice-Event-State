import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");
  const [iserror, setIsError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setValueA(event.target.value);
  }

  function onB(event) {
    setValueB(event.target.value);
  }

  function onCompute() {
    const numA = Number(valueA);
    const numB = Number(valueB);

    if (isNaN(numA) || isNaN(numB) || valueA === "" || valueB === "") {
      setResult("Please enter valid numbers");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} value= {valueA} />

      <label>B =</label>
      <input onChange={onB} value={valueB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled 
      value={result} 
      className ={iserror ? "error" : ""}/>
      
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
