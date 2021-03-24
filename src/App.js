import React from 'react';
import Body from './components/body'
import Navbar from './components/sidenav'
import Gamer from './components/Gamer/gamer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bio from './components/about/bio';
import Project from'./components/projects/project'
function App() {
  return (
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
  );
}

export default App;
