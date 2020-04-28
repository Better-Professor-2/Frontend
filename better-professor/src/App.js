import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';


function App() {
  return (
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
