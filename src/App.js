import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Complain from "./Complain/Complain";
import Rank from "./Rank/Rank";
import Modal from "./Modal/Modal";
import Record from "./Record/Record";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/complain" element={<Complain/>}/>
     
        <Route path="/rank" element={<Rank/>}/>
        <Route path="/record" element={<Record/>}/>
        <Route path="/modal" element={<Modal />}/>
  
  
      </Routes>
    </div>
  );
}

export default App;


