import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";
import NewCard from "./Components/NewCard";
import Callback from "./Callback";
import Dummy from "./profile.jpg";
import "./css/home.css";

import { Card } from "@dhis2/ui-core/build/es/Card";
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
          {/* need to check whether accesstoken exists and expiration date is more then an hour ago refresh, if not then call login page */}
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

const Home = () => {
  const [filterlist, setFilterlist] = useState(""); //setting up useState hook

  // get spotify data on motion pictures
  (async () => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      params: {
        q: "Original Motion Picture",
        type: "album"
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    });

    console.log(response.data.albums.items);
  })();
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
                btnclass="btn"
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
                btnclass="btn"
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
