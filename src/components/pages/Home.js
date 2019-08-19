import React, { Component } from 'react';
import "../css/Home.css";
import Skill from "../cards/Skill.js";

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="profile">
                    <div className="profile-image" />
                    <div className="profile-details">
                        <h1>Software Engineer</h1>
                        <h2>Desktop and Web Application Developer</h2>
                        <div className="skill-cards">
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                            <Skill thumbnail={"java-logo.png"} imgalt={"java"} title={"JAVA"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;