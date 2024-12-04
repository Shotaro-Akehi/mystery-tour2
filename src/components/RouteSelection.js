import React from "react";
import "../styles/global.css"; 

const RouteSelection = ({ route, onStartTour, price }) => {
  return (
    <div className="container fade-in">
      <div className="price-display">あなたのお支払い金額は{price.toLocaleString()}円です</div>
      <div className="card">
        <h2>ミステリーツアー: 秘密の目的地</h2>
        <p>あなたの冒険のスタート地点: <strong>{route.start}</strong></p>
        <p>このツアーでは、あなたの好みに合わせた秘密の目的地へご案内します。</p>
        <p>各ステップで新たな謎が明かされ、最終的な目的地へと導かれます。</p>
        <p>準備はよろしいですか？ 未知なる冒険の幕が上がります！</p>
        <button onClick={onStartTour} className="btn">冒険を開始する</button>

        {/* 地図画像の追加 */}
        <div className="map-container" style={{ marginTop: '20px' }}>
          <img src="/images/tizu.jpeg" alt="ルートの地図" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default RouteSelection;

