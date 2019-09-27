import React from "react";
import { AlertBar } from "@dhis2/ui-core/build/es/AlertBar";
import * as api from "./Api.js";

const RefreshToken = () => {
  let today = new Date();
  let full_dato =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  let tid =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(full_dato);
  console.log(localStorage.getItem("dato"));
  console.log(typeof localStorage.getItem("expires"));
  console.log(typeof tid);
  console.log(localStorage.getItem("expires") < tid);

  return (
    <div>
      {localStorage.getItem("dato") !== full_dato ||
      (localStorage.getItem("dato") === full_dato &&
        localStorage.getItem("expires")) < tid ? (
        <AlertBar
          actions={[
            {
              label: "Oppdater nå",
              onClick: function onClick() {
                api.AuthorizeSpotifyAccess();
              }
            }
          ]}
          className="alertbar"
          duration={8000}
          critical
          permanent
        >
          Du må oppdatere Spotify Access token, ellers får du ikke gjort søk opp
          imot Spotify API
        </AlertBar>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RefreshToken;
