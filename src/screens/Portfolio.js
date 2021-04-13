import React, { Component } from 'react';
import Project from "components/cards/Project";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-wrapper">
                <div className="project-cards">
                    <Project thumbnail={"site.png"} imgalt={"website"} title={"This Site"} projlink={"https://github.com/Chris-B/Personal-Website"}/>
                    <Project thumbnail={"autorune.png"} imgalt={"autorune"} title={"AutoRune"} projlink={"https://github.com/Chris-AutoRune"}/>
                    <Project thumbnail={"farmer.jpg"} imgalt={"famerjohn"} title={"Farmer John Website"} projlink={"http://www.farmerjohn.cc/"}/>
                    <Project thumbnail={"vm.png"} imgalt={"vmsys"} title={"Virtual Memory System"} projlink={"https://github.com/Chris-B/Virtual-Memory-System"}/>
                    <Project thumbnail={"process.png"} imgalt={"prmgr"} title={"Process/Resource Manager"} projlink={"https://github.com/Chris-B/Process-and-Resource-Manager"}/>
                    <Project thumbnail={"graph.png"} imgalt={"alg1"} title={"Graph Algorithms"} projlink={"https://github.com/Chris-B/Graph-Algorithms"}/>
                    <Project thumbnail={"sort.png"} imgalt={"alg2"} title={"Sorting Algorithms"} projlink={"https://github.com/Chris-B/Sorting-Algorithms"}/>
                    <Project thumbnail={"bin.png"} imgalt={"alg3"} title={"Bin Packing Algorithms"} projlink={"https://github.com/Chris-B/Bin-Packing-Algorithms"}/>
                </div>
            </div>
        );
    }
}

export default Portfolio;