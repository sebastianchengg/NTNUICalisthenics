import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
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
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
