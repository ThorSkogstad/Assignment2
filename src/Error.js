import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1> 404 - Denne siden finnes ikke</h1>
      <Link to="/"> Returner til første siden</Link>
    </div>
  );
};

export default Error;
