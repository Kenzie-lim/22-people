import { useState, useEffect } from "react";

const idealProfile = [
  { feature: "밀당 텐션", icon: "🔥", score: 7.9 },
  { feature: "대화 재미", icon: "💬", score: 7.7 },
  { feature: "외모", icon: "👀", score: 6.2 },
  { feature: "목소리", icon: "🎵", score: 6.0 },
  { feature: "향/감각", icon: "🌸", score: 5.7 },
  { feature: "유머 코드", icon: "😂", score: 5.6 },
  { feature: "상호보완", icon: "🤝", score: 5.4 },
  { feature: "지적 예리함", icon: "🧠", score: 5.0 },
  { feature: "서툰 노력", icon: "🥺", score: 4.8 },
  { feature: "돌봄 충동", icon: "💗", score: 4.7 },
  { feature: "사회적 장벽", icon: "🚧", score: 3.4 },
  { feature: "솔직함", icon: "🪞", score: 3.1 },
];

const closestPerson = {
  name: "Subject #11",
  distance: 6.02,
  residuals: [
    { feature: "사회적 장벽", icon: "🚧", diff: 1.4 },
    { feature: "외모", icon: "👀", diff: 0.2 },
    { feature: "상호보완", icon: "🤝", diff: -0.6 },
    { feature: "밀당 텐션", icon: "🔥", diff: -1.1 },
    { feature: "돌봄 충동", icon: "💗", diff: -1.3 },
    { feature: "대화 재미", icon: "💬", diff: -1.3 },
    { feature: "유머 코드", icon: "😂", diff: -1.4 },
    { feature: "솔직함", icon: "🪞", diff: -1.9 },
    { feature: "목소리", icon: "🎵", diff: -2.0 },
    { feature: "지적 예리함", icon: "🧠", diff: -2.0 },
    { feature: "향/감각", icon: "🌸", diff: -2.3 },
    { feature: "서툰 노력", icon: "🥺", diff: -3.2 },
  ],
};

const getScoreColor = (score) => {
  if (score >= 7) return { bg: "linear-gradient(90deg, #6EE7B7, #34D399)", text: "#6EE7B7", glow: "rgba(110,231,183,0.25)" };
  if (score >= 5) return { bg: "linear-gradient(90deg, #93C5FD, #60A5FA)", text: "#93C5FD", glow: "rgba(147,197,253,0.15)" };
  return { bg: "linear-gradient(90deg, #A1A1AA, #71717A)", text: "#A1A1AA", glow: "none" };
};

const getDiffColor = (diff) => {
  if (diff > 0) return "#F87171";
  if (diff < -2) return "#6EE7B7";
  if (diff < 0) return "#60A5FA";
  return "#A1A1AA";
};

