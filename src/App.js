import React from "react";

import Login from "./Login";
import Home from "./Home";
import Callback from "./Callback";
import Error from "./Error";
import RefreshToken from "./RefreshToken";
import MovieDetails from "./MovieDetails";

import "./css/home.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { CssReset } from "@dhis2/ui-core/build/es/CssReset";

const App = () => {
  return (
    <div className="App">
      {/* Krunglete og dårlig løsning men grunnet tidspress så ble det slik */}
      <RefreshToken />
      <CssReset />
      <Router>
        {localStorage.length === 0 && <Redirect to="/login" />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
          <Route path="/movie/:id" exact component={MovieDetails} />
          {/* need to check whether accesstoken exists and expiration date is more then an hour ago refresh, if not then call login page */}
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
