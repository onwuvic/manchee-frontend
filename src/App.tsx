import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
