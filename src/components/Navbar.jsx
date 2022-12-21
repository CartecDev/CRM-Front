import React from 'react';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { LOGOUT, VER_PERFIL } from '../config/router/paths';
import { NavLink } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import styled from 'styled-components';
import '../dropdownUser.css'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

export default function Navbar() {
  const { currentColor, activeMenu, setActiveMenu, isClicked, setScreenSize, screenSize, currentUser } = useStateContext();
  const user = window.localStorage.getItem("user");
  const parsedUser = JSON.parse(user);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black hover:bg-emerald-100 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white hover:bg-emerald-100 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <Main className="flex justify-between p-2 md:ml-3 md:mr-3 relative">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <TooltipComponent content="Profile" position="BottomCenter">
          <DropdownMenu className="dropdown flex items-center gap-2 cursor-pointer p-1">
            <button className='dropbtn p-1 flex flex-row hover:bg-slate-200 rounded-lg items-center px-3'>
              <FaUser style={{ color: 'gray', width: '.7em', marginRight: '.5em' }} />
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                {/* Aquí habrá que poner el nombre que obtengamos de la api (del usuario logged) */}
                {parsedUser.username}
              </span>
            </button>
            <div className='dropdown-content'>
              <Arrow></Arrow>
              <NavLink to={VER_PERFIL}>Ver perfil</NavLink>
              <hr />
              <NavLink to={LOGOUT} className='hover:bg-slate-200 rounded-lg' style={{ display: 'flex', flexDirection: 'row', color: '#ff8282' }} >
                <IoLogOut className='text-black' style={{ color: '#ff8282', width: '1.5em', height: '100%' }} /> Salir
              </NavLink>
            </div>
          </DropdownMenu>
        </TooltipComponent>
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </Main>
  );
}

export const Main = styled.div`
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  margin: 0;
  background-color: #ffffff7d;
  backdrop-filter: blur(10px);
`;

export const DropdownMenu = styled.div``;

export const Arrow = styled.div`
  width: .5em;
  height: .5em;
  background: #f0f0f0;
  align-self: center;
  transform: rotate(45deg);
  margin: auto;
  position: relative;
  top: -0.2em;
`;