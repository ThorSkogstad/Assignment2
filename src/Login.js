import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { Button } from "@dhis2/ui-core/build/cjs/Button";
import AccessSpotifyAPI from "./Api.js";

const Login = () => {
  return (
    <div>
      {/* EDIT   
              SPOTIFY WEB PLAYER SDK ACCES TOKEN = 
              BQDicf2UqAVHQbQ88OuMirjUB4bWglwwsQUQhO_4JIUIZrAOzozXPtXx9qJockiFOZLLD8u0qtYCe6qwrfoU3E9dOQPsfkR47QcTaPR2KeVIG2ngm_8kk84QICgQmzMWjb7YsWG7vGLBv9Z61qBIAKyrRO59w9AbYeJ4OuBY
            */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Velkommen til FiMu</p>
        <Button primary onClick={AccessSpotifyAPI}>
          <span role="img" aria-label="music-emoji">
            🤟
          </span>
          Authorize access to Spotify
          <span role="img" aria-label="music-emoji">
            🤟
          </span>
        </Button>
      </header>
    </div>
  );
};

export default Login;
