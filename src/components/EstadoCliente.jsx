import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

export default function EstadoCliente({ cellValues }) {
  const [id, setId] = useState(cellValues.row);
  const [color, setColor] = useState(cellValues.row.estado);
  const url = `/dashboard/verCliente/${id}`;

    if (color === 1) {
      setColor('orange')
    } else if (color === 2) {
      setColor('blue')
    } else if (color === 3) {
      setColor('red')
    } else if (color === 4) {
      setColor('green')
    }
  return (
    <Color
      variant="contained"
    >
        <div style={{ backgroundColor:`${color}` }}/>
    </Color>
  )
}

export const Color = styled.div`
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;

  div {
    width: 3em;
    height: 1em;
    border-radius: 50%;
  }
`;