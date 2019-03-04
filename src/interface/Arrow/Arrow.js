import React from 'react'
import './Arrow.css'

const Arrow = ({
  direction = 'left',
  color = 'black',
  size = 22,
  style = {},
  onClick = null,
}) => (
  <div
    onClick={onClick}
    className={`interface-arrow ${direction}`}
    style={{
      borderWidth: `${size / 2}px ${size}px ${size / 2}px 0`,
      borderColor: `transparent ${color} transparent transparent`,
      ...style,
    }}
  />
)

export default Arrow
