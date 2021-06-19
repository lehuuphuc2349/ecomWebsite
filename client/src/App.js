import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRender from "./custom/PageRender";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
