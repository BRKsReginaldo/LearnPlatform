import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Aux from './hoc/Aux'
import {AuthRoutes} from "./components/Routes";

export class App extends Component {
  render() {
    return (
      <Router>
        <Aux>
          <AuthRoutes/>
        </Aux>
      </Router>
    )
  }
}

export default App
