import "bootstrap/dist/css/bootstrap.min.css" ;
import React from "react"
import App from "./components/App";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>

);

