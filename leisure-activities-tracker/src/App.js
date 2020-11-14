import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Habits from "./components/pages/Habits";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/habits" component={Habits} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
