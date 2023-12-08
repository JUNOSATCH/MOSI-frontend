import React from "react";
import styles from "./complain.css";
import Header from "../Header/Header";
export default function Complain () {
    return(
        <div>
            <Header/>
            <div className="complaindiv">
                <div className="calldiv">
                    <div className="callingmandiv">
                        <img className="callingman" src="https://i.gifer.com/1MHO.gif" />
                    </div>
                    <div className="callnoticediv">
                        <div className="calldiv"><img className="callimg" src="https://cdn.imweb.me/upload/S20170210589dc12ece375/a4d7cdfb9cdc0.gif"/></div>
                        <div><h5 className="callnotice">전화 중...</h5></div>
                    </div>
                </div>
                <div className="textdiv">
                    <div className="tempbox">
                        <div>
                        <div class="gauge">
                            <div class="background-outer">
                                <div class="percentage-outer" ></div>
                                <div class="mask-outer">
                                    <div class="background-inner">
                                    <div class="percentage-inner" ></div>
                                    <div class="mask-inner">
                                </div>
                                </div>
                                </div>
                            </div>
                            <span class="status-current-level">내 온도</span>
                            <span class="status-next-level">평균 온도</span>
                            </div>

                    
                        </div>

                    </div>
                    <div className="textbox">
                        <h5>안녕하세요. 00맘인데요, 선생님 왜그러시죠?</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}