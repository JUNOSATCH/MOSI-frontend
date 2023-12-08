import React from "react";
import styles from "./rank.css";
import Header from "../Header/Header";
import Rankbox from "./Rankbox";
export default function Rank() {
    return(
        <div>
            <Header/>
            <div className="rankdiv">
            <div class="container">
            <h2>🏆명예의 전당🏆</h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="table-headertxt col col-1">등수</div>
                    <div class="table-headertxt col col-2">닉네임</div>
                    <div class="table-headertxt col col-3">점수</div>
                    <div class="table-headertxt col col-4">대화 기록</div>
                </li>
                <hr className="hr"></hr>
                <li class="table-row-first">
                    <div class="col col-1" data-label="Job Id">🥇 1</div>
                    <div class="col col-2" data-label="Customer Name">넹면</div>
                    <div class="col col-3" data-label="Amount">30</div>
                    <div class="col col-4" data-label="Payment Status">더보기 {`>`} </div>
                </li>
                <li class="table-row">
                    <div class="col col-1" data-label="Job Id">🥈 2</div>
                    <div class="col col-2" data-label="Customer Name">융</div>
                    <div class="col col-3" data-label="Amount">20</div>
                    <div class="col col-4" data-label="Payment Status">더보기 {`>`}</div>
                </li>
                <li class="table-row">
                    <div class="col col-1" data-label="Job Id">🥉 3</div>
                    <div class="col col-2" data-label="Customer Name">캬캬</div>
                    <div class="col col-3" data-label="Amount">19</div>
                    <div class="col col-4" data-label="Payment Status">더보기 {`>`}</div>
                </li>
               <Rankbox rank="4" name="ee" score="15"/>
               <Rankbox rank="5" name="ee" score="15"/>
               <Rankbox rank="6" name="ee" score="15"/>
               <Rankbox rank="7" name="ee" score="15"/>
            </ul>
            </div>
        </div>
            
        </div>
        
    );
}