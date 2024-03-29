import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";
import styles from "./modal.css";
import { useEffect, useRef } from "react";

const url = 'http://localhost:8080/api';


export default function Modal({ closeModal, userId, userName }) {
  
  const navigate = useNavigate();

  const fileupload = async () => {
    const formData = new FormData();
    formData.append("file", reqAudio); // Replace 'audioBlob' with your captured audio blob
    formData.append("teacher", 1);
    try {
      const response = await axios.post(`${url}/dialogue`, formData, {
        responseType: 'arraybuffer', // Ensure response is treated as an array buffer
      });
      const mp3Buffer = response.data;
      const audioBlob = new File([mp3Buffer], "result", { type: 'audio/wav' });
      setResAudio(URL.createObjectURL(audioBlob));
      setResp(true);
      // Handle the response here
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  // const gorecord = () => {
  //   navigate('/record', {
  //     state: {
  //       name: userName,
  //       score: score,
  //       id: userId,
  //       dialogue : dialogue,
  //     }
  //   });
  // };

  const endCall = async () => {
    try {
      const response = await axios.post(`${url}/analysis`, { id: userId, name: userName });
      console.log(response.data);
      // setDialogue(response.data.dialogue);
      // setScore(response.data.score);
      closeModal();
      // gorecord();
    } catch (err) { console.error(err); }
  }


  const [resp, setResp] = useState(false); // State to hold response data
  const [isRecording, setIsRecording] = useState(false); // State for recording toggle
  const [resAudio, setResAudio] = useState("");
  const [reqAudio, setReqAudio] = useState("");

  const [leftButtonText, setLeftButtonText] = useState("Speak"); // Initial left button text
  const [leftButtonClass, setLeftButtonClass] = useState("confirm"); // Initial left button class

  const [score, setScore] = useState("");
  const [dialogue, setDialogue] = useState("");

  const toggleRecording = ({ startRecording, stopRecording, mediaBlobUrl }) => {
    if (isRecording) {
      stopRecording();
      setLeftButtonText("Speak");
      setLeftButtonClass("confirm");
    } else {
      startRecording();
      setLeftButtonText("Stop");
      setLeftButtonClass("cancel");
    }
    setIsRecording(!isRecording); // 토글로 상태 변화
  };

  const onStop = async (blobObject) => {
    const audioBlob = await fetch(blobObject).then((r) => r.blob());
    const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
    setReqAudio(audioFile);
  }

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log("업데이트 될 때마다 실행");
      fileupload();
    }
  }, [reqAudio]);

  // useEffect(() => {
  //   if (!mounted.current) {
  //     mounted.current = true;
  //   } else {
  //     gorecord();
  //   }
  // }, [score]);
  


  return (
    <ReactMediaRecorder
      audio
      onStop={onStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div id="container">
          <div className="container-inner">
            <div className="content">
              <h3 className="calltxt">통화중입니다.....</h3>
              <p>{status}</p>
              <img
                src="https://static.wixstatic.com/media/1b038d_7aa031d03f4548d7820a548a9926a5f0~mv2.gif"
                className="callme"
              />
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  toggleRecording({ startRecording, stopRecording, mediaBlobUrl });
                }}
                type="button"
                className={leftButtonClass}
              >
                {leftButtonText}
              </button>
              <button onClick={endCall} type="button" className="cancel">
                Quit
              </button>
            </div>
            <div>
              <audio className="audiobox" src={resp ? resAudio : ""} controls autoPlay></audio>
              <br />
            </div>
          </div>
        </div>
      )}
    />
  );
}