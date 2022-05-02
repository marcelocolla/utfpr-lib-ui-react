import React from 'react'

type ArrowLeftIconProps = {
  width?: string
  height?: string
}

export const ArrowLeftIcon = ({ width = '8', height = '14' }: ArrowLeftIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="https://www.w3.org/2000/svg">
      <path d="M7 13L1 7L7 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
