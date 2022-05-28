import React from 'react'

type EditIconProps = {
  color: string
  width?: string
  height?: string
}

export const EditIcon = ({ color, width = '20', height = '20' }: EditIconProps) => {
  return (
    <svg
      id="i-edit"
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fill="#000"
      fillOpacity="0.1"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
    </svg>
  )
}
