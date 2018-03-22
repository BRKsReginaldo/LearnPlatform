import {createStore, compose, applyMiddleware} from 'redux'
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const composeEnhancers = window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)