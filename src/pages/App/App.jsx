import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Dashboard from "../Dashboard/Dashboard";
import AddQuote from "../AddQuote/AddQuote";
import CreateDraft from "../Draft/CreateDraft";
import EntryIndex from "../EntryIndex/EntryIndex";
import DisplayEntry from "../DisplayEntry/DisplayEntry";
import "./App.css";

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
              <h1>Welcome to Wryters Flock</h1>
              <div>
                <p>Go to your dashboard to start drafting your next masterpeice or 
                  check out View Posts under Explore to see what other writers have posted.
                </p>
              </div>
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
          path="/dashboard"
          render={() => (user ? <Dashboard user={this.state.user} /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/quote"
          render={() => <AddQuote user={this.state.user} />}
        />
        <Route
          exact
          path="/entries"
          render={() => <EntryIndex
            user={this.state.user}
          />}
        />
        <Route
          exact
          path="/entry"
          render={({ history, location }) => <DisplayEntry
            history={history}
            location={location}
            user={this.state.user}
          />}
        />
        <Route
          exact
          path="/draft"
          render={({ history }) => <CreateDraft
            history={history}
            user={this.state.user}
          />}
        />
      </>
    );
  }
}

export default App;
