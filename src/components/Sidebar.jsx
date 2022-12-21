import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CLIENTES, CONSULTAS, CALENDARIO, LOGOUT } from '../config/router/paths';
import { HiComputerDesktop, HiCalendar, HiUserGroup, HiDocumentText } from 'react-icons/hi2';
import { MdOutlineCancel } from 'react-icons/md';
import { IoLogOut } from "react-icons/io5";

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import styled from 'styled-components';

export default function Sidebar() {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black hover:bg-emerald-100 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white hover:bg-emerald-100 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className=' w-full md:pl-3 h-screen
    md:overflow-hidden
    md:hover:overflow-y-auto pb-10 shadow-xl'>
      {activeMenu && (<>
        {/* SIDEBAR HEADER */}
        <div className="flex justify-between
        items-center w-full" style={{ justifyContent: 'space-between' }}>
          <Link to="/" onClick={() => setActiveMenu(false)}
            className="items-center gap-3 ml-3
            mt-4 flex text-xl font-extrabold
            tracking-tight dark:text-white
            text-slate-900"
            style={{ width: '-webkit-fill-available' }}>
            {/* <img src='/favicon.png' className='w-10' />  */}
            <span>CRM Alsa</span>
          </Link>
          <TooltipComponent context="Menu" position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text xl- rounded-full
            p-3 hover:bg-light-gray mt-4 block
            md:hidden" >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        {/* SIDEBAR SECTIONS & LINKS */}
        <LinksSidebar className='mt-10'>
          <div className='text-gray-400 m-3 mt-4 uppercase'>DASHBOARD</div>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeLink : normalLink}>
            <HiComputerDesktop className='text-black' /> <span className='capitalize'>Inicio</span>
          </NavLink>

          <div className='text-gray-400 m-3 mt-4 uppercase'>PAGES</div>
          <NavLink to={CLIENTES} className={({ isActive }) => isActive ? activeLink : normalLink}>
            <HiUserGroup className='text-black' /> <span className='capitalize'>Clientes</span>
          </NavLink>
          <NavLink to={CONSULTAS} className={({ isActive }) => isActive ? activeLink : normalLink}>
            <HiDocumentText className='text-black' /> <span className='capitalize'>Consultas</span>
          </NavLink>

          <div className='text-gray-400 m-3 mt-4 uppercase'>APPS</div>
          <NavLink to={CALENDARIO} className={({ isActive }) => isActive ? activeLink : normalLink}>
            <HiCalendar className='text-black' /> <span className='capitalize'>Calendario</span>
          </NavLink>
        </LinksSidebar>
      </>)}
    </div>
  )
}

export const LinksSidebar = styled.div`

`;