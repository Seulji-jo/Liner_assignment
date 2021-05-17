import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MyHighlights from './components/MyHighlights';
import More from './components/MorePage';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="main-container">
          <Navigation />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/pages/:dataId" component={Home} />
            <Route exact path="/myhighlights" component={MyHighlights} />
            <Route path="/myhighlights/pages/:dataId" component={Home} />
            <Route path="/more" component={More} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
