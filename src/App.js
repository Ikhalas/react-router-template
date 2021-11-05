import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Item from "./screens/Item";
import User from "./screens/User";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/User" component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
