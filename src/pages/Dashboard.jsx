import { useState, useEffect, useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ThemeSettings from '../components/ThemeSettings'
import Interface from '../components/Interface';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CLIENTES, CONSULTAS, CALENDARIO, EMAIL } from '../config/router/paths';
import { HiCalendar, HiUserGroup, HiDocumentText } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import Reloj from '../components/Reloj';
import Tiempo from '../components/Tiempo';

export default function Dashboard() {
  const { setCurrentColor, setCurrentMode, themeSettings, currentColor } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

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
            <Header title="Inicio" category="Hola de nuevo!" />
            <RowContainer>
              <Reloj />
              <Tiempo />
            </RowContainer>
          </div>

          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 bg-white rounded-3xl'>
            <RowContainer>
              <AccesoMenu to={CLIENTES} colorBg={currentColor}>
                <HiUserGroup />
                <p>Clientes</p>
              </AccesoMenu>
              <AccesoMenu to={CONSULTAS} colorBg={currentColor}>
                <HiDocumentText />
                <p>Consultas</p>
              </AccesoMenu>
              <AccesoMenu to={CALENDARIO} colorBg={currentColor}>
                <HiCalendar />
                <p>Calendario</p>
              </AccesoMenu>
              <AccesoMenu to={EMAIL} colorBg={currentColor}>
                <HiMail />
                <p>Email</p>
              </AccesoMenu>
            </RowContainer>
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

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  div {
    margin-bottom: .5em;
  }
`;

export const AccesoMenu = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 2em;
  width: 20%;
  margin-bottom: 1em;
  
  svg {
    font-size: xxx-large;
  }

  p {
    font-size: large;
  }

  &:hover {
    background: ${props => props.colorBg};
    color: white
  }

  @media (max-width: 700px) {
    width: 30%;
  }
  @media (max-width: 490px) {
    width: 48%;
  }
  @media (max-width: 250px) {
    width: 98%;
  }
`;