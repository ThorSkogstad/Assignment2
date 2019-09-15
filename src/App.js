import React, { useState } from "react";
import Login from "./Login";
import NewCard from "./Components/NewCard";
import { Card } from "@dhis2/ui-core/build/es/Card";

import Dummy from "./profile.jpg";
import "./css/home.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CssReset } from "@dhis2/ui-core/build/es/CssReset";
import { InputField } from "@dhis2/ui-core/build/es/InputField";

const App = () => {
  return (
    <div className="App">
      <CssReset />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

const Callback = () => {
  let URL = window.location.href;
  let callback = URL.split("callback#")[1]; // get the second part of the url, the part returned from spotify dev
  //console.log(callback);
  //access_token
  let access_token = callback.split("&")[0];
  //console.log(access_token);
  localStorage.setItem("acces_token", access_token.split("=")[1]);
  //token_type
  let token_type = callback.split("&")[1];
  //console.log(token_type);
  localStorage.setItem("token_type", token_type.split("=")[1]);
  //expiration_time
  let expires_after = callback.split("&")[2];
  //console.log(expires_after);
  localStorage.setItem("expires_after", expires_after.split("=")[1]);
  //state for verification that the application sent the request for a access token
  let state = callback.split("&")[3];
  //console.log(state);
  localStorage.setItem("State", state.split("=")[1]);

  window.location.href = "/"; // returns back to home page
};

const Home = () => {
  const [filterlist, setFilterlist] = useState(""); //setting up useState hook
  return (
    <div>
      <section className="Header">
        <section className="title">
          <h1>FiMu - Film Music soundtracks</h1>
          <h3>Find movie and TV series soundtracks</h3>
        </section>

        <InputField
          initialFocus
          filled
          style={{ borderRadius: "100px" }}
          label="Filter search"
          name="Filter"
          className="Filterlist"
          onChange={() => {
            let filter = document.getElementById("Filter").value;
            // using hooks to update state in a functional component
            setFilterlist(filter);
          }}
          value={filterlist}
          type="text"
        />
      </section>
      <section className="Movies">
        <section className="Grid-Container">
          <h1>Movies</h1>
          <section className="row">
            <section className="col-1-3">
              <NewCard
                image={Dummy}
                title={"Heath Ledger's Joker"}
                alt="Dummy"
                summary="short summary - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,"
                onClick="CLICKED"
              />
            </section>
            <section className="col-2-3">
              <Card className="grow">
                <h2>CONTENT</h2>
              </Card>
            </section>
          </section>
        </section>
      </section>
      <section className="Tv">
        <section className="Grid-Container">
          <h1>TV Series</h1>
          <section className="row">
            <section className="col-2-3">
              <NewCard
                image={Dummy}
                title={"Joker TV series"}
                alt="Dummy"
                summary="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,"
                onClick="CLICKED"
              />
            </section>
          </section>
        </section>
      </section>
      <section className="Footer">
        <section className="Grid-Container">
          <section className="row">
            <section className="col-3-3">
              <Card className="grow">
                <h1>FOOTER</h1>
              </Card>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h1> 404 - Denne siden finnes ikke</h1>
      <Link to="/"> Returner til første siden</Link>
    </div>
  );
};

export default App;
