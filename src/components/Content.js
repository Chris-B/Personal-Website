import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


const Content = () => {
    return (
        <div className="content-wrapper">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
};

export default Content;