import './app.scss'

// ES6 Promise polyfill
import promise from 'es6-promise'
promise.polyfill()

// Create Redux store
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)
const store = createStoreWithMiddleware(rootReducer)

// Bind store with ReactModel
import { bindDispatch } from 'react-model'

bindDispatch(store.dispatch)

// useRouterHistory creates a composable higher-order function
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// render
import React from 'react'
import { render } from 'react-dom'

import Main from './components/Main'
import * as Units from './components/units'

render((
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={Main}>
        <IndexRoute components={Units}/>
        <Route path="units" components={Units}/>
        <Route path="units/:id" components={Units}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
