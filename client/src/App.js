import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./pages/Home";
import botPorfile from "./pages/botPorfile";
import userPorfile from "./pages/userPorfile";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/botPorfile" component={botPorfile} />
          <Route exact path="/userPorfile" component={userPorfile} />
          <Route exact path="/signUp" component={signUp} />
          <Route exact path="/signIn" component={signIn} />
          <Route exact path="*" component={NoMatch} />
          </Switch>
        <Footer />
      </div>
    </Router>
    )
        }
}

export default App;
