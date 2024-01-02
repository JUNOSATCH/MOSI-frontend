import React from "react";
import styles from "./record.css";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
// import data from './../list/example.json';
// import axios from "axios";


export default function Record (props) {
  const { state } = useLocation();
  const id = state ? state.id : null;
  
  // 해당 ID에 맞는 데이터 찾기
  // const userRecord = data.find((record) => record.id === id);
  const name = state ? state.name : null;
  const score = state ? state.score : null;
  const dialogue = state ? state.dialogue : [];

  return (
    <div className="recorddiv">
      <Header />
      <h5 className="recordname">{name}님의 대화 기록</h5>
      <hr></hr>
      <h5 className="recordscore"> 🌡 민원 온도: {score} 'c</h5>
      <div className="recordmain">
        {!dialogue ? null : dialogue.map((dialog, index) => (
          <p key={index} style={{ color: dialog.flag >= 1 ? 'red' : 'inherit' }}>
          {dialog.speaker} : {dialog.sentence}
        </p>))}
      </div>
    </div>
  );
}