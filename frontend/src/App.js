import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./pages/MainPage.css";
import "./components/BackgroundPicture.css";
import "./components/FAQComponent.css";
import "./components/Footer.css";
import "./components/LinkButton.css";
import "./components/Navbar.css";
import "./components/ProfileComponent.css";
import "./components/SocialLogos.css";
import "./components/Tables.css";
import "./components/TextSection.css";
import "./components/forms/LoginForm.css";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Apply from "./pages/Apply";
import FAQ from "./pages/FAQ";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
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
