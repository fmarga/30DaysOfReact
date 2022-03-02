import React from "react";
import ReactDOM from "react-dom";
import Level1 from "./Level1";
import stacks from "./img/stacks.png";
import Ex02 from "./ex02/Ex02";
import Ex03 from "./ex03/Ex03";

const App = () => {
  return (
    <>
      <Level1 texto="Exercise 1" src={stacks} />
      <Ex02 texto="Exercise 2" />
      <Ex03 texto="Exercise 3" />
    </>
  );
};

export default App;
