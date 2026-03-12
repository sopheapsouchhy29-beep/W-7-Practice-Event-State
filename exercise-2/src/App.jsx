import React, {useState} from "react";
function App() {
  const [text, setText] = useState("");

  function handleInputChange(event) {
    console.log("Key pressed:", event.target.value);
    setText(event.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={handleInputChange} value={text} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled value ={text.toUpperCase()} />
      </p>
    </main>
  );
}

export default App;
