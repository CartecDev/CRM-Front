import React from 'react'
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ThemeSettings from '../components/ThemeSettings'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

export default function Interface({ elemento }) {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      {activeMenu ? (
        <InterfaceDisplay className="interface w-80">
          <div className='relative sidebar dark:bg-secondary-dark-bg bg-white z-50 w-full'>
            <Sidebar />
          </div>
        </InterfaceDisplay>
      ) : (
        <InterfaceDisplay className="interface w-0">
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        </InterfaceDisplay>
      )}
      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
    </>
  )
}

export const InterfaceDisplay = styled.div`
  display: flex;
  position: relative;
  transition: .2s;
  div {
    @media (max-width: 900px) {
      width: 15em;
    }
  }
`;
