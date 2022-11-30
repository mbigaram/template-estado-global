import React from "react";
import { useNavigate } from "react-router-dom";
import CardCarrinho from "../components/CardCarrinho";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";


export default function Carrinho({carrinho, setCarrinho}) {
  const navigate = useNavigate();

  let preçoTotal = 0;
  carrinho.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  let qtdTotal = 0;
  carrinho.map((item) => (qtdTotal = qtdTotal + item.amount));


  function remover(id) {
    const fruta = carrinho && carrinho.find((item) => item.id === id);
    console.log(fruta);

    if (fruta.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (fruta.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {
  
      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }

    const carrinhoRenderizado = carrinho.map((item)=>{
      return <CardCarrinho 
              key={item.id}
              id={item.id}
              url={item.url}
              name={item.name}
              amount={item.amount}
              price={item.price}
              deleteItem={remover}
              ></CardCarrinho>
    })

  return (
    <CarrinhoContainer>
      <h1 id="cart">Carrinho <span role="img" aria-label="cart">🛒<QuantidadeTotal>{qtdTotal}</QuantidadeTotal> </span></h1>
      <Button onClick={() => handleHome(navigate)}>Voltar</Button>
      {carrinhoRenderizado}
      <h3>Preço Total: R$ {preçoTotal}</h3>
    </CarrinhoContainer>
  );
}

const QuantidadeTotal = styled.span`
  border: 2px solid goldenrod;
  background-color: goldenrod;
  color: white;
  padding: 2px 7px;
  position: absolute;
  margin: 0 -18px;
  border-radius: 50%;
  font-size: 12px;
`

const Button = styled.button`
    color: white;
    padding: 10px;
    width: 140px;
    background-color: goldenrod;
    border: 2px solid goldenrod;
    border-radius: 5px;
`
const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
