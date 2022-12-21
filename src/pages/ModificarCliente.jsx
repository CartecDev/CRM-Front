import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Interface from '../components/Interface'
import ThemeSettings from '../components/ThemeSettings'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import LinkIcon from '../components/LinkIcon'
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


export default function ModificarCliente() {
  const { currentColor, themeSettings } = useStateContext();
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [estado, setEstado] = useState();
  const navigate = useNavigate();
  const urlGET = `https://crmcar-tec-production.up.railway.app/api/cliente/${id}`;
  const urlPUT = `https://crmcar-tec-production.up.railway.app/api/clientes/${id}`;

  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }

  useEffect(() => {
    getClient();
  }, [])

  useEffect(() => {
    setCliente({
      ...cliente, estado
    });
  }, [estado])

  async function getClient() {
    const res = await axios.get(urlGET, config)
    await setCliente(res.data)
  }

  const handleEstado = (event) => {
    const i = parseInt(event.target.value);
    setEstado(i);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setCliente({
      ...cliente,
      [evt.target.name]: value
    });
  }

  const actualizar = () => {
    console.log(cliente)
    axios.put(urlPUT, cliente, config);
    navigate('/dashboard/clientes');
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
            <Header title="Modificar Cliente" category="Page" />
            <LinkIcon className="bg-light-gray" color="black" borderRadius="50%" to="/dashboard/clientes" icon={<MdArrowBack className='text-xl' />} />

            <Box>
              <Formulario>
                <span>
                  <label htmlFor="nombre">Nombre</label>
                  <input value={cliente.nombre} onChange={handleChange} id="nombre" name="nombre" type="text" placeholder={cliente.nombre} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="apellidos">Apellidos</label>
                  <input value={cliente.apellidos} onChange={handleChange} id="apellidos" name="apellidos" type="text" placeholder={cliente.apellidos} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="email">Email</label>
                  <input value={cliente.email} onChange={handleChange} id="email" name="email" type="text" placeholder={cliente.email} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="telefono">Teléfono</label>
                  <input value={cliente.telefono} onChange={handleChange} id="telefono" name="telefono" type="text" placeholder={cliente.telefono} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="dni">DNI</label>
                  <input value={cliente.dni} onChange={handleChange} id="dni" name="dni" type="text" placeholder={cliente.dni} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="pasaporte">Pasaporte</label>
                  <input value={cliente.pasaporte} onChange={handleChange} id="pasaporte" name="pasaporte" type="text" placeholder={cliente.pasaporte} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="provincia">Provincia</label>
                  <input value={cliente.provincia} onChange={handleChange} id="provincia" name="provincia" type="text" placeholder={cliente.provincia} style={{ display: "flex", margin: ".5em 0em" }} />
                </span>
                <span>
                  <label htmlFor="estado">Estado</label>
                  <select type='number' id="estado-cliente" value={cliente.estado} onChange={handleEstado} name='estado' style={{ display: "flex", margin: ".5em 0em" }}>
                    <option type='number' value='1'>A consultar</option>
                    <option type='number' value='2'>Pendiente de respuesta</option>
                    <option type='number' value='3'>Descartado</option>
                    <option type='number' value='4'>Hecho</option>
                  </select>
                </span>
              </Formulario>
            </Box>
            <Boton style={{ backgroundColor: `${currentColor}`, width:'fit-content' }} className={'rounded-xl'} onClick={actualizar}>Actualizar</Boton>
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

export const Box = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 33vh;

  span {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }
  
  textarea, input, select {
    border: solid 1px grey;
    padding: .5em 1em;
    border-radius: 10px;
    margin-bottom: 1em;
  }

  @media (max-width: 1020px) {
    height: fit-content;
  }
`;

export const ModForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-top: 1em;
`;

export const Input = styled.input`
  width: 90%;
  padding: .5em;
`;

export const Boton = styled.button`
  width: 40%;
  margin: 1em 0em;
  padding: .5em;
  color: white;
`;