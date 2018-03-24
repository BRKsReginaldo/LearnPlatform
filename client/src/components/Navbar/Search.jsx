import React from 'react'

export default () => (
  <div className="navbar__search">
    <div className="quick-search__form">
      <form>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="q" className="sr-only">Pesquisar:</label>
            <input type="text" className="quick-search__input"/>
            <span className="input-group-btn">
                  <button className="quick-search__button" aria-label="Pesquisar">
                    <span className="fa fa-search"/>
                  </button>
                </span>
          </div>
        </div>
      </form>
    </div>
  </div>
)