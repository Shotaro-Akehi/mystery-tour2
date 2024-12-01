import React, { useState, useEffect } from "react";
import "../styles/global.css";

const TourCompletion = ({ destination, price }) => {
  const [destinationInfo, setDestinationInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
    </div>
  );
};

export default TourCompletion;


