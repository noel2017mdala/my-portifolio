import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Nav />
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
}

export default App;
