import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import List from "./pages/List";
import Register from "./pages/Register";

import Header from "./components/Header";

import AppContext from "./contexts/AppContext";

import { Item } from './types/Item';

function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

const getItems = async () => {
  const beers = request<Array<Item>>("https://api.punkapi.com/v2/beers");
  return beers;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    getItems().then(response => setItems(response));
  }, []);

  return (
    <AppContext.Provider value={{ items, setItems }}>
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
    </AppContext.Provider>
  );
}

export default App;
