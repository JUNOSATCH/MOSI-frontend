import React, { useState } from "react";
import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";
import styles from "./modal.css";
import { useEffect } from "react";
export default function Modal({ closeModal }) {
  const url = 'http://example.com/mp3file.mp3';
  
  useEffect(() => {
    axios.get(url, { responseType: 'arraybuffer' })
      .then(response => {
        // Processing the response here
        const mp3Buffer = response.data;
        // mp3Buffer contains the binary data of the MP3 file now
      })
      .catch(error => {
        console.error('Error fetching MP3 file:', error);
      });
  }, []);
  
  const fileupload = async () => {
    const formData = new FormData();
    formData.append("audio", "recorded_audio.mp3"); // Replace 'audioBlob' with your captured audio blob
    
    try {
      const response = await axios.post("your_upload_endpoint", formData);
      // Handle the response here
    } catch (error) {
      console.error("Error uploading file: ", error);
    }

  };
  
  
  const handleQuit = () => {
    // 부모 컴포넌트에서 전달한 closeModal 함수 호출
    closeModal();
  };

  const [resp, setResp] = useState(""); // State to hold response data
  const [isRecording, setIsRecording] = useState(false); // State for recording toggle

  const [leftButtonText, setLeftButtonText] = useState("Speak"); // Initial left button text
  const [leftButtonClass, setLeftButtonClass] = useState("confirm"); // Initial left button class

  const toggleRecording = ({ startRecording, stopRecording }) => {
    if (isRecording) {
      stopRecording();
      setLeftButtonText("Speak");
      setLeftButtonClass("confirm");
      fileupload();
    } else {
      startRecording();
      setLeftButtonText("Stop");
      setLeftButtonClass("cancel");
    }
    setIsRecording(!isRecording); // 토글로 상태 변화
  };

  


  return (
    <ReactMediaRecorder
      audio
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
                onClick={() => toggleRecording({ startRecording, stopRecording })}
                type="button"
                className={leftButtonClass}
              >
                {leftButtonText}
              </button>
              <button onClick={handleQuit} type="button" className="cancel">
                Quit
              </button>
            </div>
            <div>
              <audio className="audiobox" src={mediaBlobUrl} controls></audio>
              <br />
            </div>
          </div>
        </div>
      )}
    />
  );
}