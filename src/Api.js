import React from "react";
import axios from "axios";
//OMDB API
const OMDB_API_KEY = "beb19d6aa39b645edfe1fce5d7facab9";
const OMDB_BASE_URL = "";
//"https://api.themoviedb.org/3/movie/550?api_key=" + { API_KEY };

// spotify API
const SPOTIFY_AUTHORIZE_URL = "https://accounts.spotify.com/authorize/?";
const SCOPES = "user-read-private user-read-currently-playing streaming";
// typically the client id and client secret would be apart of backend to avoid access but...
const SPOTIFY_CLIENT_ID = "e514a4496fe146ff88bb0d7000c584b2";
const SPOTIFY_CLIENT_SECRET = "9633b92c784d4c68ab7b2e97f4320995";

const REDIRECT_URI = "http://localhost:3000/callback";
// authorize spotify access
export const AuthorizeSpotifyAccess = () => {
  return (window.location.href =
    SPOTIFY_AUTHORIZE_URL +
    "client_id=" +
    SPOTIFY_CLIENT_ID +
    "&" +
    "redirect_uri=" +
    REDIRECT_URI +
    "&" +
    "response_type=token" +
    "&" +
    "scope=" +
    SCOPES +
    "&" +
    "state=104");
};

// get movie list from spotify
export async function getSpotifyMotionPicture() {
  const response = await axios.get("https://api.spotify.com/v1/search", {
    params: {
      q: "Original Motion Picture",
      type: "album"
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token")
    }
  });
  //console.log(response.data.albums.items);

  const data = response;

  return data.data.albums.items;
}

export async function getSpotifyMotionPictureByID(id) {
  const response = await axios.get("https://api.spotify.com/v1/albums/" + id, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token")
    }
  });
  // console.log(response.data);

  const data = response.data;

  return data;
}

export async function getSpotifyMotionPictureBySearch(query) {
  const response = await axios.get("https://api.spotify.com/v1/search", {
    params: {
      q: query
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token")
    }
  });
  //console.log(response.data);

  const data = response.data;

  return data;
}
