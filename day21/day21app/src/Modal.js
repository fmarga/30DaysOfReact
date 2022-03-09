import React from "react";

const Modal = ({ modal, setModal }) => {
  function closeModal() {
    return setModal(false);
  }
  if (modal) {
    return (
      <div className="modalview">
        <p>This is a modal.</p>
        <button onClick={closeModal}>Close modal</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
