import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function LinkButton({ color, size, text, borderRadius, to, logo }) {
    const { currentColor } = useStateContext();
  return (
    <Link
      style={{ background: `${currentColor} `, borderRadius, color }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      text={text}
      to={to}
      borderRadius={borderRadius}
      color={color}
      logo={logo}
    >
      {text}
      {logo}
    </Link>
  )
}
