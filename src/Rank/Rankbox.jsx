import React from "react";
import { useNavigate } from "react-router-dom";
export default function Rankbox(props) {
    const navigate = useNavigate();
    const gomore = (name) => {
        navigate("/record", { state: {name}});
    }
    return(
        <div>
            <li class="table-row">
                    <div class="col col-1" data-label="Job Id">{props.rank}</div>
                    <div class="col col-2" data-label="Customer Name">{props.name}</div>
                    <div class="col col-3" data-label="Amount">{props.score}</div>
                    <div class="more col col-4" data-label="Payment Status" ><a onClick={() => gomore(props.name)}>더보기 {`>`}</a></div>
             </li>

        </div>
    );
}