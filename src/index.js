import React from 'react';
import ReactDOM from 'react-dom';

import 'stylesheets/Global.css';

import {BrowserRouter, Route} from "react-router-dom";

import { analytics } from "firebase";
import { logEvent } from "firebase/analytics";

import Navigation from "components/Navigation";
import Home from "screens/Home";
import Portfolio from "screens/Portfolio";
import Footer from "components/Footer";


const rootContent = (
    <BrowserRouter>
        <div className="app-wrapper">
            <Navigation />
            <div className="content-wrapper">
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);

logEvent(analytics, 'root_content_loaded')

ReactDOM.render(
    rootContent,
    document.getElementById('root')
);
