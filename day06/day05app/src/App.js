import React from "react";
import Numbers from "./Ex01/Numbers";

function App() {
  const numbers = [];
  for (let i = 0; i < 32; i++) {
    numbers.push(i);
  }

  return (
    <div className="container">
      <h1>30 Days of React</h1>
      <h3>Number generator</h3>
      <div className="number-wrapper">
        <Numbers numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
