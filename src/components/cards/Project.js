import React, { Component } from 'react';
import "stylesheets/Portfolio.css";

import { analytics } from "firebase";
import { logEvent } from "firebase/analytics";

class Project extends Component {

    logAnalyticEvent(event) {
        logEvent(analytics, event)
    }

    render() {
        return (
            <div className="project-wrapper">
                <a target={"_blank"} rel={"noreferrer"} href={this.props.projlink} onClick={()=>this.logAnalyticEvent('project_'+this.props.title+'_click')}>
                <img class={"project-img"} src={process.env.PUBLIC_URL + "/img/projects/".concat(this.props.thumbnail)} alt={this.props.imgalt} />
                </a>
                <h3 class={"project-title"}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Project;