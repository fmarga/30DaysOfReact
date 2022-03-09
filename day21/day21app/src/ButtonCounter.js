import React from "react";

const ButtonCounter = ({ counter, setCounter }) => {
  function addCount() {
    return setCounter(counter + 1);
  }

  return <button onClick={addCount}>Add</button>;
};

export default ButtonCounter;
