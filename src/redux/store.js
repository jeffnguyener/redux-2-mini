import { createStore, applyMiddleware } from 'redux'
import hackerNewsReducer from './hackerNewsReducer'
import promisedMiddleware from 'redux-promise-middleware'

export default createStore(hackerNewsReducer, promisedMiddleware(applyMiddleware))