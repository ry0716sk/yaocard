import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google"; // Robotoフォントに一時的に変更

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [displayAmount, setDisplayAmount] = useState(0);
  const targetAmount = 10000;

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1000; // アニメーション時間 (ms)

    const animateAmount = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayAmount(Math.floor(progress * targetAmount));

      if (progress < 1) {
        requestAnimationFrame(animateAmount);
      }
    };

    requestAnimationFrame(animateAmount);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    background: "#FFFFFF", // 背景は白
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1000px", // 3D効果のためにperspectiveを追加
    animation: "float 3s ease-in-out infinite", // 浮遊アニメーションをコンテナに適用
    padding: "0 20px", // 左右に余白
    boxSizing: "border-box", // paddingをwidthに含める
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #2a34c0, #3640E0)", // グラデーションを追加
    borderRadius: "10px", // 角丸
    maxWidth: "500px", // カードの最大幅
    width: "100%", // 画面幅に合わせて調整
    aspectRatio: "5 / 3", // アスペクト比を固定 (幅500px, 高さ300pxの場合)
    boxShadow: isHovered ? "0px 15px 30px 0px rgba(0,0,0,0.3), 0px 5px 10px 0px rgba(0,0,0,0.1)" : "0px 5px 15px 0px rgba(0,0,0,0.15)", // よりリッチな影
    padding: "40px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    whiteSpace: "nowrap", // 改行しない
    letterSpacing: "0.05em", // 字間を調整
  };

  const userNameStyle = {
    fontWeight: 700,
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    whiteSpace: "nowrap", // 改行しない
    letterSpacing: "0.05em", // 字間を調整
  };

  const amountStyle = {
    fontWeight: 700,
    fontSize: 64,
    color: "#fff",
    marginTop: "32px",
    textAlign: "left",
  };

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={roboto.className} // フォントクラスを適用
      >
        <div style={sheenStyle}></div> {/* 光沢レイヤー */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={yaoCoinStyle}>YAOCOIN</span>
          <span style={userNameStyle}>USER NAME</span>
        </div>
        <div style={amountStyle}>${displayAmount.toLocaleString()}</div>
      </div>
    </div>
  );
}