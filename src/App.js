import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import City from "./components/city";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Test from "./components/test";
import Day from "./components/day";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/zeroTo40/city/day" component={Day} />
            <Route path="/zeroTo40/:name" component={City} />

            <Route path="/zeroTo40" component={Test} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
