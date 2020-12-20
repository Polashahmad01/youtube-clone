import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import RecommendVideo from './component/RecommendVideo/RecommendVideo';
import SearchPage from './component/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__body">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__body">
              <Sidebar />
              <RecommendVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
