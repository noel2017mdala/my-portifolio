import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Route>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;
