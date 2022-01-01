import React from "react";
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import "./App.css";
import { Hug , M3lsh,Home } from './components';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/hug">
        
        <Hug />
    
      </Route>

      <Route path="/m3lsh">
        <M3lsh />
      </Route>
      </Switch>

    </Router>

  );
}

export default App;
