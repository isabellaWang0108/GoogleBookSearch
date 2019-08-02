import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Save from "./pages/Save.js";
import Nav from "./components/Nav";

function App() {
  return (


    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Books} />
        <Route exact path="/saved" component={Save} />
      </div>
    </Router>

  );
}

export default App;
