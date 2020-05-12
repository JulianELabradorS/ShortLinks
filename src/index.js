import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './Pages/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxTunk from 'redux-thunk';
import reducers from './reducers';
import './Styles/index.css';

const store = createStore(reducers, {}, applyMiddleware(reduxTunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('Page')
);
