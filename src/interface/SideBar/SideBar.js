import React from 'react'
import './SideBar.css'
import Text from '../Text'

const NAVIGATION_LINK_SETS = [
  [
    {
      text: 'Add a Recipe',
      url: 'add',
    },
    {
      text: 'Saved',
      url: 'saved',
    },
    {
      text: 'My Recipes',
      url: 'recipes/:user_id',
    },
  ],
  [
    {
      text: 'Browse',
      url: 'browse',
    },
    {
      text: 'Search',
      url: 'search',
    },
  ],
  [
    {
      text: 'Settings',
      url: 'settings',
    },
    {
      text: 'Help',
      url: 'help',
    },
  ],
]

const SideBar = () => (
  <aside className="interface-sidebar">
    <nav>
      <ul>
        {NAVIGATION_LINK_SETS.map((linkSet, setIndex) =>
          linkSet.map(({ text, url }, index) => (
            <li
              key={`navigation-link-${setIndex}-${index}`}
              style={setIndex !== 0 && index === 0 ? { marginTop: '20px' } : {}}
            >
              <Text color="white">
                <a href={url}>{text}</a>
              </Text>
            </li>
          ))
        )}
      </ul>
    </nav>
  </aside>
)

export default SideBar
