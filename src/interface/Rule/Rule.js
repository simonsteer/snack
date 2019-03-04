import React from 'react'
import './Rule.css'

const Rule = ({ color = 'black', style = {} }) => (
  <div
    className="interface-rule"
    style={{ backgroundColor: color, ...style }}
  />
)

export default Rule
