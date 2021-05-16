import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MyHighlights from './components/MyHighlights';
import More from './components/More';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="main-container">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myhighlights" component={MyHighlights} />
            <Route path="/more" component={More} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
