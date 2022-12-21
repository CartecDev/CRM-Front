import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Interface from '../components/Interface';
import Navbar from '../components/Navbar';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../contexts/ContextProvider';
import Box from '@mui/material/Box'

export default function VerPerfil() {
  const { themeSettings } = useStateContext();
  const user = window.localStorage.getItem("user");
  const parsedUser = JSON.parse(user)
  const verUsuario = () => {
    console.log(parsedUser)
  }

  const [rol, setRol] = useState('');

  useEffect(() => {
    if (parsedUser.rol === 1) {
      setRol('Admin')
    } else if (parsedUser.rol === 2) {
      setRol('Developer')
    } else if (parsedUser.rol === 3) {
      setRol('Editor')
    }
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
            <Header title={`${parsedUser.nombre}`} category={`Usuario #${parsedUser.id}`} />
            <Box className='flex flex-col'>
              <DataRow><span>Nombre:</span> {parsedUser.nombre}</DataRow>
              <DataRow><span>Apellidos:</span> {parsedUser.apellidos}</DataRow>
              <DataRow><span>Username:</span> {parsedUser.username}</DataRow>
              <DataRow><span>Email:</span> {parsedUser.email}</DataRow>
              <DataRow><span>Rol:</span> {rol}</DataRow>
              <DataRow><span>Id:</span> {parsedUser.id}</DataRow>
            </Box>
          </div>

          <div>
            {themeSettings && (<ThemeSettings />)}
          </div>
        </div>
      </Content>
    </Display>
  );
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