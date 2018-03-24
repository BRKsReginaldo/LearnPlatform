import React from 'react'
import logoCoral from '../../assets/logo-coral.svg'

export default () => (
  <div className={["navbar__logo-container"].join(' ')}>
    <a href="/"
       className={["navbar__logo-wrap"].join(' ')}>
      <img
        className={['navbar__logo'].join(' ')}
        src={logoCoral}
        alt="Logo"/>
    </a>
  </div>
)