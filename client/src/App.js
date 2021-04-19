import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/User/Home.js";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Router>
      
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />





        </Wrapper>



      </Router>

    </div>
  );
}

export default App;
