import React, { useState, useEffect } from "react";
import "../styles/global.css";

const MissionTour = ({ route, onComplete, price, setPrice }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(true);
  }, [currentStep]);

  const handleNextMission = () => {
    setFadeIn(false);
    setTimeout(() => {
      if (currentStep < route.missions.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowHint(false);
        setPrice((prevPrice) => prevPrice - 1000);
      } else {
        onComplete(route.destination);
      }
    }, 300);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const getArrowDirection = () => {
    const directions = ["↑", "→", "↓", "←"];
    return directions[currentStep % directions.length];
  };

  const handleTakePhoto = () => {
    const videoInput = document.createElement("input");
    videoInput.type = "file";
    videoInput.accept = "image/*";
    videoInput.capture = "environment";
    videoInput.click();
  };

  const getStepImage = () => {
    const images = ["/images/1.png", "/images/2.png", "/images/3.png"];
    return images[currentStep] || images[images.length - 1];
  };

  return (
    <div className={`container ${fadeIn ? "fade-in" : ""}`}>
      {/* 画面上部に画像を小さく表示 */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={getStepImage()}
          alt={`ミッション ${currentStep + 1} の画像`}
          style={{
            width: "100px", // 画像を小さく表示
            height: "auto", // アスペクト比を維持
          }}
        />
      </div>

      <div className="price-display">あなたのお支払い金額は{price.toLocaleString()}円です</div>
      <div className="card">
        <h2>ミステリーツアー: ミッション {currentStep + 1}</h2>
        <p><strong>ミッション:</strong> {route.missions[currentStep]}</p>

        {currentStep === 1 && (
          <div style={{ marginTop: "20px" }}>
            <button onClick={handleTakePhoto} className="btn">
              写真を撮る
            </button>
          </div>
        )}

        {showHint && (
          <div className="hint-arrow">
            {getArrowDirection()}
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleShowHint}
            className="btn"
            style={{ marginRight: "10px" }}
          >
            ヒントを見る
          </button>
          <button onClick={handleNextMission} className="btn">
            {currentStep < route.missions.length - 1 ? "次のミッションへ" : "ツアーを完了する"}
          </button>
        </div>
      </div>

      {currentStep !== 1 && (
        <div style={{ marginTop: "20px" }}>
          <img
            src="/images/miti1.jpg"
            alt="地図"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MissionTour;
