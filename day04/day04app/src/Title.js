import React from "react";
import ReactDOM from "react-dom";

const styleTitle = {
  fontSize: "20px",
  fontWeight: 300,
  margin: "10px",
  textTransform: "uppercase",
};
const Title = () => {
  return (
    <>
      <h1 style={styleTitle}>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
    </>
  );
};

export default Title;
