import React from "react";
import Styles from "./header.css"; 
export default function Header() {
    return(
        <div className="headerbox">
            
          
            <nav>
                <a className="logo" href="/">🌡 민원의온도</a>
                <a href="/">Home</a>
                <a href="#">Record</a>
                <a href="/rank">Rank</a>
                <a href="#">Partners</a>
            </nav>
           
        </div>
    );
}