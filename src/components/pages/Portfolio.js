import React, { Component } from 'react';
import Project from "../cards/Project";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="portfolio-wrapper">
                    <div className="project-cards">
                        <Project thumbnail={"site.png"} imgalt={"website"} title={"This Site"} projlink={"https://github.com/Chris-Barclay/Personal-Website"}/>
                        <Project thumbnail={"farmer.jpg"} imgalt={"farmerjohn"} title={"Farmer John AI"} projlink={"http://www.farmerjohn.life"}/>
                        <Project thumbnail={"server.png"} imgalt={"famerserver"} title={"Farmer John Server"} projlink={"https://github.com/Chris-Barclay/http-web-server"}/>
                        <Project thumbnail={"vm.png"} imgalt={"vmsys"} title={"Virtual Memory System"} projlink={"https://github.com/Chris-Barclay/Virtual-Memory-System"}/>
                        <Project thumbnail={"process.png"} imgalt={"prmgr"} title={"Process/Resource Manager"} projlink={"https://github.com/Chris-Barclay/Process-and-Resource-Manager"}/>
                        <Project thumbnail={"graph.png"} imgalt={"alg1"} title={"Graph Algorithms"} projlink={"https://github.com/Chris-Barclay/Graph-Algorithms"}/>
                        <Project thumbnail={"sort.png"} imgalt={"alg2"} title={"Sorting Algorithms"} projlink={"https://github.com/Chris-Barclay/Sorting-Algorithms"}/>
                        <Project thumbnail={"bin.png"} imgalt={"alg3"} title={"Bin Packing Algorithms"} projlink={"https://github.com/Chris-Barclay/Bin-Packing-Algorithms"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;