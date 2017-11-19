import React from 'react'

import logo from '../assets/logo.svg'
import '../assets/App.css'

const HeaderComponent = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Password Manager</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Password Manager</h1>
    </header>
  </div>
)

export default HeaderComponent
