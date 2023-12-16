import React from "react";
import styles from "./list.css";
import Listbox from "./Listbox";
import Header from "../Header/Header";
import jsonData from "./example.json";
export default function List() {
    return(
        <div className="listmaindiv">
            <Header />
            <h3 className="listtitle">민원 기록 모아보기 </h3>
            <div className="listdiv">
                <div className="listboxdiv">
                {jsonData.map((data) => (
                        <Listbox name ={data.username} score={data.score} id ={data.id} dialogue = {data.dialogue}/>))}
                </div>
                
                
    

            </div>

        </div>
        
    );
}