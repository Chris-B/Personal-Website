import React from 'react';
import { Router, Route,  } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";


const Content = () => {
    return (
        <div className="content-wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Footer/>
        </div>
    );
};

export default Content;