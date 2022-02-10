import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { rootReducer } from './ducks/reducers'
import thunk from 'redux-thunk'
import logger from "./ducks/middlewares/Logger"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


