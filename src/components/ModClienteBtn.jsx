import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function ModClienteBtn({ cellValues }) {
  const [id, setId] = useState(cellValues.row.id);
  const url = `/dashboard/modificarCliente/${id}`;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(url)
    navigate(url)
  }

  return (
    <Boton
      variant="contained"
      className="delete-btn"
      onClick={(event) => {
        handleClick()
      }}
    >
      ✍️
    </Boton>
  )
}

export const Boton = styled.div`
  border: 1px solid #65963c;
  color: black;
  padding: .5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2.9px #6ed219;

  &:hover {
    cursor: pointer;
    background-color: #e2ffc9;
    color: white;
  }
`;