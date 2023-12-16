import React from "react";
import styles from "./profile.css";

export default function Profilecard(props) {
    const customStyle = {
        visibility: 'visible',
        animationDelay: '0.2s',
        animationName: 'fadeInUp'
      };
    return(
        <div>
            <div class="col-12 col-sm-6 col-lg-3" className="profilecard">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={customStyle}>
           
              <div class="advisor_thumb">
                
                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
              </div>
             
              <div class="single_advisor_details_info">
                <h6 className="profilename">{props.name}</h6>
                <p class="designation">{props.role}</p>
              </div>
            </div>
          </div>

        </div>
    );
}