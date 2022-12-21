import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'

export default function ThemeSettings() {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Ajustes</p>
          <button type='button'
            onClick={() => setThemeSettings(false)}
            style={{
              color: 'rgb(153, 171, 180)',
              borderRadius: '50%'
            }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#10b981' }}
                  onClick={() => setColor('#10b981')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#10b981' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#10a2b9' }}
                  onClick={() => setColor('#10a2b9')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#10a2b9' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#9854fa' }}
                  onClick={() => setColor('#9854fa')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#9854fa' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#fa5454' }}
                  onClick={() => setColor('#fa5454')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#fa5454' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#eba20d' }}
                  onClick={() => setColor('#eba20d')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#eba20d' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
            <div position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: '#606060' }}
                  onClick={() => setColor('#606060')}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${'#606060' === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
