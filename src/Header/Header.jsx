import React from "react";
import Styles from "./header.css"; 
import mosilogo from "./mosilogo.png";
export default function Header() {
    return(
        <div className="headerbox">
            <div className="logobox">
                <a className="logo" href="/">
                <img src={mosilogo} alt="logo" className="mosi"/></a>
            </div>
          
            <nav>
                <a></a>
                <a href="/">Home</a>
                <a href="#">Record</a>
                <a href="/rank">Rank</a>
                <a href="#">Partners</a>
            </nav>
           
        </div>
    );
}