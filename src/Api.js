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
const AuthorizeSpotifyRequest = () => {
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

export default AuthorizeSpotifyRequest;
/*
async function getelements(){
    const response = away fetch(

    )
}
*/
