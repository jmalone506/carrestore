import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/User/Home.js";
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./pages/User/SignUp.js";
import Login from "./pages/User/Login";
import Cars from "./pages/Cars/Cars"
import Buying from "./pages/Cars/Buying"
import Selling from "./pages/Cars/Selling"
import Accessorize from "./pages/Cars/Accessorize"
import Forum from "./pages/Cars/Forum"
import Maintenance from "./pages/Cars/Maintenance"
import History from "./pages/Cars/History"

function App() {
  return (
    <div>
      <Router>
      

        <Wrapper>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
          
          </Switch>
          
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cars" exact component={Cars} />
            <Route path="/buying" component={Buying} />
            <Route path="/selling" component={Selling} />
            <Route path="/accessorize" component={Accessorize} />
            <Route path="/forum" component={Forum} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/history" component={History} />
          </Switch>

        </Wrapper>



      </Router>

    </div>
  );
}

export default App;
