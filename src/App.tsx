import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home';
import AppBar from './AppBar';
import PNF from './assets/Pages/PNF';

function App() {
  return (
    <div>
      <AppBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PNF />} />
        </Routes>
      </div>
    </div>

  );
}
export default App;