import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StudentPage from './components/StudentPage'
import PrivateRoute from './components/PrivateRoute'


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
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/protected" component={StudentPage}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
