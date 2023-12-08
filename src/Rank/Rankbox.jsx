import React from "react";

export default function Rankbox(props) {
    return(
        <div>
            <li class="table-row">
                    <div class="col col-1" data-label="Job Id">{props.rank}</div>
                    <div class="col col-2" data-label="Customer Name">{props.name}</div>
                    <div class="col col-3" data-label="Amount">{props.score}</div>
                    <div class="col col-4" data-label="Payment Status">더보기 {`>`}</div>
             </li>

        </div>
    );
}