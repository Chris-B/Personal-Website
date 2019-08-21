import React, { Component } from 'react';
import "../css/Portfolio.css";

class Project extends Component {
    render() {
        return (
            <div className="project-wrapper">
                <a target={"_blank"} href={this.props.projlink}>
                <img class={"project-img"} src={"/resources/projects/".concat(this.props.thumbnail)} alt={this.props.imgalt} />
                </a>
                <h3 class={"project-title"}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Project;