import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";

export default function Cadastro (props){

  const[formulario, setFormulario]=useState({id: Date.now(), name:"", url:"", price:""})
  const navigate = useNavigate();

  const onChangeInputs=(event)=>{
    const {name, value}= event.target
    setFormulario({...formulario, [name]:value})
  }
  const handleClick = (event)=>{
    event.preventDefault()

    const novasFrutas = [
      ...props.frutas,
      {...formulario, id: props.frutas.length + 1 }
    ]

    props.setFrutas(novasFrutas);
    setFormulario({})

  }

  
 
 
  return(
    <CadastroContainer>
      <h1>Cadastro</h1>
      <Button onClick={() => handleHome(navigate)}>Voltar</Button>
    <FormContainer onSubmit={handleClick}>
      <Input
      name="name"
      value={formulario.name}
      onChange={onChangeInputs}
      type="text"
      placeholder="Nome da Fruta"
      />
      <Input 
      name="url"
      value={formulario.url}
      onChange={onChangeInputs}
      type="text"
      placeholder="url da imagem"
      />
      <Input
      name="price"
      value={formulario.price}
      onChange={onChangeInputs}
      type="number"
      placeholder="Preço da Fruta"
      />
      <Button> Cadastrar </Button>
    </FormContainer>
    </CadastroContainer>
  )
}

const Button = styled.button`
    color: white;
    padding: 10px;
    width: 140px;
    background-color: goldenrod;
    border: 2px solid goldenrod;
    border-radius: 5px;
`
const CadastroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
border: 2px solid goldenrod;
border-radius: 5px;
padding: 10px;
margin: 8px;
width:200px;
 
`;