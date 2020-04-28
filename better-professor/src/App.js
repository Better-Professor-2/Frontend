import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './login';
import SignUp from './components/SignUp';





function App() {
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </header>
        <Switch>
          <Route component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
