import React, { useState, useEffect } from "react";
import styles from "./list.css";
import Listbox from "./Listbox";
import Header from "../Header/Header";
import jsonData from "./example.json";
import axios from "axios";

const url = "http://localhost:8080";


export default function List() {

    const [dataList, setDataList] = useState("");
    useEffect(() => {
        const getDataList = async () => {
            const response = await axios.get(`${url}/dialogue/recordList`);
            setDataList(response.data);
            // console.log(response.data);
        }
        getDataList();
    }, []);

    return(
        <div className="listmaindiv">
            <Header />
            <h3 className="listtitle">민원 기록 모아보기 </h3>
            <div className="listdiv">
                <div className="listboxdiv">
                {(dataList=="") ? "Loading..." : dataList.map((data) => (
                    <Listbox key={data.id} name={data.username} score={data.score} id={data.id} dialogue={JSON.parse(data.dialogue)}/>
                ))}
                </div>
            </div>
        </div>
    );
}