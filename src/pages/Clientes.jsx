import React from 'react'
import { useState, useEffect } from 'react';
import { columnasClientes } from '../services/GridClientes';
import Interface from '../components/Interface';
import { NUEVO_CLIENTE } from '../config/router/paths';
import axios from 'axios';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import '../index.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ThemeSettings from '../components/ThemeSettings';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [seleccion, setSeleccion] = useState([]);

  const { themeSettings, setThemeSettings } = useStateContext();

  const url = "https://crmcar-tec-production.up.railway.app/api/clientes/all";
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  // FUNCIONA REGULERAS
  useEffect(() => {
    axios.get(url, config)
      .then(res => setClientes(res.data));
  }, [])

  return (
    <Display>
      <Interface elemento='Deberia salir aquí' />
      <Content>
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full`}
          style={{ width: '100%' }}>
          
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 md:mt-20 bg-white rounded-3xl'>
            <Header title="Clientes" category="Page" />
            <div className='flex flex-row justify-between'>
              <LinkButton className="mt-5" color="white" borderRadius="10px" text="Nuevo Cliente" to={NUEVO_CLIENTE} />
              {/* <LinkButton className="mt-5" color="white" borderRadius="10px" text="Nueva consulta" to="/crearConsulta" /> */}
              {/* Incluir botón eliminar selección */}
            </div>
            <Box sx={{ height: 550, width: '100%' }} className="mt-8">
              <DataGrid
                rows={clientes}
                columns={columnasClientes}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                onStateChange={(state) => setSeleccion(state)}
              />
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
`;