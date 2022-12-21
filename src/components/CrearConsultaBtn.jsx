import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function CrearConsultaBtn({ cellValues }) {
  const [id, setId] = useState(cellValues.row.id);
  const [nombre, setNombre] = useState(cellValues.row.nombre);

  return (
    <Boton
      variant="contained"
      className="delete-btn"
      to={`/dashboard/newConsulta/${id}`}
    >
      ➕
    </Boton>
  )
}

export const Boton = styled(Link)`
  border: 1px solid grey;
  color: black;
  padding: .5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2.9px grey;

  &:hover {
    cursor: pointer;
    background-color: #ecfbf7;
    color: white;
  }
`;
