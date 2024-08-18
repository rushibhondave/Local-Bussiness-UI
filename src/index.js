import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import App from "./1.MainComponent/App";
import { ToastContainer } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Auth0Provider
      domain="dev-d7h2iq1lkej7y6n6.us.auth0.com"
      clientId="AWNbs7VxYeLso0hzjWR9TQnR59y9oqCx"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>
);
