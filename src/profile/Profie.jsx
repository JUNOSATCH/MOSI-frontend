import React from "react";
import styles from "./profile.css";
import Profilecard from "./Profilecard";
import Header from "../Header/Header";
export default function Profile() {
    const customStyle = {
        visibility: 'visible',
        animationDelay: '0.2s',
        animationName: 'fadeInUp'
      };
    return(
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <Header/>
            <div class="profilecontainer">
                <div class="row justify-content-center">

                <div class="col-12 col-sm-8 col-lg-6">
                    
                    <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={customStyle}>
                    <h3 className="aboutteam">About Team 준호새치</h3>
                    
                    </div>
                </div>
                </div>
                <div class="row">
            
                <Profilecard name="송영민" role="Backend" />
                <Profilecard name="이재림" role="Frontend" />
                <Profilecard name="이준호" role="AI" />
                <Profilecard name="정유찬" role="AI"/>
                </div>
                </div>
        </div>
    );
}