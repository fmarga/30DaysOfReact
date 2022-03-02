import React from "react";

const Input = ({ type, id, placeholder, value }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
      ></input>
    </>
  );
};

export default Input;
