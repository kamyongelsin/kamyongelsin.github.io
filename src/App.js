import React from 'react';
import Heroes from './Heroes';
import Headers from "./components/Headers";
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Headers />
      <Heroes />
    </React.Fragment>
  );
}

export default App;
