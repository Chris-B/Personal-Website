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
                            <Skill thumbnail={"java.png"} imgalt={"java"} title={"Java"}/>
                            <Skill thumbnail={"python.png"} imgalt={"python"} title={"Python"}/>
                            <Skill thumbnail={"c++.png"} imgalt={"c++"} title={"C++"}/>
                            <Skill thumbnail={"csharp.png"} imgalt={"c#"} title={"C#"}/>
                            <Skill thumbnail={"javascript.png"} imgalt={"javascript"} title={"JavaScript"}/>
                            <Skill thumbnail={"html.png"} imgalt={"html"} title={"HTML"}/>
                            <Skill thumbnail={"css.png"} imgalt={"css"} title={"CSS"}/>
                            <Skill thumbnail={"php.png"} imgalt={"php"} title={"PHP"}/>
                            <Skill thumbnail={"node.png"} imgalt={"node"} title={"Node.js"}/>
                            <Skill thumbnail={"react.png"} imgalt={"react"} title={"React.js"}/>
                            <Skill thumbnail={"sql.png"} imgalt={"sql"} title={"SQL"}/>
                            <Skill thumbnail={"git.png"} imgalt={"git"} title={"Git"}/>
                            <Skill thumbnail={"linux.png"} imgalt={"linux"} title={"Linux"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;