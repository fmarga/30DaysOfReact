import React from "react";
import Hexa from "./components/Hexa";

const Ex03 = (props) => {
  return (
    <>
      <h1>{props.texto}</h1>
      <div className="colors">
        <Hexa />
      </div>
    </>
  );
};

export default Ex03;
