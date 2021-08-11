import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Header from "./components/Header";
import List from "./pages/List";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <List />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default App;
