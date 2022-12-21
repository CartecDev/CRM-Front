import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Interface from '../components/Interface';
import Navbar from '../components/Navbar';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../contexts/ContextProvider';

export default function MailInbox() {
  const { setCurrentColor, setCurrentMode, themeSettings, currentColor } = useStateContext();
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
            <Header title="Email" category="Email client" />
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