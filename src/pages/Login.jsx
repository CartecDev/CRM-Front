import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../contexts/authContext';
import Button from '../components/Button';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {
  const urlConnect = `https://crmcar-tec-production.up.railway.app/api/login`;
  const urlGet = `https://crmcar-tec-production.up.railway.app/api/usuario`;
  const config = {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY5OTcyMDM1fQ.W9sj98_nWlBzfWDCTseZJyrR80B0QtFpRBDso41zP1M'
    }
  }
  const [resultado, setResultado] = useState([])
  const [loginError, setLoginError] = useState(false);
  const { login } = useAuthContext();
  const { setUser, currentUser } = useStateContext();

  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  }
  )

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUsuario({
      ...usuario,
      [evt.target.name]: value
    });
  }

  async function connection() {
    try {
      const res = await axios.post(urlConnect, usuario, config);
      await setResultado(res.data);
    } catch (error) {
      setLoginError(true)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    connection();
  }

  async function getUser(url) {
    const res = await axios.get(url, config)
    await setUser(res.data)
    await login()
  }
  
  useEffect(() => {
    if (resultado[0]) {
      const customUrl = urlGet + `/${resultado[1]}`;
      getUser(customUrl)
    }
  }, [resultado])

  return (
    <LoginScreen>
      <Access>
        <img src='/img/logo-cartec.png' />
        <form onSubmit={handleSubmit}>
          <p>Login</p>
          <label htmlFor='email'>Email</label>
          <input type="email" value={usuario.email} onChange={handleChange} name='email' id='email' />
          <label htmlFor='password'>Contraseña</label>
          <input type="password" value={usuario.password} onChange={handleChange} name='password' id='password' />
          {loginError && (<span>Usuario o contraseña incorrectos</span>)}
          <Button type="submit" text='Iniciar sesión' color='white' borderRadius='15px' m='1em' />
        </form>
      </Access>
      <Footer>
        <div>
          <img src='/img/alsa-logo.png' />
          <a href='https://a-consulting.eu/'>©2022 Alsa Digital Consulting</a>
        </div>
        <p>
          v1.0
        </p>
      </Footer>
    </LoginScreen>
  );
}

export const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('/img/home_bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: xxx-large;
  }

  h2 {
    margin: 2em 0em;
  }

  div {
    display: flex;
  }
`;

export const Access = styled.div`
  width: 35%;
  background-color: #00000091;
  backdrop-filter: blur(25px);
  padding: 7em 8em;
  color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: card-opacity 7s infinite;

  -webkit-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.36);
  -moz-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.36);
  box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.36);

  img {
    margin-bottom: 2em;
  }

  h1 {
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  p {
    font-weight: bolder;
    margin-bottom: 1em;
    color: grey;
  }

  input {
    background-color: #ffffff7a;
    padding: .3em 1em;
    border-radius: 10px;
    margin-bottom: 1em;
  }

  a {
    font-size: xx-large;
    padding: 1em;
  }

  span {
    color: #ff5d5d;
  }

  @keyframes card-opacity {
    0% {
      -webkit-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
      -moz-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
      box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
    } 50% {
      -webkit-box-shadow: inset -27px -26px 300px -8px rgba(174,170,250,0.69);
      -moz-box-shadow: inset -27px -26px 300px -8px rgba(174,170,250,0.69);
      box-shadow: inset -27px -26px 300px -8px rgba(174,170,250,0.69);

    } 100% {
      -webkit-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
      -moz-box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
      box-shadow: inset 12px 6px 212px -11px rgba(0,255,170,0.50);
    }
  }

  @media (max-width: 1550px) {
    width: 55%;
    padding: 5em 5em;
  }
  
  @media (max-width: 950px) {
    width: 90%;
    padding: 5em 5em;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 1.2em;
  background-color: #3d3d3dad;
  color: white;
  padding: .3em .5em;
  justify-content: space-between;

  a:hover {
    color: #00ffab;
    display: flex;
    flex-direction: row;
  }

  img {
    width: 1em;
    height: 1.2em;
    padding: .09em;
    margin-right: 1em;
  }
  
  div {
    display: flex;
    align-items: center;
  }

  p {
    color: #a8a8a8;
  }
`;