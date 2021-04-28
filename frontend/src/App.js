import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./pages/MainPage.css";
import "./components/BackgroundPicture.css";
import "./components/FAQComponent.css";
import "./components/Footer.css";
import "./components/LinkButton.css";
import "./components/Navbar.css";
import "./components/SocialLogos.css";
import "./components/Tables.css";
import "./components/TextSection.css";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Apply from "./pages/Apply";
import FAQ from "./pages/FAQ";
import Leaderboard from "./pages/Leaderboard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
