import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import './shared/reset.scss';

ReactDom.render(
  <App />,
  document.querySelector('#root')
);