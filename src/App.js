import React from "react";
import "./App.css";
import Shop from "./shop";
import About from "./About";
import Nav from "./Nav";
import moreDetails from "./moreDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={moreDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const home = () => (
  <div>
    <h3>Lainok Blockchain</h3>
  </div>
);

export default App;
