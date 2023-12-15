import React from "react";
import styles from "./list.css";
import Listbox from "./Listbox";
import Header from "../Header/Header";
export default function List() {
    return(
        <div className="listmaindiv">
            <Header />
            <h3 className="listtitle">민원 기록 모아보기 </h3>
            <div className="listdiv">
                <div className="listboxdiv">
                    <Listbox name ="user1" score="70"/>
                    <Listbox name ="올롤" score="50"/>
                    <Listbox name ="유저" score="39"/>

                </div>
                

                <div className="listboxdiv">
                    <Listbox name ="양웅"/>
                    <Listbox name ="나도 해볼래"/>
                    <Listbox name ="민웡아저씨"/>
                </div>
           
    

            </div>

        </div>
        
    );
}