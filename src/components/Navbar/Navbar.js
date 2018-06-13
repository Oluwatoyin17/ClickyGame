import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <nav className = "navbar navbar-default navbar-fixed-top">
               <ul>
                    <li className="NavLeft">Clicky Game</li>
                    <li className="NavCenter">{this.props.gameMessage}</li>
                    <li className="NavRight">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
                    
                </ul>
            </nav>
        );
    }
}
export default Navbar;