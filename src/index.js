import React from 'react';
import ReactDOM from 'react-dom';

import 'stylesheets/Global.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navigation from "components/Navigation";
import Home from "screens/Home";
import Portfolio from "screens/Portfolio";
import Footer from "components/Footer";

import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

const rootContent = (
    <BrowserRouter>
        <div className="app-wrapper">
            <Navigation />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
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
