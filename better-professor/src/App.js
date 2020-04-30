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
            
            <Link to="/marketing-page">Marketing Page</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={StudentPage} />
          <Route path='/marketing-page' component={() => {
            window.location.href = 'https://nervous-wozniak-8486ab.netlify.app/index.html';
            return null;
          }} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
