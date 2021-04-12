import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';
import HomePage  from './cmps/Home/HomePage';
import Galeria  from './cmps/Galeria/Galeria';
import AcercaDe from './cmps/AcercaDe/AcercaDe';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path="/" >
            <HomePage/>
          </Route>
          <Route exact path="/galeria" >
            <Galeria/>
          </Route>
          <Route exact path="/acercade" >
            <AcercaDe/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
