import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

export default function DelClienteBtn({ cellValues }) {
  const [id, setId] = useState(cellValues.row.id);
  const [nombre, setNombre] = useState(cellValues.row.nombre);
  const url = `https://crmcar-tec-production.up.railway.app/api/clientes/${id}`;
  const navigate = useNavigate();

  //   const deleteClient = (event, cellValues)

  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  const handleClick = () => {
    const confirmar = confirm(`Quieres eliminar al cliente ${nombre}?`);
    if (confirmar) {
      axios.delete(url, config)
        .then(res => console.log(res));
      alert(`✅ - El cliente ${cellValues.row.nombre} se ha eliminado`);
      navigate('/dashboard/clientes')
    } else {
      alert(`❌ - El cliente ${cellValues.row.nombre} no se ha eliminado`);
    }
  }

  return (
    <Boton
      variant="contained"
      className="delete-btn"
      onClick={(event) => {
        handleClick()
      }}
    >
      ❌
    </Boton>
  )
}

export const Boton = styled.div`
  border: 1px solid #884242;
  color: black;
  padding: .5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2.9px red;

  &:hover {
    cursor: pointer;
    background-color: #ffd1d1;
    color: white;
  }
`;
