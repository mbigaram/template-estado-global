import React from "react";
import styled from "styled-components";

export default function CardFruta({ image, name, price, id, comprar }) {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <h4>{name}</h4>
      <p>R${price}</p>
      <Button onClick={()=>comprar(id)}>Comprar</Button>
    </CardContainer>
  );
}

const Button = styled.button`
    color: white;
    padding: 10px;
    
    width: 140px;
    background-color: goldenrod;
    border: 2px solid goldenrod;
    border-radius: 5px;
`
const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 2px solid goldenrod;
  border-radius: 15px;
  box-shadow: 3px 7px  15px grey;
  margin: 10px;
  padding: 10px;
`;
