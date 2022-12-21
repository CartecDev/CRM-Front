import React, { useState } from 'react'
import Interface from '../components/Interface'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import LinkIcon from '../components/LinkIcon'
import { MdArrowBack } from 'react-icons/md'
import { Paper } from '@mui/material'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ThemeSettings from '../components/ThemeSettings'


export default function NewCliente() {
  const { currentColor } = useStateContext();
  const { themeSettings } = useStateContext();
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  const [cliente, setCliente] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    pasaporte: "",
    provincia: "",
    estado: 1
  });

  const [estado, setEstado] = useState();
  const handleEstado = (event) => {
    const i = parseInt(event.target.value);
    setEstado(i);
  };

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setCliente({
      ...cliente,
      [evt.target.name]: value
    });
    console.log(cliente)
  }

  const submitCliente = () => {
    const finalClient = cliente;
    finalClient.estado = estado;
    console.log(finalClient.estado)
    axios.post('https://crmcar-tec-production.up.railway.app/api/clientes', finalClient, config)
      .then(res => console.log(res))
      .then(alert('✅Cliente creado correctamente'))
    console.log(finalClient)
    navigate('/dashboard/clientes')
  }

  return (
    <Display>
      <Interface />
      <Content>
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full`}
          style={{ width: '100%' }}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 md:mt-20 bg-white rounded-3xl'>
            <Header title="Nuevo Cliente" category="Page" />
            <LinkIcon className="bg-light-gray" color="black" borderRadius="50%" to="/dashboard/clientes" icon={<MdArrowBack className='text-xl' />} />

            <Box sx={{ minWidth: 120 }} className={'flex flex-row flex-wrap justify-around w-full just'}>
              <FormControl className={'w-1/3'}>
                <input placeholder='Nombre' style={{ display: "flex", margin: ".5em 0em" }} name='nombre' value={cliente.nombre} onChange={handleChange} id="outlined-basic" label="Nombre" variant="outlined" />
                <input placeholder='Apellidos' style={{ display: "flex", margin: ".5em 0em" }} name='apellidos' value={cliente.apellidos} onChange={handleChange} id="outlined-basic" label="Apellidos" variant="outlined" />
                <input placeholder='Email' style={{ display: "flex", margin: ".5em 0em" }} name='email' value={cliente.email} onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
                <input placeholder='Telefono' style={{ display: "flex", margin: ".5em 0em" }} name='telefono' value={cliente.telefono} onChange={handleChange} id="outlined-basic" label="Teléfono" variant="outlined" />
                <input placeholder='DNI' style={{ display: "flex", margin: ".5em 0em" }} name='dni' value={cliente.dni} onChange={handleChange} id="outlined-basic" label="DNI" variant="outlined" maxLength="9" />
                <input placeholder='Pasaporte'  style={{ display: "flex", margin: ".5em 0em" }} name='pasaporte' value={cliente.pasaporte} onChange={handleChange} id="outlined-basic" label="Pasaporte" variant="outlined" />
                <input placeholder='Provincia' style={{ display: "flex", margin: ".5em 0em" }} name='provincia' value={cliente.provincia} onChange={handleChange} id="outlined-basic" label="Provincia" variant="outlined" />

                <select type='number' id="estado-cliente" value={estado} onChange={handleEstado} name='estado' style={{ display: "flex", margin: ".5em 0em" }}>
                  <option type='number'>Estado</option>
                  <option type='number' value='1'>A consultar</option>
                  <option type='number' value='2'>Pendiente de respuesta</option>
                  <option type='number' value='3'>Descartado</option>
                  <option type='number' value='4'>Hecho</option>
                </select>

                <button style={{ backgroundColor: `${currentColor}` }} className="m-0 w-full p-3 rounded-xl text-white" onClick={submitCliente}>Enviar</button>
              </FormControl>
              <Paper elevation={1} className={'flex flex-col justify-center align-center w-1/2 p-10'}>
                <div className='flex flex-row items-center w-full'>
                  <span className={'text-xl font-bold'}>{cliente.nombre}</span>
                  <span className={'text-xl font-bold px-1'}> {cliente.apellidos}</span>
                </div>
                <div className='flex flex-col align-start w-full justify-around h-4/5 bg-'>
                  <span className={'text-l bg-slate-50 py-2 px-1 rounded-xl'}>Email: {cliente.email}</span>
                  <span className={'text-l bg-slate-50 py-2 px-1 rounded-xl'}>Telefono: {cliente.telefono}</span>
                  <span className={'text-l bg-slate-50 py-2 px-1 rounded-xl'}>DNI: {cliente.dni}</span>
                  <span className={'text-l bg-slate-50 py-2 px-1 rounded-xl'}>Pasaporte: {cliente.pasaporte}</span>
                  <span className={'text-l bg-slate-50 py-2 px-1 rounded-xl'}>Provincia: {cliente.provincia}</span>
                </div>
              </Paper>
            </Box>
          </div>

          <div>
            {themeSettings && (<ThemeSettings />)}
          </div>
        </div>
      </Content>
    </Display>
  )
}

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;

  input, select {
    border: solid 1px grey;
    padding: 1em;
    border-radius: 10px;
  }
`;