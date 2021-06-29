import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
};

export default Routes;
