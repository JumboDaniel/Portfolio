import React, { useEffect, useState } from 'react';
import Body from './components/body'
import Navbar from './components/sidenav'
import Gamer from './components/Gamer/gamer'
import Bio from './components/about/bio';
import Project from'./components/projects/project';
import Clock from './components/Clock'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  }, [])

  return (
    <div>
      {(loading === false) ? 
      <Router className='font-sans'>
      <Navbar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route path='/bio'>
              <Bio/>
            </Route>
            <Route path='/project'>
              <Project/>
            </Route>
            <Route path='/gamer'>
              <Gamer/>
            </Route>
          </Switch>
        </div>
      </Router>
      : 
      <Clock/>
      }
    </div>
  );
}

export default App;
