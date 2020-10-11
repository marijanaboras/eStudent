import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error404 from './components/pages/Error404';
import Home from './components/pages/Home';
import Zabava from './components/pages/Kupi'

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kupi' exact component={Zabava} />
          <Route path='/model-s' exact component={Error404} />
          <Route path='/model-3' exact component={Error404} />
          <Route path='/model-x' exact component={Error404} />
        </Switch>
      </Router>
  );
}

export default App;
