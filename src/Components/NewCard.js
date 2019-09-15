import React from "react";
import { Card } from "@dhis2/ui-core/build/es/Card";

const NewCard = props => {
  const { image, alt, title, summary, onClick, btnclass } = props;
  return (
    <Card className="card-container grow">
      <section className="card-image">
        <img
          src={image}
          alt={alt}
          className="movie-poster"
          onClick={() => {
            console.log({ onClick });
          }}
        />
        <svg className="svg" viewBox="0 0 800 500">
          <path
            d="M 0 150 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#333"
            fillOpacity="0.97"
            onClick={() => {
              console.log("Image clicked");
            }}
          />
        </svg>
      </section>
      <section className="card-body">
        <hr />
        <h1>{title}</h1>
        <h3>{summary}</h3>
        <button className={btnclass}>
          Read more<span>👀</span>
        </button>
      </section>
    </Card>
  );
};

export default NewCard;
