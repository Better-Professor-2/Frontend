import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './login';
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
          <Route exact path='/' component={SignUp} />
          <Route path='/login' component={Login}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
