import React from 'react';

import { Navbar } from "components/Navbar";

import 'App.css';

import TodosPage from "pages/TodosPage";

import { AboutPage } from "pages/AboutPage";

import { DndProvider } from "react-dnd"

import { HTML5Backend } from "react-dnd-html5-backend";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Store from "stores/store";

import { StoreContext } from "contexts/StoreContext";

const store = new Store();

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <DndProvider backend={HTML5Backend}>
          <div className="container">
            <StoreContext.Provider value={store}>
              <Switch>
                <Route component={TodosPage} path="/" exact/>
                <Route component={AboutPage} path="/about"/>
              </Switch>
            </StoreContext.Provider>
          </div>
        </DndProvider>
      </BrowserRouter>
  );
};

export default App;
