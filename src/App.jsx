import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './utils/history';
import Pages from './pages/index.jsx';

function App() {
  return (
    <Router history={history}>
      <Pages />
    </Router>
  );
}

export default App;
