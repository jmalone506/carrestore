import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import register from './serviceWorker';
import App from "./App";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

register();