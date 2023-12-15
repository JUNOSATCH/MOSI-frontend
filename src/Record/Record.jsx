import React from "react";
import styles from "./record.css";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
export default function Record (props) {
    const text = "hi";
    const { state } = useLocation();
    const name = state ? state.name : null;
    return(
        <div className="recorddiv">
            <Header />
            <h5 className="recordname">{name}님의 대화 기록</h5>
            <div className="recordmain">
                <h2 className="recordtxt">{text}</h2>
            </div>
        </div>
    );
}