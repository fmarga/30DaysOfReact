import React from "react";

const styleRed = {
  backgroundColor: "rgb(253, 94, 83)",
  color: "white",
  fontSize: "2rem",
  width: "100px",
  height: "100px",
  margin: "5px",
  padding: "10px",
};

const styleGreen = {
  backgroundColor: "rgb(33, 191, 115)",
  color: "white",
  fontSize: "2rem",
  width: "100px",
  height: "100px",
  margin: "5px",
  padding: "10px",
};

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => {
    if (number % 2 === 0) {
      return (
        <span style={styleGreen} key={number}>
          {number}
        </span>
      );
    } else {
      return (
        <span style={styleRed} key={number}>
          {number}
        </span>
      );
    }
  });

  return list;
};

export default Numbers;
