import React from "react";
import "./App.css";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import ButtonCounter from "./ButtonCounter";
import Products from "./Products";

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  return (
    <div>
      <h1 className="title">Studying Hooks useState - basic</h1>

      <div className="exercicios">
        <h3>Modal example - origamid course</h3>
        <ButtonModal setModal={setModal} />
        <Modal modal={modal} setModal={setModal} />
      </div>

      <div className="exercicios">
        <h3>Counter example</h3>
        <p>Click to add to the counter:</p>
        <span>{counter}</span>
        <ButtonCounter counter={counter} setCounter={setCounter} />
      </div>

      <div className="exercicios">
        <h3>API request - origamid course</h3>
        <Products
          dados={dados}
          setDados={setDados}
          carregando={carregando}
          setCarregando={setCarregando}
        />
      </div>
    </div>
  );
};

export default App;
