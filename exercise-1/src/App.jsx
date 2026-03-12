import React, {useState} from "react";
function App() {
  const [isSunny, setIsSunny] = useState(false);

  function onSunClick() {
    setIsSunny(false);
  }

  function onRainClick() {
    setIsSunny(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isSunny ? "Rain Time!" : "Sun Time!";
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isSunny ? "rainy" : "sunny";
  }

  return (
    <main className= {getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
