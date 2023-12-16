import React from "react";
import styles from "./rank.css";
import Header from "../Header/Header";
import Rankbox from "./Rankbox";
import { useNavigate } from "react-router-dom";
import data from "../list/example.json";
export default function Rank() {
    const navigate = useNavigate();
    const gomore = (name) => {
        navigate('/record2', {
            state: {
              name: data.name,
              score: data.score,
              id: data.id,
              sentence : data.dialogue
            }
          });
    }
    const sortedData = data.sort((a, b) => b.score - a.score);

  // 점수를 기준으로 정렬된 데이터에 순위(rank)를 부여
  const rankedData = sortedData.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));
    return(
        <div>
            <Header/>
            <div className="rankdiv">
            <div class="container">
            <h2 className="mosirank">🏆MOSI RANK🏆</h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="table-headertxt col col-1">등수</div>
                    <div class="table-headertxt col col-2">닉네임</div>
                    <div class="table-headertxt col col-3">점수</div>
                    <div class="table-headertxt col col-4">대화 기록</div>
                </li>
                <hr className="hr"></hr>
            
                {rankedData.map((data, index) => (
                    <Rankbox
                        key={index}
                        rank={data.rank}
                        name={data.username}
                        score={data.score}
                        id={data.id}
                        dialogue={data.dialogue}
                        gomore={gomore}
                    />
            ))}
            </ul>
            </div>
        </div>
            
        </div>
        
    );
}