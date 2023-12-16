import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Complain from "./Complain/Complain";
import Rank from "./Rank/Rank";
import Modal from "./Modal/Modal";
import Record from "./Record/Record";
import List from "./list/List";
import Record2 from "./Record/Record2";
import Profile from "./profile/Profie";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/complain" element={<Complain/>}/>
        <Route path="/record2" element={<Record2/>}/>
        <Route path="/rank" element={<Rank/>}/>
        <Route path="/record" exact element={<Record/>}/>
        <Route path="/modal" element={<Modal />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/profile" element={<Profile />}/>
  
  
      </Routes>
    </div>
  );
}

export default App;


