import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";


const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    );
};

export default Content;