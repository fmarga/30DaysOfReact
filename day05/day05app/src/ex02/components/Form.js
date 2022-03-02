import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <form className="form">
      <Input type="text" id="firstname" placeholder="First Name" />
      <Input type="text" id="lastname" placeholder="Last Name" />
      <Input type="email" id="email" placeholder="Email" />
      <Input type="submit" id="btn" value="Subscribe" />
    </form>
  );
};
export default Form;
