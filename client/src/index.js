import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import unregister from './service-worker';
import App from "./App";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

unregister();