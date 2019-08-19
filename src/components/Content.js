import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";


const Content = () => {
    return (
        <div className="content-wrapper">
            <Home />
            <Portfolio />
            <About />
            <Contact />
        </div>
    );
};

export default Content;