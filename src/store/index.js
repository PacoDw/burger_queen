import { createStore,  applyMiddleware,  compose } from 'redux'
import thunk from 'redux-thunk'

import combineReducers from './../reducers';

const initialState = {
  menu: {
    totalOrder:0, 
    isMenuClean:true, 
    clientName:"", 
    showDialog: false,
    loadingSendData: false,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers, 
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)
