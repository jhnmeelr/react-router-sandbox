import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import 'babel-polyfill';
import './styles.scss';

import App from './components/app';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
