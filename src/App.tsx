import React, { createContext } from 'react';

import { Navbar } from "./components/Navbar";

import './App.css';

import TodosPage from "./pages/TodosPage";

import { AboutPage } from "./pages/AboutPage";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Store from "./stores/store";

const store = new Store();

export const StoreContext = createContext(store);

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <StoreContext.Provider value={store}>
            <Switch>
              <Route component={TodosPage} path="/" exact/>
              <Route component={AboutPage} path="/about"/>
            </Switch>
          </StoreContext.Provider>
        </div>
      </BrowserRouter>
  );
};

export default App;
