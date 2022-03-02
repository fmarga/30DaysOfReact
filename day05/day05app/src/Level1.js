import React from "react";
import ReactDOM from "react-dom";
import stacks from "./img/stacks.png";

const Level1 = (props) => {
  return (
    <div className="level1">
      <h1>{props.texto}</h1>
      <img src={props.src} />
    </div>
  );
};

export default Level1;
