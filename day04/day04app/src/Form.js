import React from "react";

/*form {
        max-width: 600px;
        text-align: center;
        margin: 10px auto;
        justify-content: space-around;
        line-height: 2.5;
        
      }

      input {
        margin: 15px 5px;
        padding: 5px;
        border: transparent;
        border-radius: 7px;
      }

      #btn {
        display: block;
        text-align: center;
        margin: auto;
        width: 200px;
        padding: 5px 25px;
        background-color: rgb(248, 123, 101);
        color: white;
        border: 1px solid rgb(248, 123, 101);
        border-radius: 5px;
      } */

const styleForm = {
  maxWidth: "600px",
  textAlign: "center",
  margin: "10px auto",
  justifyContent: "space-around",
  lineHeight: 2.5,
};

const styleInput = {
  margin: "15px 5px",
  padding: "5px",
  border: "transparent",
  borderRadius: "7px",
};

const button = {
  display: "block",
  textAlign: "center",
  margin: "auto",
  width: "200px",
  padding: "5px 25px",
  backgroundColor: "rgb(248, 123, 101)",
  color: "white",
  border: "1px solid rgb(248, 123, 101)",
  borderRadius: "5px",
};
const Form = () => {
  return (
    <form style={styleForm}>
      <input
        style={styleInput}
        type="text"
        name="first-name"
        placeholder="First Name"
      ></input>
      <input
        style={styleInput}
        type="text"
        name="last-name"
        placeholder="Last Name"
      ></input>
      <input
        style={styleInput}
        type="email"
        name="email"
        placeholder="Email"
      ></input>
      <input style={button} type="button" value="Subscribe"></input>
    </form>
  );
};

export default Form;
