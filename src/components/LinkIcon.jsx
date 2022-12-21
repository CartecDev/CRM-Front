import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ bgColor, color, size, m, borderRadius, icon, to }) {
  return (
    <Link
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius, margin: m }}
      className={`text-${size} p-3 bg-light-gray hover:bg-slate-300`}
      icon={icon}
      to={to}
      m={m}
    >
      {icon}
    </Link>
  )
}
