import React from "react";

const ProductBtn = ({ dados }) => {
  return (
    <div className="exercicios">
      <h3>{dados.nome}</h3>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default ProductBtn;
