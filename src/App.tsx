import React from 'react';

import {Navbar} from "./components/Navbar";

import './App.css';

import TodosPage from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import TestPage from "./pages/TestPage";

import {BrowserRouter, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path="/" exact />
                    <Route component={AboutPage} path="/about" />
                    <Route component={TestPage} path="/test" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
