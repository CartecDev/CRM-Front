import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

export default function VerClienteBtn({ cellValues }) {
  const [id, setId] = useState(cellValues.row.id);
  const url = `/dashboard/verCliente/${id}`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url)
  }

  return (
    <Boton
      variant="contained"
      onClick={(event) => {
        handleClick()
      }}
    >
        👁
    </Boton>
  )
}

export const Boton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #669393;
  color: black;
  padding: .5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2.9px #1976d2;

  &:hover {
    cursor: pointer;
    background-color: #d4f5f5;
    color: white;
  }
`;