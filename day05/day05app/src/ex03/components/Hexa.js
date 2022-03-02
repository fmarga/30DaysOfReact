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

const Colors = (props) => {
  const styleLi = {
    backgroundColor: hexacolor(),
    listStyle: "none",
    margin: "5px",
    textAlign: "center",
  };
  const colorList = props.colors.map((color) => (
    <li style={styleLi}>{color}</li>
  ));
  return <ul>{colorList}</ul>;
};

const Hexa = () => {
  return (
    <Colors
      colors={[
        hexacolor(),
        hexacolor(),
        hexacolor(),
        hexacolor(),
        hexacolor(),
        hexacolor(),
      ]}
    />
  );
};

export default Hexa;
