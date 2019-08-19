import React, { Component } from 'react';
import "../css/Home.css";

class Skill extends Component {
    render() {
        return (
            <div className="skill-wrapper">
                <img class={"skill-img"} src={"/resources/skills/".concat(this.props.thumbnail)} alt={this.props.imgalt} />
                <h3 class={"skill-title"}>{this.props.title}</h3>
            </div>
        );
    }
}

export default Skill;