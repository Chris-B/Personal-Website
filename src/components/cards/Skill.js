import React, { Component } from 'react';
import "../css/Home.css";

class Skill extends Component {
    render() {
        return (
            <div className="skill-wrapper">
                <a target={"_blank"} href={this.props.imglink}>
                    <img class={"skill-img"} src={"/resources/skills/".concat(this.props.thumbnail)} alt={this.props.imgalt} />
                </a>
                <h3 class={"skill-title"}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Skill;