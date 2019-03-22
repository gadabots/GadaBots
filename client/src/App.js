import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import './App.css';
import AppNavbar from "./components/AppNavbar"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./pages/Home";
import botPorfile from "./pages/botPorfile";
import userPorfile from "./pages/userPorfile";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <AppNavbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/botPorfile" component={botPorfile} />
          <Route exact path="/userPorfile" component={userPorfile} />
          <Route exact path="*" component={NoMatch} />
          </Switch>
        <Footer />
      </div>
      </Router>
    </Provider>
    )
        }
}

export default App;
