import React from "react";
import styles from "./list.css";
export default function Listbox(props) {
    return(
        <div>
            
           <section class="page-contain">
                <a href="#" class="data-card">
                    <h3 className="nicknamecard">{props.name}</h3>
                    <h4 className="status"> 🌡 민원온도 : {props.score}</h4>
                    <p>민원 문장 3/10</p>
                    <span class="link-text">
                    자세히 보기
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#950f0f;"/>
                    </svg>
                    </span>
                </a>
            
            </section>

        </div>
    );
}