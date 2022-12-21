import styled from '@emotion/styled';
import LinkButton from '../components/LinkButton.jsx';
import { LOGIN, DASHBOARD } from '../config/router/paths.js';
import { useAuthContext } from '../contexts/authContext';

export default function Home() {
  const { isAuthenticated } = useAuthContext();

  return (
    <HomeScreen>
      <Access>
        <img src='/img/logo-cartec.png' />
        <h2>Alsa's Digital Consulting CRM</h2>
        <div>
          {isAuthenticated ? (
            <LinkButton to={PRIVATE} text='Sección privada' color='white' borderRadius='15px' />
          ) : (
            <LinkButton to={LOGIN} text='Iniciar sesión' color='white' borderRadius='15px' />
          )}
        </div>
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
    </HomeScreen>
  );
}

export const HomeScreen = styled.div`
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
    line-height: 1em;
  }

  h2 {
    margin: 2em 0em;
    color: grey;
  }

  div {
    display: flex;
  }
`;

export const Access = styled.div`
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


  a {
    font-size: xx-large;
    padding: 1em;
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