export default function IdealTypeGenerator() {
  const [animated, setAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #0B0E17 0%, #0F1628 40%, #141C30 100%)",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', -apple-system, sans-serif",
      padding: "48px 24px",
      display: "flex",
      justifyContent: "center",
      color: "#E2E8F0",
    }}>
      <div style={{ maxWidth: 640, width: "100%" }}>

        {/* Header */}
        <div style={{
          marginBottom: 40,
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#64748B", marginBottom: 12 }}>
            Ideal Type Generator
          </div>
          <h1 style={{
            fontSize: 32, fontWeight: 800, margin: 0,
            background: "linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            lineHeight: 1.3,
          }}>
            당신의 이상형은 이런 사람
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", marginTop: 8 }}>
            y2 ≥ 8 예측 프로필을 역산한 피처 조합
          </p>
        </div>

        {/* Tab */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 28,
          background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 4,
          opacity: animated ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}>
          {[
            { id: "profile", label: "🧬 이상형 프로필" },
            { id: "match", label: "🎯 가장 가까운 사람" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1, padding: "10px 0", border: "none", borderRadius: 10, cursor: "pointer",
                fontSize: 13, fontWeight: 600, transition: "all 0.3s ease",
                background: activeTab === tab.id ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeTab === tab.id ? "#F1F5F9" : "#64748B",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {idealProfile.map((d, i) => {
              const color = getScoreColor(d.score);
              const barWidth = (d.score / 10) * 100;
              const delay = 0.3 + i * 0.05;
              return (
                <div key={d.feature} style={{
                  display: "grid",
                  gridTemplateColumns: "28px 84px 1fr 44px",
                  alignItems: "center", gap: 10,
                  padding: "9px 14px", borderRadius: 10,
                  background: d.score >= 7 ? `linear-gradient(90deg, ${color.glow}, transparent)` : "transparent",
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                }}>
                  <span style={{ fontSize: 18, textAlign: "center" }}>{d.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: d.score >= 7 ? 700 : 400, color: d.score >= 7 ? "#F1F5F9" : "#94A3B8" }}>{d.feature}</span>
                  <div style={{ position: "relative", height: 24, borderRadius: 6, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: animated ? `${barWidth}%` : "0%",
                      background: color.bg, borderRadius: 6,
                      transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      boxShadow: d.score >= 7 ? `0 0 16px ${color.glow}` : "none",
                    }} />
                    {/* 10점 스케일 눈금 */}
                    {[...Array(9)].map((_, j) => (
                      <div key={j} style={{
                        position: "absolute", left: `${(j + 1) * 10}%`, top: 0, bottom: 0,
                        width: 1, background: "rgba(255,255,255,0.03)",
                      }} />
                    ))}
                  </div>
                  <span style={{
                    fontSize: 14, fontWeight: 700, color: color.text,
                    textAlign: "right", fontVariantNumeric: "tabular-nums",
                  }}>{d.score}</span>
                </div>
              );
            })}

            {/* Insight */}
            <div style={{
              marginTop: 24, padding: "20px 24px",
              background: "rgba(110,231,183,0.04)",
              border: "1px solid rgba(110,231,183,0.1)",
              borderRadius: 14,
              opacity: animated ? 1 : 0,
              transition: "all 0.8s ease 1.2s",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#6EE7B7", marginBottom: 8 }}>💡 프로필 해석</div>
              <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                이상형이 되려면 <strong style={{ color: "#6EE7B7" }}>밀당 텐션 7.9</strong>와 <strong style={{ color: "#6EE7B7" }}>대화 재미 7.7</strong>이 압도적으로 중요합니다.
                반면 외모·목소리는 6점대면 충분하고, 감각적 요소보다 <strong style={{ color: "#93C5FD" }}>상호작용의 질</strong>이 핵심입니다.
              </p>
            </div>
          </div>
        )}

        {/* Match Tab */}
        {activeTab === "match" && (
          <div>
            {/* Person Card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(147,197,253,0.03) 100%)",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: 16, padding: "24px 28px", marginBottom: 28,
              opacity: animated ? 1 : 0,
              transition: "opacity 0.6s ease 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 2, marginBottom: 4 }}>CLOSEST MATCH</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#F1F5F9" }}>
                    🎯 {closestPerson.name}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#64748B" }}>거리</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#60A5FA" }}>{closestPerson.distance}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{
                  flex: 1, padding: "10px 14px", borderRadius: 10,
                  background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.15)",
                }}>
                  <div style={{ fontSize: 11, color: "#F87171", fontWeight: 600, marginBottom: 2 }}>더 있었으면</div>
                  <div style={{ fontSize: 12, color: "#CBD5E1" }}>사회적 장벽, 외모</div>
                </div>
                <div style={{
                  flex: 1, padding: "10px 14px", borderRadius: 10,
                  background: "rgba(110,231,183,0.06)", border: "1px solid rgba(110,231,183,0.12)",
                }}>
                  <div style={{ fontSize: 11, color: "#6EE7B7", fontWeight: 600, marginBottom: 2 }}>오히려 넘쳤던</div>
                  <div style={{ fontSize: 12, color: "#CBD5E1" }}>서툰 노력, 향/감각, 지적 예리함</div>
                </div>
              </div>
            </div>

            {/* Residual Bars */}
            <div style={{ fontSize: 12, color: "#64748B", marginBottom: 12, fontWeight: 600, letterSpacing: 0.5 }}>
              이상형 대비 잔차 — 양수 = 부족, 음수 = 초과
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {closestPerson.residuals.map((d, i) => {
                const maxAbs = 3.5;
                const barPct = Math.abs(d.diff) / maxAbs * 45;
                const isPositive = d.diff > 0;
                const delay = 0.2 + i * 0.04;
                return (
                  <div key={d.feature} style={{
                    display: "grid",
                    gridTemplateColumns: "28px 80px 1fr 42px",
                    alignItems: "center", gap: 8,
                    padding: "7px 12px", borderRadius: 8,
                    opacity: animated ? 1 : 0,
                    transition: `opacity 0.5s ease ${delay}s`,
                  }}>
                    <span style={{ fontSize: 16, textAlign: "center" }}>{d.icon}</span>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{d.feature}</span>
                    <div style={{ position: "relative", height: 20, borderRadius: 4 }}>
                      {/* Center line */}
                      <div style={{
                        position: "absolute", left: "50%", top: 0, bottom: 0,
                        width: 1, background: "rgba(255,255,255,0.15)",
                      }} />
                      {/* Bar */}
                      <div style={{
                        position: "absolute",
                        top: 3, bottom: 3,
                        borderRadius: 3,
                        background: getDiffColor(d.diff),
                        opacity: 0.7,
                        ...(isPositive
                          ? { left: "50%", width: animated ? `${barPct}%` : "0%" }
                          : { right: "50%", width: animated ? `${barPct}%` : "0%" }
                        ),
                        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      }} />
                    </div>
                    <span style={{
                      fontSize: 13, fontWeight: 600, textAlign: "right",
                      color: getDiffColor(d.diff),
                      fontVariantNumeric: "tabular-nums",
                    }}>
                      {d.diff > 0 ? "+" : ""}{d.diff.toFixed(1)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Insight */}
            <div style={{
              marginTop: 24, padding: "20px 24px",
              background: "rgba(96,165,250,0.04)",
              border: "1px solid rgba(96,165,250,0.1)",
              borderRadius: 14,
              opacity: animated ? 1 : 0,
              transition: "all 0.8s ease 1s",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#60A5FA", marginBottom: 8 }}>💡 매칭 해석</div>
              <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#F1F5F9" }}>{closestPerson.name}</strong>은(는) 이상형에 가장 가까운 사람이지만,
                이상형 평균보다 거의 모든 피처가 <strong style={{ color: "#6EE7B7" }}>더 높습니다</strong>.
                특히 서툰 노력(-3.2), 향/감각(-2.3)이 이상형이 요구하는 것보다 훨씬 강했습니다.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center", fontSize: 11, color: "#475569",
          opacity: animated ? 1 : 0, transition: "opacity 1s ease 2s",
        }}>
          22 people · Ideal Type Generator · XGBoost Reverse Engineering
        </div>
      </div>
    </div>
  );
}
