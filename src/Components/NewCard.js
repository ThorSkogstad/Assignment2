import React from "react";
import { Card } from "@dhis2/ui-core/build/es/Card";
import { Link } from "react-router-dom";
const NewCard = props => {
  const {
    image,
    alt,
    title,
    total_tracks,
    onClick,
    btnclass,
    release_year,
    album_id
  } = props;
  return (
    <Card className="card-container grow">
      <Link to={`/movie/${album_id}`}>
        <section className="card-image">
          <img
            src={image}
            alt={alt}
            className="movie-poster"
            onClick={() => {
              //console.log({ onClick });
            }}
          />
          <svg className="svg" viewBox="0 0 800 500">
            <path
              d="M 0 150 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
              fillOpacity="0.9"
              onClick={() => {
                console.log("Image clicked");
              }}
            />
          </svg>
        </section>
      </Link>
      <section className="card-body">
        <hr />
        <h1>{title + " (" + release_year + ")"}</h1>
        <h3>{"Total number of tracks: " + total_tracks}</h3>
        <Link to={`/movie/${album_id}`}>
          <button className={btnclass}>
            Read more
            <span role="img" aria-label="read">
              👀
            </span>
          </button>
        </Link>
      </section>
    </Card>
  );
};

export default NewCard;
