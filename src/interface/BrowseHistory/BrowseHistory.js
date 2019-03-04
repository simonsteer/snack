import React from 'react'
import Text from '../Text'
import Arrow from '../Arrow'
import './BrowseHistory.css'

const BrowseHistory = ({ size, history, hasArrow, style }) => (
  <nav className={`interface-browsehistory ${size}`} style={style}>
    {!!hasArrow && <Arrow size={15} style={{ marginRight: '20px' }} />}
    {history.map(({ name, url }, index) => {
      const isLastItem = index === history.length - 1
      return (
        <Text
          key={`browse-history-${index}`}
          size={size}
          color={isLastItem ? 'black' : 'rgba(0,0,0,0.3)'}
        >
          <a href={url}>{name}</a>
          {!isLastItem && ' / '}
        </Text>
      )
    })}
  </nav>
)

BrowseHistory.defaultProps = {
  size: 'md',
  hasArrow: false,
  style: {},
}

export default BrowseHistory
