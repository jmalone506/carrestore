import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Wrapper from "./components/Wrapper";
import Home from "./pages/User/Home.js";
import SignUp from "./pages/User/Signup.js";
import Login from "./pages/User/Login";

import Cars from "./pages/Cars/Cars";
import Buying from "./pages/Cars/Buying";
import Selling from "./pages/Cars/Selling";
import Accessorize from "./pages/Cars/Accessorize";
import Search from "./pages/Cars/Search";
import Maintenance from "./pages/Cars/Maintenance";
import Notes from "./pages/Cars/Note";
import Detail from "./pages/Cars/Detail";



function App() {
  return (
    <div>
      <Router>
        <Wrapper>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />


            <Route path="/cars" exact component={Cars} />

            <Route path="/buying" component={Buying} />
            <Route path="/selling" component={Selling} />
            <Route path="/accessorize" component={Accessorize} />
            <Route path="/search" component={Search} />
            <Route path="/maintenance" component={Maintenance} />
            <Route exact path={["/notes"]}>
              <Notes />
            </Route>
            <Route exact path="/notes/:id">
              <Detail />
            </Route>

          </Switch>
        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
