import { useState, useEffect } from "react";

const data = [
  { feature: "대화 재미", icon: "💬", pct: 72.0, rank: 1 },
  { feature: "밀당 텐션", icon: "🔥", pct: 13.0, rank: 2 },
  { feature: "서툰 노력", icon: "🥺", pct: 6.5, rank: 3 },
  { feature: "유머 코드", icon: "😂", pct: 5.4, rank: null },
  { feature: "목소리", icon: "🎵", pct: 1.5, rank: null },
  { feature: "외모", icon: "👀", pct: 0.8, rank: null },
  { feature: "솔직함", icon: "🪞", pct: 0.4, rank: null },
  { feature: "향/감각", icon: "🌸", pct: 0.1, rank: null },
  { feature: "지적 예리함", icon: "🧠", pct: 0.1, rank: null },
  { feature: "돌봄 충동", icon: "💗", pct: 0.0, rank: null },
  { feature: "상호보완", icon: "🤝", pct: 0.0, rank: null },
  { feature: "사회적 장벽", icon: "🚧", pct: 0.0, rank: null },
];

const top3Total = data.slice(0, 3).reduce((s, d) => s + d.pct, 0);

const rankBadge = { 1: "🥇", 2: "🥈", 3: "🥉" };

const accentColors = {
  1: { bar: "linear-gradient(90deg, #FF6B6B, #FF8E8E)", glow: "rgba(255,107,107,0.3)", text: "#FF6B6B" },
  2: { bar: "linear-gradient(90deg, #FFA07A, #FFB899)", glow: "rgba(255,160,122,0.25)", text: "#FFA07A" },
  3: { bar: "linear-gradient(90deg, #FFD700, #FFE44D)", glow: "rgba(255,215,0,0.2)", text: "#FFD700" },
};

const defaultBar = "linear-gradient(90deg, #4A5568, #5A6A7E)";

export default function SelfAnalysis() {
  const [animated, setAnimated] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #0B0E17 0%, #131829 40%, #1A1F35 100%)",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', -apple-system, sans-serif",
      padding: "48px 24px",
      display: "flex",
      justifyContent: "center",
      color: "#E2E8F0",
    }}>
      <div style={{ maxWidth: 640, width: "100%" }}>

        {/* Header */}
        <div style={{ marginBottom: 48, opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#64748B", marginBottom: 12 }}>
            Feature Importance Analysis
          </div>
          <h1 style={{
            fontSize: 32,
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.3,
          }}>
            당신의 끌림을 결정하는 것들
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", marginTop: 8, lineHeight: 1.5 }}>
            어떤 특성이 당신의 호감에 가장 큰 영향을 미치는가
          </p>
        </div>

        {/* TOP 3 Summary Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255,107,107,0.08) 0%, rgba(255,215,0,0.05) 100%)",
          border: "1px solid rgba(255,107,107,0.15)",
          borderRadius: 16,
          padding: "20px 24px",
          marginBottom: 36,
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 14 }}>🎯</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", letterSpacing: 1 }}>TOP 3 합산</span>
            <span style={{
              fontSize: 22, fontWeight: 800, color: "#FF6B6B", marginLeft: "auto",
            }}>{top3Total.toFixed(1)}%</span>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {data.slice(0, 3).map((d, i) => (
              <span key={i} style={{
                fontSize: 13,
                padding: "4px 12px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${accentColors[d.rank]?.text}33`,
                color: accentColors[d.rank]?.text || "#94A3B8",
              }}>
                {d.icon} {d.feature}
              </span>
            ))}
          </div>
        </div>

        {/* Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {data.map((d, i) => {
            const isTop3 = d.rank !== null;
            const accent = accentColors[d.rank];
            const isHovered = hoveredIdx === i;
            const barWidth = Math.max(d.pct / data[0].pct * 100, 2);
            const delay = 0.3 + i * 0.06;

            return (
              <div
                key={d.feature}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "28px 90px 1fr 52px",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: isHovered
                    ? "rgba(255,255,255,0.04)"
                    : isTop3
                      ? `linear-gradient(90deg, ${accent.glow}, transparent)`
                      : "transparent",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateX(0)" : "translateX(-30px)",
                  transitionDelay: `${delay}s`,
                  transitionProperty: "opacity, transform, background",
                  transitionDuration: "0.6s, 0.6s, 0.3s",
                }}
              >
                {/* Icon */}
                <span style={{ fontSize: 20, textAlign: "center" }}>{d.icon}</span>

                {/* Label */}
                <span style={{
                  fontSize: 14,
                  fontWeight: isTop3 ? 700 : 400,
                  color: isTop3 ? "#F1F5F9" : "#94A3B8",
                  whiteSpace: "nowrap",
                }}>{d.feature}</span>

                {/* Bar */}
                <div style={{ position: "relative", height: 28, borderRadius: 8, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                  <div style={{
                    position: "absolute",
                    left: 0, top: 0, bottom: 0,
                    width: animated ? `${barWidth}%` : "0%",
                    background: isTop3 ? accent.bar : defaultBar,
                    borderRadius: 8,
                    transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                    boxShadow: isTop3 ? `0 0 20px ${accent.glow}` : "none",
                  }} />
                  {d.rank && (
                    <div style={{
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: 14,
                      opacity: animated ? 1 : 0,
                      transition: `opacity 0.5s ease ${delay + 0.8}s`,
                    }}>
                      {rankBadge[d.rank]}
                    </div>
                  )}
                </div>

                {/* Percentage */}
                <span style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: isTop3 ? accent.text : "#64748B",
                  textAlign: "right",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {d.pct.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>

        {/* Insight Card */}
        <div style={{
          marginTop: 36,
          padding: "24px 28px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s",
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#94A3B8", marginBottom: 10, letterSpacing: 0.5 }}>
            💡 인사이트
          </div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
            당신의 끌림에서 <strong style={{ color: "#FF6B6B" }}>대화의 재미</strong>가 차지하는 비중이
            압도적입니다. 외모, 목소리 같은 감각적 요소보다
            <strong style={{ color: "#FFA07A" }}> 밀당의 긴장감</strong>과
            <strong style={{ color: "#FFD700" }}> 서툴지만 노력하는 모습</strong>에
            훨씬 강하게 반응합니다.
          </p>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 32,
          textAlign: "center",
          fontSize: 11,
          color: "#475569",
          opacity: animated ? 1 : 0,
          transition: "opacity 1s ease 2s",
        }}>
          22 people · XGBoost Feature Importance · 12 features
        </div>
      </div>
    </div>
  );
}
