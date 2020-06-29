import React from 'react';
import './App.css';
import Reddit from './Reddit';
import Bikes from './Bikes';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Reddit />
      <Bikes />
    </div>
  );
}

export default App;
