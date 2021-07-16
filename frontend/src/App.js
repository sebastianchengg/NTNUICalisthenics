import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Apply from "./pages/Apply";
import EditPassword from "./pages/EditPassword";
import EditProfile from "./pages/EditProfile";
import FAQ from "./pages/FAQ";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Book from "./pages/Book";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Success } from "./components/error/Success";

const App = () => {
  const { success, setSuccess } = Success();

  return (
    <>
      {success}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/apply" exact component={Apply} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/book" exact component={Book} />
          <Route
            path="/profile/edit"
            exact
            render={(props) => <EditProfile setSuccess={setSuccess} />}
          />
          <Route
            path="/profile/edit-password"
            exact
            render={(props) => <EditPassword setSuccess={setSuccess} />}
          />
          <Route
            path="/reset-password"
            exact
            render={(props) => <ResetPassword setSuccess={setSuccess} />}
          />
          <Route
            path="/reset-password-confirm/token=:token"
            exact
            render={(props) => <ResetPasswordConfirm setSuccess={setSuccess} />}
          />
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
