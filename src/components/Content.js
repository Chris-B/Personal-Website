import React from 'react';
import { Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";


const Content = () => {
    return (
        <div className="content-wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Footer/>
        </div>
    );
};

export default Content;