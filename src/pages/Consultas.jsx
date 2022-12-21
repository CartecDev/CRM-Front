import React from 'react'
import Interface from '../components/Interface';
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useStateContext } from '../contexts/ContextProvider';
import { columnasConsultas } from '../services/GridConsultas';
import styled from 'styled-components';
import ThemeSettings from '../components/ThemeSettings';


export default function Consultas() {
  const [consultas, setConsultas] = useState([])

  const { themeSettings, setThemeSettings } = useStateContext();

  const url = 'https://crmcar-tec-production.up.railway.app/api/consulta-cliente/all/join'
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY2ODYyNjY0fQ.IWGsWOdV8-1fy5lvAPxMxi11eX7DRE30omWwAnjkONk'
    }
  }

  useEffect(() => {
    axios.get(url, config)
      .then(res => setConsultas(res.data));
  }, [])

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
            <Header title="Consultas" category="Page" />
            <Box sx={{ height: 500, width: '100%' }} className="mt-8">
              <DataGrid
                rows={consultas}
                columns={columnasConsultas}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
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
