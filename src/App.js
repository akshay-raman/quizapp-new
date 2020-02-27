import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from './components/signup/SignUp'
import Home from './components/home/Home';
import AddQuestions from './components/questions/AddQuestions';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={ Login } >
          </Route>
          <Route exact path="/signup" component={ SignUp } >
          </Route>
          <Route exact path="/home" component={ Home } >
          </Route>
          <Route exact path="/addquestion" component={ AddQuestions } >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
