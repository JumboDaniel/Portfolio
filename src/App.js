import React, { useEffect, useState } from 'react';
import Body from './components/body'
import Navbar from './components/sidenav'
import Gamer from './components/Gamer/gamer'
import Bio from './components/about/bio';
import Project from'./components/projects/project';
import Clock from './components/Clock'
import Blog from './components/blog/blog'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);


  return (
    <div>
      {(loading === false) ? 
      <div className='font-sans'>
      <Navbar/>
          <TransitionGroup>
            <CSSTransition 
            timeout={300} 
            classNames='fade'  
            key={location.key}
            >
              <Switch location={location}>
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
                <Route path='/blog'>
                  <Blog/>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      </div>
      : 
      <div className=' flex flex-row items-center px-64 py-64 justify-center inset-0 '>
        <Clock/>
      </div>
      }
    </div>
  );
}

export default App;
