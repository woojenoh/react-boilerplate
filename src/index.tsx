import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './shared/reset.scss';
import './index.scss';

ReactDom.render(
  <App />,
  document.querySelector('#root'),
);