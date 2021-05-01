import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import register from './serviceWorker';
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

register();