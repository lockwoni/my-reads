import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import SearchPage from './SearchPage.js'
import ListBooks from './ListBooks.js'
import './App.css'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks />
        )}/>
        <Route path ='/search' render={() => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
