import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Interface from '../components/Interface'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';


export default function EnviarMail() {
  const { setCurrentColor, setCurrentMode, themeSettings, currentColor } = useStateContext();
  const navigate = useNavigate();

  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [mailBody, setMailBody] = useState({
    from: 's.moyano@car-tec.es',
    subject: '',
    text: ''
  });
  const urlGET = `https://crmcar-tec-production.up.railway.app/api/cliente/${id}`;
  const urlPOST = `https://crmcar-tec-production.up.railway.app/api/cliente/enviarMail`;
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }
  async function getClient() {
    const res = await axios.get(urlGET, config)
    await setCliente(res.data)
  }

  useEffect(() => {
    getClient();
  }, [])
  
  useEffect(() => {
    mailBody.to = cliente.email;
  }, [cliente])

  const handleMail = (evt) => {
    const value = evt.target.value;
    setMailBody({
      ...mailBody,
      [evt.target.name]: value
    });
    console.log(mailBody)
  }

  const enviarMail = () => {
      const confirmar = confirm('Confirmar envio de mail')
      if (confirmar) {
        console.log(mailBody)
        axios.post(urlPOST, mailBody, config)
          .then(alert('Mail enviado correctamente'));
        navigate('/dashboard/clientes')
      }
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
            <Header title="Enviar Mail" category="Email client" />
            <Formulario>
              <label htmlFor='to'>Email</label>
              <input type='text' id='to' name='to' onChange={handleMail} placeholder={cliente.email} value={mailBody.to} />
              <label htmlFor='subject'>Asunto</label>
              <input type='text' id='subject' name='subject' onChange={handleMail} />
              <label htmlFor='text'>Texto</label>
              <textarea id='text' name='text' onChange={handleMail} />
              <span>
                <button style={{ backgroundColor: `${currentColor}` }} className="m-0 w-full rounded-xl text-white" onClick={enviarMail}>Enviar</button>
              </span>
            </Formulario>
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

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;

  input, textarea {
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 15px;
    margin-bottom: 1em;
  }
  
  textarea {
    height: 30vh;
  }

  span {
    display: flex;
    justify-content: center;
  }

  button {
    width: fit-content;
    padding: 1em 2em;
  }
`;