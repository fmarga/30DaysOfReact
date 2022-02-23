import React from "react";

const hexacolor = () => {
  let str = "1234567890abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return color;
};

const styleLi = {
  backgroundColor: hexacolor(),
  listStyle: "none",
  margin: "5px",
};

const Hexadecimal = () => {
  return (
    <ul>
      <li style={styleLi}>{hexacolor()}</li>
      <li style={styleLi}>{hexacolor()}</li>
      <li style={styleLi}>{hexacolor()}</li>
      <li style={styleLi}>{hexacolor()}</li>
      <li style={styleLi}>{hexacolor()}</li>
    </ul>
  );
};

export default Hexadecimal;
