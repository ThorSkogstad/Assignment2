import React, { useState, useEffect } from "react";
import { InputField } from "@dhis2/ui-core/build/es/InputField";
import * as api from "../Api";

const Header = () => {
  const [filterlist, setFilterlist] = useState(); //setting up useState hook
  const [spotifyMovieList, setSpotifyMovieList] = useState([]);

  return (
    <section className="Header">
      <section className="title">
        <h1>FiMu - Film Music soundtracks</h1>
        <h3>Find movie and TV series soundtracks</h3>
      </section>

      <InputField
        filled
        style={{ borderRadius: "100px" }}
        label="Filter search"
        name="Filter"
        className="Filterlist"
        onChange={() => {
          let filter = document.getElementById("Filter").value;
          api.getSpotifyMotionPictureBySearch(filter).then(spotifyMovie => {
            console.log(spotifyMovie);
            setSpotifyMovieList(spotifyMovie);
          });

          // using hooks to update state in a functional component
          setFilterlist(filter);
        }}
        value={filterlist}
        type="text"
      />
    </section>
  );
};

export default Header;
