import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCart} from "../Router/cordinator";
import { handleCad} from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
// import frutaria from "../frutaria.json";
import styled from "styled-components";

export default function Mercadinho({carrinho, setCarrinho, frutas, setFrutas}) {
    
    // const [frutas, setFrutas] = useState(frutaria.frutaria);
    const navigate = useNavigate();

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
        } else {
          const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
          const novaFruta = { ...frutaEncontrada, amount: 1 };
          const novaLista = [...carrinho, (carrinho[1] = novaFruta)];

          setCarrinho(novaLista);
    }
}

    // console.table(frutas)

    const frutasRenderizadas = frutas.map((fruta)=> {
        return <CardFrutas
         key={fruta.id}
         image={fruta.url}
         name={fruta.name}
         price={fruta.price}
         id={fruta.id} 
         comprar={comprar}        
        ></CardFrutas>
    })



return (
    <MercadinhoContainer>
        <h1>Mercadinho</h1>
        <Button onClick={() => handleCart(navigate)}>Vá para Carrinho </Button>
        <Button onClick={() => handleCad(navigate)}>Cadastro de Frutas </Button>
        <FrutasContainer>

            {frutasRenderizadas}
    
        </FrutasContainer>
    </MercadinhoContainer>
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
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;
