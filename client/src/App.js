import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Cars} />





        </Wrapper>



      </Router>

    </div>
  );
}

export default App;
