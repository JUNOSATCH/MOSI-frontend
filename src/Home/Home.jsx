// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./home.css";
import Modal from "../Modal/Modal";
import Swal from "sweetalert2";
import axios from "axios";

const url = "http://localhost:8080";

export default function Home() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleStartSimulation = async () => {
    if (!nickname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "경고",
        text: "닉네임을 입력하세요",
      });
    } else {
      console.log("닉네임:", nickname);
      const response = await axios.post(`${url}/dialogue/enter`, { name: nickname });
      console.log(response.data.id);
      setId(response.data.id);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  return (
    <div className="Home div">
      <Header />
      <div>
        <div className="homedivmain">
          <div className="homeimgdiv">
            <div>
              <h5 className="ment">
                안녕하세요, 민원 시뮬레이터 MOSI입니다.</h5>
                <h6 className="ment2">무심코 내뱉은 말들이 누군가에게는 악성민원이 될 수 있습니다. </h6>
              <h6 className="ment2">지금 당신의 민원 상태를 진단해보세요.</h6>
              
            </div>
            <div>
              <img
                className="homeimg"
                src="https://images.squarespace-cdn.com/content/v1/558c4173e4b0d78cd28c72ba/1528314893467-HH4F2Y4SSX5HRXM15B71/FERRIFONE.gif"
                alt="temp"
              />
            </div>
            <div className="startdiv">
              <input
                placeholder="닉네임 입력"
                className="nickname"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <button className="startbtn" onClick={handleStartSimulation}>
                Enter to Simulation
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 모달 컴포넌트 렌더링 */}
      {modalIsOpen && <Modal closeModal={closeModal} userId={id} userName={nickname} />}
    </div>
  );
}
