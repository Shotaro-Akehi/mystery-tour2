import React, { useState } from "react";
import "../styles/global.css";

const AttributeInput = ({ onSubmit, price }) => {
  const [formData, setFormData] = useState({
    gender: "",
    nationality: "",
    age: "",
    preference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container fade-in">
      <div className="price-display">あなたのお支払い金額は{price.toLocaleString()}円です</div>
      <div className="card">
        <h2>ミステリーツアー: 冒険者プロフィール</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="gender">あなたの性別は？</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="nationality">どこの国からいらっしゃいましたか？</label>
            <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="アメリカ">アメリカ</option>
              <option value="台湾">台湾</option>
              <option value="香港">香港</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="age">あなたの年齢は？</label>
            <select id="age" name="age" value={formData.age} onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="20代">20代</option>
              <option value="30代">30代</option>
              <option value="40代">40代</option>
              <option value="50代">50代</option>
              <option value="60代">60代</option>
              <option value="70代">70代</option>
              <option value="80代">80代</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="preference">旅の好みは？</label>
            <select id="preference" name="preference" value={formData.preference} onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="風景">風景</option>
              <option value="食">食</option>
              <option value="文化">文化</option>
              <option value="冒険">冒険</option>
            </select>
          </div>
          <button type="submit" className="btn">冒険を始める</button>
        </form>
      </div>
    </div>
  );
};

export default AttributeInput;


