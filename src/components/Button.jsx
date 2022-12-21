import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function Button({ color, size, text, borderRadius, m }) {
  const { currentColor } = useStateContext();
  return (
    <button
      style={{ background: `${currentColor}`, borderRadius, color, margin: `${m}` }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      text={text}
      color={color}
      borderRadius={borderRadius}
      m={m}
    >
      {text}
    </button>
  )
}
