import React from "react";
import Form from "./Form.js";
import Title from "./Title.js";

const styleWrapper = {
  fontFamily: "Montserrat",
  backgroundColor: "#9ce9fc",
  border: "10px solid white",
  borderRadius: "20px",
  textAlign: "center",
  padding: "20px",
};

const Level2 = () => {
  return (
    <div style={styleWrapper} className="wrapper">
      <Title />
      <Form />
    </div>
  );
};

export default Level2;
