import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";

const Ex02 = (props) => {
  return (
    <>
      <h1>{props.texto}</h1>
      <div className="wrapper">
        <Title
          title="Subscribe"
          paragraph="Sign up with your email address to receive news and updates"
        />
        <Form />
      </div>
    </>
  );
};

export default Ex02;
