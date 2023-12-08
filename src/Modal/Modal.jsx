// Modal.jsx
import React from "react";
import styles from "./modal.css";

export default function Modal({ closeModal }) {
  const handleQuit = () => {
    // 부모 컴포넌트에서 전달한 closeModal 함수 호출
    closeModal();
  };

  return (
    <div>
      <div id="container">
        <div className="container-inner">
          <div className="content">
            <h3 className="calltxt">통화중입니다.....</h3>
            <img
              src="https://static.wixstatic.com/media/1b038d_7aa031d03f4548d7820a548a9926a5f0~mv2.gif"
              className="callme"
            />
          </div>
          <div className="buttons">
            <button type="button" className="confirm">
              Speak
            </button>
            {/* Quit 버튼에 handleQuit 함수 연결 */}
            <button type="button" className="cancel" onClick={handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
