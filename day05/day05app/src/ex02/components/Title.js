import React from "react";

const Title = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </>
  );
};

export default Title;
