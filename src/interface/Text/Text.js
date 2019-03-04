import React, { createElement } from 'react'
import './Text.css'

const Text = ({
  size,
  center = false,
  color = 'black',
  block,
  children,
  inheritColor = false,
  underline = false,
  element = 'span',
  style = {},
}) => {
  const mergedStyles = { color }
  if (inheritColor) {
    style.color = 'inherit'
  }
  if (underline) {
    style.textDecoration = 'underline'
  }
  if (center) {
    style.textAlign = 'center'
  }

  const text = createElement(
    element,
    {
      className: `interface-text ${size}`,
      style: { ...mergedStyles, ...style },
    },
    children
  )

  return block ? (
    <p className={`interface-text wrapper-${size}`}>{text}</p>
  ) : (
    text
  )
}

Text.defaultProps = {
  size: 'md',
}

export default Text
