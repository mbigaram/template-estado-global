import React from "react";
import styled from "styled-components";

export default function CardCarrinho({
  id,
  url,
  name,
  amount,
  price,
  deleteItem
}) {
  //------------------------------

  return (
    <CardContainer>
      <Image src={url} />
      <h4>{name}</h4>
      <p>
        Qtd <b>{amount}</b>
      </p>
      <p>R${price}</p>
      <DeleteButton onClick={()=> deleteItem(id)}><b>X</b></DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
    padding: 3px;
    width: 25px;
    background-color: darkred;
    border: 2px solid darkred;
    border-radius: 5px;

`;
const CardContainer = styled.section`
  width: 300px;
  border: 2px solid goldenrod;
  border-radius: 15px;
  box-shadow: 3px 7px  15px grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
