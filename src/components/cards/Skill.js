import React, { Component } from 'react';
import "stylesheets/Home.css";

import { analytics } from "firebase";
import { logEvent } from "firebase/analytics";

class Skill extends Component {

    logAnalyticEvent(event) {
        logEvent(analytics, event)
    }

    render() {
        return (
            <div className="skill-wrapper">
                <a target={"_blank"} rel={"noreferrer"} href={this.props.imglink} onClick={()=>this.logAnalyticEvent('skill_'+this.props.title+'_click')}>
                    <img class={"skill-img"} src={process.env.PUBLIC_URL + "/img/skills/".concat(this.props.thumbnail)} alt={this.props.imgalt} />
                </a>
                <h3 class={"skill-title"}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Skill;