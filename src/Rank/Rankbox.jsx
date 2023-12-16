import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../list/example.json";
export default function Rankbox(props) {
    const navigate = useNavigate();
    const gomore = (info) => {
        navigate('/record2', {
            state: {
              name: info.name,
              score: info.score,
              id: info.id,
              sentence : info.dialogue
            }
          });
    }
    return(
        <div>
            <li class={`table-row-first ${props.rank === 1 ? "rank-1" : ""}`}>
                    <div class="col col-1" data-label="Job Id">{props.rank}</div>
                    <div class="col col-2" data-label="Customer Name">{props.name}</div>
                    <div class="col col-3" data-label="Amount">{props.score}</div>
                    <div class="more col col-4" data-label="Payment Status" ><a onClick={() => gomore(props)}>더보기 {`>`}</a></div>
             </li>

        </div>
    );
}