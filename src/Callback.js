import React from "react";
import { CircularLoader } from "@dhis2/ui-core/build/es/CircularLoader";
const Callback = () => {
  // use the information stored in Api.js for getting access to users spotify
  let URL = window.location.href;
  let callback = URL.split("callback#")[1]; // get the second part of the url, the part returned from spotify dev
  //console.log(callback);
  //access_token
  let access_token = callback.split("&")[0];
  //console.log(access_token);
  localStorage.setItem("access_token", access_token.split("=")[1]);
  //token_type
  let token_type = callback.split("&")[1];
  //console.log(token_type);
  localStorage.setItem("token_type", token_type.split("=")[1]);
  //expiration_time expires after 1 hour
  let today = new Date();
  let full_dato =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  let tid =
    today.getHours() + 1 + ":" + today.getMinutes() + ":" + today.getSeconds();

  localStorage.setItem("dato", full_dato);
  localStorage.setItem("expires", tid);
  //state for verification that the application sent the request for a access token
  let state = callback.split("&")[3];
  //console.log(state);
  localStorage.setItem("State", state.split("=")[1]);

  return (
    <div style={{ margin: "10% auto" }}>
      <CircularLoader Large />
      {(window.location.href = "/")}
    </div>
  );
};

export default Callback;
