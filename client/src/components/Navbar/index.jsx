import React, {Component} from 'react'
import Logo from "./Logo";
import LeftSide from "./LeftSide";
import Spacer from "./Spacer";
import RightSide from "./RightSide";

export class Navbar extends Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div className={['navbar'].join(' ')}>
        <div className={["navbar__inner"].join(' ')}>
          <Logo/>
          <LeftSide/>
          <Spacer/>
          <RightSide/>
        </div>
      </div>
    )
  }
}

export default Navbar
