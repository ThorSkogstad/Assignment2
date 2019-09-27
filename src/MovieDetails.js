import React, { useState, useEffect } from "react";
import * as api from "./Api";
import { CircularLoader } from "@dhis2/ui-core/build/es/CircularLoader";
import { Card } from "@dhis2/ui-core/build/es/Card";
import Player from "./Components/Player";

const MovieDetails = props => {
  const [album, setAlbum] = React.useState(null);

  React.useEffect(() => {
    api
      .getSpotifyMotionPictureByID(props.match.params.id)
      .then(details => setAlbum(details));
  }, []);

  album && console.log(album);
  return (
    <div>
      {album ? (
        <div>
          <section
            className="details-poster"
            style={{
              background: "#333",
              backgroundImage: "url(" + album.images[0].url + ")",
              backgroundRepeat: "round round",
              backgroundPosition: "center",
              maxWidth: "100vw"
            }}
          ></section>
          <section className="details-soundtracks">
            <section className="Grid-Container">
              <section className="row">
                <section className="col-3-3">
                  <h1>Movie Soundtracks</h1>
                  <Card>
                    {album.tracks.items.map(track => {
                      let trackName = track.name;
                      let artistNames = [];
                      console.log(track.name);
                      track.artists.map(artist => {
                        let trackArtist = artist.name;
                        artistNames += trackArtist + ", ";
                        console.log("--> " + artist.name);
                      });
                      console.log(artistNames);
                      let preview_url = track.preview_url;
                      console.log(preview_url);
                      return (
                        <div className="soundtrack-playlist">
                          <Card className="card-container card-body">
                            <section className="row">
                              <section className="col-1-3">
                                <h1>{trackName}</h1>
                              </section>
                              <section className="col-1-3">
                                <h3>{artistNames}</h3>
                              </section>
                              <section className="col-1-3">
                                <Player url={preview_url} />
                              </section>
                            </section>
                          </Card>
                        </div>
                      );
                    })}
                  </Card>
                </section>
              </section>
            </section>
          </section>
          <section className="details-info">
            <section className="row">
              <section className="col-2-3">content</section>
              <section className="col-1-3">content</section>
            </section>
          </section>
        </div>
      ) : (
        <CircularLoader />
      )}
    </div>
  );
};

export default MovieDetails;
