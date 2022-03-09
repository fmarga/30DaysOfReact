import React from "react";

const ButtonModal = ({ setModal }) => {
  function clickModal() {
    return setModal(true);
  }
  return <button onClick={clickModal}>Open modal</button>;
};

export default ButtonModal;
