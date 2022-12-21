import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Interface from '../components/Interface';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { columnasCliente } from '../services/GridVerCliente';
import LinkButton from '../components/LinkButton';
import LinkIcon from '../components/LinkIcon';
import { MdArrowBack } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider';
import styled from 'styled-components';
import axios from 'axios';
import ThemeSettings from '../components/ThemeSettings';

export default function VerCliente() {
  const { id } = useParams();
  const [cliente, setCliente] = useState([])
  const [consulta, setConsulta] = useState([])

  const { themeSettings } = useStateContext();

  const urlCliente = `https://crmcar-tec-production.up.railway.app/api/cliente/${id}`;
  const urlConsulta = `https://crmcar-tec-production.up.railway.app/api/consulta-cliente/cliente/join/${id}`;
  
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  useEffect(() => {
    // Get Cliente
    axios.get(urlCliente, config)
      .then(res => setCliente(res.data));

    // Get Consulta
    axios.get(urlConsulta, config)
      .then(res => setConsulta(res.data));
  }, [])

  const verConsulta = () => {
    console.log(consulta)
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

          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 md:mt-20 bg-white rounded-3xl' >
            <Header title={`${cliente.nombre} ${cliente.apellidos}`} category="Ficha de cliente" />
            <button onClick={verConsulta}>Ver consulta</button>
            <div className='flex items-center my-5'>
              <LinkIcon className="bg-light-gray" m="0em 2em 0em 0em" color="black" borderRadius="50%" to="/dashboard/clientes" icon={<MdArrowBack className='text-xl' />} />
              <LinkButton text='Modificar' to={`/dashboard/modificarCliente/${id}`} color='white' borderRadius='15px' />
            </div>

            <Box className='flex flex-col'>
              <DataRow><span>Nombre:</span> {cliente.nombre}</DataRow>
              <DataRow><span>Apellidos:</span>{cliente.apellidos}</DataRow>
              <DataRow><span>Mail:</span> {cliente.email}</DataRow>
              <DataRow><span>Telefono:</span> {cliente.telefono}</DataRow>
              <DataRow><span>DNI:</span> {cliente.dni}</DataRow>
              <DataRow><span>Pasaporte:</span> {cliente.pasaporte}</DataRow>
              <DataRow><span>Provincia:</span> {cliente.provincia}</DataRow>
            </Box>

            <h2 className='text-3xl font-extrabold tracking-tight text-slate-900 my-10'>Consultas</h2>

            <Box sx={{ height: 631, width: '100%' }} className="mt-8">
              <DataGrid
                rows={consulta}
                columns={columnasCliente}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
              />
            </Box>

            <div>
              {themeSettings && (<ThemeSettings />)}
            </div>

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
`;

export const DataRow = styled.div`
  background-color: #f7f7f7;
  margin: .3em 0em;
  padding: .5em 1em;
  border-radius: 10px;
  
  span {
    font-weight: bolder;
  }
`;