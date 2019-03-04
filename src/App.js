import React, { Component } from 'react'
import SideBar from './interface/SideBar'
import Page from './interface/Page'
import RecipeBrowseRoute from './recipes/RecipeBrowseRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideBar />
        <Page>
          <RecipeBrowseRoute />
        </Page>
      </div>
    )
  }
}

export default App
