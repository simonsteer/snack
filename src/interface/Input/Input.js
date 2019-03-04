import React from 'react'
import './Input.css'

const Input = ({ name }) => (
  <input
    type="text"
    id={`input-${name}`}
    name={name}
    className="interface-input"
  />
)

export default Input
