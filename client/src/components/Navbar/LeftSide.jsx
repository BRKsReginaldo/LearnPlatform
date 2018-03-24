import React from 'react'
import Search from "./Search";

export default () => (
  <div className="navbar__left">
    <button className="navbar__mobile-button"
            aria-label="Menu">
      <span className="fa fa-bars"/>
    </button>
    <div className="navbar__search-wrapper">
      <div className="navbar__search-button navbar__mobile-button">
        <span className="fa fa-search"/>
      </div>
      <Search/>
    </div>
  </div>
)