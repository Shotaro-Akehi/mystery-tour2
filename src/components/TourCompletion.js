import React, { useState, useEffect } from "react";
import "../styles/global.css";

const TourCompletion = ({ destination, price }) => {
  const [destinationInfo, setDestinationInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false); // 詳細を表示するための状態

  useEffect(() => {
    const fetchDestinationInfo = async () => {
      try {
        // 注意: 実際のAPIエンドポイントに置き換えてください
        const response = await fetch(`https://api.example.com/destination/${destination}`);
        const data = await response.json();
        setDestinationInfo(data);
      } catch (error) {
        console.error("目的地の情報取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinationInfo();
  }, [destination]);

  if (loading) {
    return <div className="container fade-in">読み込み中...</div>;
  }

  return (
    <div className="container fade-in">
      <div className="price-display">あなたのお支払い金額は{price.toLocaleString()}円です</div>
      <div className="card">
        <h2>ミステリーツアー完了！</h2>
        <p>おめでとうございます！あなたは無事に目的地に到着しました。</p>
        <h3>目的地: {destination}</h3>
        {destinationInfo && (
          <div>
            <p>{destinationInfo.description}</p>
            <h4>見どころ:</h4>
            <ul>
              {destinationInfo.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>
        )}
        <p className="celebration">素晴らしい冒険でした！新たな発見と思い出を胸に、次なる冒険へ出発しましょう。</p>
      </div>

      {/* 「詳細を見る」ボタンの追加 */}
      <div style={{ marginTop: "20px" }}>
        <button
          className="btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "閉じる" : "詳細を見る"}
        </button>
        {showDetails && (
          <p style={{ marginTop: "10px" }}>
            目的地の説明文を追加する
          </p>
        )}
      </div>

      {/* 地図画像を画面の下に追加 */}
      <div style={{ marginTop: "20px" }}>
        <img
          src="/images/tizu.jpeg"
          alt="地図"
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default TourCompletion;
