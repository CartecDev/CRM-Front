import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Interface from '../components/Interface'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import LinkIcon from '../components/LinkIcon'
import { MdArrowBack } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ThemeSettings from '../components/ThemeSettings'


export default function NewConsulta() {
  const { currentColor } = useStateContext();
  const { themeSettings } = useStateContext();
  const { id } = useParams();
  const [fecha, setFecha] = useState('');
  const [tipo, setTipo] = useState();
  const [id_canal, setCanal] = useState();
  const navigate = useNavigate();
  const urlPost = "https://crmcar-tec-production.up.railway.app/api/consulta-cliente";
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY2ODYyNjY0fQ.IWGsWOdV8-1fy5lvAPxMxi11eX7DRE30omWwAnjkONk'
    }
  }

  const [consulta, setConsulta] = useState({
    fecha: "",
    tipo: 1,
    descripcion: "",
    id_canal: 1,
    id_cliente: `${id}`
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setConsulta({
      ...consulta,
      [evt.target.name]: value
    });
  }
  const handleDate = (evt) => {
    const i = evt.target.value;
    const value = i + 'Z';

    setFecha({
      ...fecha, [evt.target.name]: value
    });
    console.log(fecha)
  }

  const handleTipo = (event) => {
    const i = parseInt(event.target.value);
    setTipo(i);
  };
  
  const handleCanal = (event) => {
    const i = parseInt(event.target.value);
    setCanal(i);
  };

  const submitConsulta = () => {
    const finalConsulta = consulta;
    finalConsulta.tipo = tipo;
    finalConsulta.id_canal = id_canal;
    finalConsulta.fecha = fecha.fecha;
    axios.post(urlPost, consulta, config)
      .then(res => console.log(res))
      .then(alert('⚙️ Creando cliente'));
      
    console.log(finalConsulta);
    navigate('/dashboard/consultas');
  }

  const verConsulta = () => {
    console.log(fecha)
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
            <Header title="Nueva consulta" category="Page" />
            <LinkIcon className="bg-light-gray" color="black" borderRadius="50%" to="/dashboard/consultas" icon={<MdArrowBack className='text-xl' />} />

            <Box>
              <Formulario>
                <span>
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea name='descripcion' value={consulta.nombre} onChange={handleChange} id="descripcion" maxLength="255" />
                </span>
                <span>
                  <label htmlFor="fecha">Fecha</label>
                  <input type='datetime-local' onChange={handleDate} name='fecha' id='fecha'></input>
                </span>
                <span>
                  <label htmlFor="tipo">Tipo</label>
                  <select name="tipo" id="tipo" value={tipo} type='number' onChange={handleTipo}>
                    <option type='number'>Tipo</option>
                    <option type='number' value='1'>Stage 1</option>
                    <option type='number' value='2'>Stage 2</option>
                    <option type='number' value='3'>Stage 3</option>
                    <option type='number' value='4'>Taller</option>
                    <option type='number' value='5'>Otros</option>
                  </select>
                </span>
                <span>
                  <label htmlFor="id_canal">Canal</label>
                  <select name="id_canal" id="id_canal" value={id_canal} type='number' onChange={handleCanal}>
                    <option type='number'>Canal</option>
                    <option type='number' value='1'>Llamada</option>
                    <option type='number' value='2'>Whatsapp</option>
                    <option type='number' value='3'>Mail</option>
                    <option type='number' value='4'>Presencial</option>
                  </select>
                </span>
              </Formulario>
            </Box>
            <button style={{ backgroundColor: `${currentColor}` }} className="m-0 w-fit px-5 py-3 rounded-xl text-white" onClick={submitConsulta}>Crear</button>
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
  height: 28vh;

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
  
  textarea {
    height: 21vh;
  }

  @media (max-width: 1020px) {
    height: fit-content;
  }
`;
