import React, { Component, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import Draft from "../Draft/CreateDraft"
import DisplayEntry from "../DisplayEntry/DisplayEntry";
import EntryIndex from "../EntryIndex/EntryIndex";
import AddQuote from "../AddQuote/AddQuote";
import CreateDraft from "../Draft/CreateDraft";

//Navbar, form pages, entries, searches, profile

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users user={this.state.user} /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/entries/index"
          render={() => <AddQuote user={this.state.user} />}
        />
        <Route
          exact
          path="/draft"
          render={(location) => <CreateDraft
            user={this.state.user}
            location={location}
          />}
        />
      </>
    );
  }
}

export default App;
