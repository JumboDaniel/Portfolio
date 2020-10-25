import React from 'react';
import './App.css';
import Sidenav from './sidenav';
import Body from './body'

function App() {
  return (
    <div className="grid md:grid-cols-3">
        <Body/>
        <Sidenav/>
    </div>
  );
}

export default App;
