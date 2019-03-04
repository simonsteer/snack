import React from 'react'
import './Page.css'
import BrowseHistory from '../BrowseHistory'

const Page = ({ children, browseHistory }) => (
  <main className="interface-page">
    {!!browseHistory && (
      <BrowseHistory history={browseHistory} style={{ width: '100%' }} />
    )}
    {children}
  </main>
)

export default Page
