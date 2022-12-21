import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Interface from '../components/Interface';
import Navbar from '../components/Navbar';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../contexts/ContextProvider';

export default function SeguimientoConsulta() {
  const { id } = useParams();
  const [consulta, setConsulta] = useState([])
  const { setCurrentColor, setCurrentMode, themeSettings, currentColor } = useStateContext();

  const urlConsulta = `https://crmcar-tec-production.up.railway.app/api/consulta-cliente/${id}`;

  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  useEffect(() => {
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
          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 md:mt-20 bg-white rounded-3xl'>
            <Header category="Seguimiento Consulta" />
            <Box className='flex flex-col' style={{ backgroundColor:'#e1ebec', padding:'1em', borderRadius: '10px' }}>
              <DataRow><span>ID: </span>{consulta.id}</DataRow>
              <DataRow><span>Fecha: </span> {consulta.fecha}</DataRow>
              <DataRow><span>Tipo: </span> {consulta.tipo}</DataRow>
              <DataRow><span>Canal: </span> {consulta.canal}</DataRow>
              <DataRow><span>Descripción: </span> {consulta.descripcion}</DataRow>
            </Box>
            <button onClick={verConsulta}>Ver consulta</button>
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

export const DataRow = styled.div`
  background-color: white;
  margin: .3em 0em;
  padding: .5em 1em;
  border-radius: 10px;
  
  span {
    font-weight: bolder;
  }
`;