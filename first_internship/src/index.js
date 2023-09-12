import "bootstrap/dist/css/bootstrap.min.css" ;
import React from "react"
import App from "./components/App";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router
} from "react-router-dom";

//render(<App /> , document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Router>
    <React.StrictMode>
      <App />
      {/* <h1>
        Hola Nata
      </h1> */}

    </React.StrictMode>
  </Router>

);

