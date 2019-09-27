import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import NewCard from "./Components/NewCard";
import Footer from "./Components/Footer";
import * as api from "./Api";
import { Link } from "react-router-dom";
import { CircularLoader } from "@dhis2/ui-core/build/es/CircularLoader";

const Home = () => {
  const [spotifyMovieList, setSpotifyMovieList] = useState([]);
  const [OMDBMovieList, setOMDBMovieList] = useState([]);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      await api.getSpotifyMotionPicture().then(spotifyMovie => {
        //console.log(spotifyMovie);
        setSpotifyMovieList(spotifyMovie);
      });
    };
    fetchSpotifyData();
  }, []);

  return (
    <div>
      <Header />
      <section className="Movies">
        <section className="Grid-Container">
          <h1>Movies</h1>
          {spotifyMovieList ? (
            spotifyMovieList.map((movie, i) => {
              let name = movie.name;
              let title = name.split(" (")[0];
              let releaseDate = movie.release_date;
              let releaseYear = releaseDate.split("-")[0];
              let poster = movie.images[1].url;
              let albumID = movie.id;
              let total_tracks = movie.total_tracks;
              //console.log(title + " - " + releaseYear);

              return (
                <section className="col-1-3">
                  <NewCard
                    image={poster}
                    title={title}
                    alt={title}
                    key={albumID}
                    release_year={releaseYear}
                    album_id={albumID}
                    total_tracks={total_tracks}
                    btnclass="btn"
                  />
                </section>
              );
            })
          ) : (
            <CircularLoader />
          )}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
