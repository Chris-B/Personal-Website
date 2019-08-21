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
                            <Skill thumbnail={"java.png"} imgalt={"java"} title={"Java"} imglink={"https://www.java.com/"}/>
                            <Skill thumbnail={"python.png"} imgalt={"python"} title={"Python"} imglink={"https://www.python.org/"}/>
                            <Skill thumbnail={"c++.png"} imgalt={"c++"} title={"C++"} imglink={"http://www.cplusplus.com/"}/>
                            <Skill thumbnail={"csharp.png"} imgalt={"c#"} title={"C#"} imglink={"https://dotnet.microsoft.com/"}/>
                            <Skill thumbnail={"javascript.png"} imgalt={"javascript"} title={"JavaScript"} imglink={"https://www.javascript.com/"}/>
                            <Skill thumbnail={"html.png"} imgalt={"html"} title={"HTML"} imglink={"https://en.wikipedia.org/wiki/HTML"}/>
                            <Skill thumbnail={"css.png"} imgalt={"css"} title={"CSS"} imglink={"https://en.wikipedia.org/wiki/Cascading_Style_Sheets"}/>
                            <Skill thumbnail={"php.png"} imgalt={"php"} title={"PHP"} imglink={"https://www.php.net/"}/>
                            <Skill thumbnail={"node.png"} imgalt={"node"} title={"Node.js"} imglink={"https://nodejs.org/"}/>
                            <Skill thumbnail={"react.png"} imgalt={"react"} title={"React.js"} imglink={"https://reactjs.org/"}/>
                            <Skill thumbnail={"sql.png"} imgalt={"sql"} title={"SQL"} imglink={"https://en.wikipedia.org/wiki/SQL"}/>
                            <Skill thumbnail={"git.png"} imgalt={"git"} title={"Git"} imglink={"https://git-scm.com/"}/>
                            <Skill thumbnail={"linux.png"} imgalt={"linux"} title={"Linux"} imglink={"https://en.wikipedia.org/wiki/Linux"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;