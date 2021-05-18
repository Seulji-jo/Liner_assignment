import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MyHighlights from './components/MyHighlights';
import More from './components/MorePage';
import Detail from './components/Detail';
import HlDetail from './components/HlDetail';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="main-container">
          <Navigation />
          <Switch>
            <Route
              exact
              path="/myhighlights/pages/:dataId"
              component={HlDetail}
            />

            <Redirect
              exact
              from="/myhighlights"
              to="/myhighlights/highlights"
            />
            <Route path="/myhighlights" component={MyHighlights} />

            <Route path="/home/pages/:dataId" component={Detail} />
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />

            <Route path="/more" component={More} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
