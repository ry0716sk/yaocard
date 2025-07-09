import React, { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    minHeight: "100vh",
    background: "#FFFFFF", // 背景は白
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1000px", // 3D効果のためにperspectiveを追加
    animation: "float 3s ease-in-out infinite", // 浮遊アニメーションをコンテナに適用
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #2a34c0, #3640E0)", // グラデーションを追加
    borderRadius: "10px", // 角丸
    width: 500,
    height: 300,
    boxShadow: isHovered ? "0px 15px 30px 0px rgba(0,0,0,0.3), 0px 5px 10px 0px rgba(0,0,0,0.1)" : "0px 5px 15px 0px rgba(0,0,0,0.15)", // よりリッチな影
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out", // スムーズなアニメーション
    transform: isHovered ? "scale(1.05) rotateX(8deg) rotateY(8deg) translateZ(20px)" : "scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px)", // ホバー時の立体効果
    position: "relative", // 光沢レイヤーの配置のため
    overflow: "hidden", // 光沢レイヤーをカード内にクリップするため
  };

  const sheenStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)", // 光沢のグラデーション
    opacity: isHovered ? 1 : 0, // ホバー時に表示
    transition: "opacity 0.3s ease-out", // スムーズな表示
  };

  const yaoCoinStyle = {
    fontWeight: 700,
    fontSize: 20,
    color: "#fff",
    fontFamily: "'Rounded M+ 1c', sans-serif",
    whiteSpace: "nowrap", // 改行しない
    letterSpacing: "0.05em", // 字間を調整
  };

  const shinjifukumotoStyle = {
    fontWeight: 700,
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    fontFamily: "'Rounded M+ 1c', sans-serif",
    whiteSpace: "nowrap", // 改行しない
    letterSpacing: "0.05em", // 字間を調整
  };

  const amountStyle = {
    fontWeight: 700,
    fontSize: 64,
    color: "#fff",
    fontFamily: "'Rounded M+ 1c', sans-serif",
    marginTop: "32px",
    textAlign: "left",
  };

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={sheenStyle}></div> {/* 光沢レイヤー */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={yaoCoinStyle}>YAOCOIN</span>
          <span style={shinjifukumotoStyle}>SHINJI FUKUMOTO</span>
        </div>
        <div style={amountStyle}>$10,000</div>
      </div>
    </div>
  );
}