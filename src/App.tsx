import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
