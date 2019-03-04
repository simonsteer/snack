import React from 'react'
import './Image.css'

const Image = ({ source, style }) => (
  <img className="interface-image" src={source} style={style} />
)

export default Image
