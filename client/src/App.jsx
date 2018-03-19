import React, {Component} from 'react'

export class App extends Component {
  static propTypes = {}

  state = {
    jhon: 'doe'
  }

  render() {
    return (
      <div>
        <div>Welcome to App {this.state.jhon}</div>
      </div>
    )
  }
}

export default App
