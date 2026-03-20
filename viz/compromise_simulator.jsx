import { useState, useEffect } from "react";

const thresholdData = [
  { threshold: 10, rate: 0.0, label: "완벽한 사람" },
  { threshold: 9, rate: 4.6, label: "거의 이상형" },
  { threshold: 8, rate: 17.3, label: "강하게 끌림 ← 기준선" },
  { threshold: 7, rate: 40.6, label: "꽤 괜찮은 사람" },
  { threshold: 6, rate: 72.7, label: "나쁘지 않은" },
  { threshold: 5, rate: 93.2, label: "보통 이상" },
];

const goldenPoint = { from: 8, to: 7, fromRate: 17.3, toRate: 40.6 };

const featureSensitivity = [
  { feature: "밀당 텐션", icon: "🔥", delta: 5.8 },
  { feature: "대화 재미", icon: "💬", delta: 4.2 },
  { feature: "서툰 노력", icon: "🥺", delta: 2.1 },
  { feature: "유머 코드", icon: "😂", delta: 1.5 },
  { feature: "향/감각", icon: "🌸", delta: 0.3 },
];

const comboScenarios = [
  { label: "타협 없음", rate: 17.3, color: "#64748B", type: "base" },
  { label: "밀당 1점 양보", rate: 23.1, color: "#60A5FA", type: "single" },
  { label: "대화 1점 양보", rate: 21.5, color: "#60A5FA", type: "single" },
  { label: "서툰노력 1점 양보", rate: 19.4, color: "#60A5FA", type: "single" },
  { label: "밀당 + 유머 동시", rate: 28.7, color: "#34D399", type: "combo" },
  { label: "5개 전부 1점 양보", rate: 38.2, color: "#F87171", type: "allin" },
];

export default function CompromiseSimulator() {
  const [animated, setAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState("curve");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #0B0E17 0%, #10152A 40%, #151D34 100%)",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', -apple-system, sans-serif",
      padding: "48px 24px",
      display: "flex", justifyContent: "center",
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
            Compromise Simulator
          </div>
          <h1 style={{
            fontSize: 32, fontWeight: 800, margin: 0,
            background: "linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            lineHeight: 1.3,
          }}>
            뭘 양보하면 가장 효율적인가
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", marginTop: 8 }}>
            기준 1점의 차이가 만드는 확률 변화
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 28,
          background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 4,
          opacity: animated ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}>
          {[
            { id: "curve", label: "📈 기준별 확률" },
            { id: "feature", label: "⚖️ 피처별 효과" },
            { id: "scenario", label: "🎯 타협 시나리오" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1, padding: "10px 0", border: "none", borderRadius: 10, cursor: "pointer",
                fontSize: 12, fontWeight: 600, transition: "all 0.3s ease",
                background: activeTab === tab.id ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeTab === tab.id ? "#F1F5F9" : "#64748B",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Curve Tab */}
        {activeTab === "curve" && (
          <div>
            {/* Golden Point Card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(245,158,11,0.04) 100%)",
              border: "1px solid rgba(251,191,36,0.2)",
              borderRadius: 16, padding: "22px 26px", marginBottom: 28,
              opacity: animated ? 1 : 0,
              transform: animated ? "scale(1)" : "scale(0.95)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}>
              <div style={{ fontSize: 12, color: "#FBBF24", fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
                ⚡ GOLDEN POINT
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>기준 {goldenPoint.from}+</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#94A3B8" }}>{goldenPoint.fromRate}%</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>6명 중 1명</div>
                </div>
                <div style={{ fontSize: 28, color: "#FBBF24" }}>→</div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#FBBF24" }}>기준 {goldenPoint.to}+</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#FBBF24" }}>{goldenPoint.toRate}%</div>
                  <div style={{ fontSize: 11, color: "#D97706" }}>2~3명 중 1명</div>
                </div>
                <div style={{
                  marginLeft: "auto", padding: "8px 16px",
                  background: "rgba(251,191,36,0.12)", borderRadius: 10,
                  border: "1px solid rgba(251,191,36,0.2)",
                }}>
                  <div style={{ fontSize: 11, color: "#FBBF24", fontWeight: 600 }}>확률 변화</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#FBBF24" }}>×2.3</div>
                </div>
              </div>
            </div>

            {/* Threshold Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {thresholdData.map((d, i) => {
                const isGolden = d.threshold === 7;
                const isBaseline = d.threshold === 8;
                const barWidth = (d.rate / 100) * 100;
                const delay = 0.4 + i * 0.08;
                const barColor = isGolden
                  ? "linear-gradient(90deg, #FBBF24, #F59E0B)"
                  : isBaseline
                    ? "linear-gradient(90deg, #60A5FA, #3B82F6)"
                    : "linear-gradient(90deg, #4A5568, #64748B)";
                return (
                  <div key={d.threshold} style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr 50px",
                    alignItems: "center", gap: 12,
                    padding: "10px 16px", borderRadius: 10,
                    background: isGolden ? "rgba(251,191,36,0.06)" : isBaseline ? "rgba(96,165,250,0.04)" : "transparent",
                    border: isGolden ? "1px solid rgba(251,191,36,0.12)" : isBaseline ? "1px solid rgba(96,165,250,0.08)" : "1px solid transparent",
                    opacity: animated ? 1 : 0,
                    transform: animated ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <span style={{
                        fontSize: 14, fontWeight: 700,
                        color: isGolden ? "#FBBF24" : isBaseline ? "#60A5FA" : "#94A3B8",
                      }}>
                        y2≥{d.threshold}
                      </span>
                    </div>
                    <div style={{ position: "relative", height: 28, borderRadius: 6, background: "rgba(255,255,255,0.03)", overflow: "hidden" }}>
                      <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: animated ? `${barWidth}%` : "0%",
                        background: barColor, borderRadius: 6,
                        transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                        boxShadow: isGolden ? "0 0 20px rgba(251,191,36,0.2)" : "none",
                      }} />
                      <div style={{
                        position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                        fontSize: 10, color: "rgba(255,255,255,0.4)",
                      }}>
                        {d.label}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 15, fontWeight: 700, textAlign: "right",
                      color: isGolden ? "#FBBF24" : isBaseline ? "#60A5FA" : "#94A3B8",
                      fontVariantNumeric: "tabular-nums",
                    }}>
                      {d.rate.toFixed(1)}%
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 24, padding: "18px 22px",
              background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.08)",
              borderRadius: 14,
              opacity: animated ? 1 : 0, transition: "all 0.8s ease 1.2s",
            }}>
              <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                💡 <strong style={{ color: "#FBBF24" }}>8→7 구간</strong>이 골든 포인트입니다.
                1점 차이가 <strong style={{ color: "#F1F5F9" }}>"6명 중 1명"</strong>을 <strong style={{ color: "#F1F5F9" }}>"3명 중 1명"</strong>으로 바꿉니다.
              </p>
            </div>
          </div>
        )}

        {/* Feature Tab */}
        {activeTab === "feature" && (
          <div>
            <div style={{ fontSize: 12, color: "#64748B", marginBottom: 16, fontWeight: 600, letterSpacing: 0.5 }}>
              각 피처 기준을 1점 낮출 때 이상형 확률 변화
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {featureSensitivity.map((d, i) => {
                const maxDelta = featureSensitivity[0].delta;
                const barWidth = (d.delta / maxDelta) * 100;
                const delay = 0.3 + i * 0.1;
                const isTop = i === 0;
                return (
                  <div
                    key={d.feature}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 84px 1fr 64px",
                      alignItems: "center", gap: 12,
                      padding: "14px 18px", borderRadius: 12,
                      background: hoveredIdx === i
                        ? "rgba(255,255,255,0.04)"
                        : isTop ? "rgba(96,165,250,0.06)" : "transparent",
                      border: isTop ? "1px solid rgba(96,165,250,0.12)" : "1px solid transparent",
                      transition: "all 0.3s ease",
                      cursor: "default",
                      opacity: animated ? 1 : 0,
                      transform: animated ? "translateX(0)" : "translateX(-30px)",
                      transitionDelay: `${delay}s`,
                      transitionProperty: "opacity, transform, background",
                      transitionDuration: "0.6s, 0.6s, 0.3s",
                    }}
                  >
                    <span style={{ fontSize: 20, textAlign: "center" }}>{d.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: isTop ? 700 : 500, color: isTop ? "#F1F5F9" : "#94A3B8" }}>{d.feature}</span>
                    <div style={{ position: "relative", height: 30, borderRadius: 8, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                      <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: animated ? `${barWidth}%` : "0%",
                        background: isTop
                          ? "linear-gradient(90deg, #60A5FA, #3B82F6)"
                          : i < 3
                            ? "linear-gradient(90deg, #34D399, #10B981)"
                            : "linear-gradient(90deg, #64748B, #94A3B8)",
                        borderRadius: 8,
                        transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      }} />
                      {isTop && (
                        <div style={{
                          position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                          fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 700,
                          opacity: animated ? 1 : 0,
                          transition: `opacity 0.5s ease ${delay + 0.6}s`,
                        }}>
                          🏆 가성비 1위
                        </div>
                      )}
                    </div>
                    <span style={{
                      fontSize: 14, fontWeight: 700, textAlign: "right",
                      color: isTop ? "#60A5FA" : i < 3 ? "#34D399" : "#94A3B8",
                    }}>
                      +{d.delta.toFixed(1)}%p
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 24, padding: "18px 22px",
              background: "rgba(96,165,250,0.04)", border: "1px solid rgba(96,165,250,0.08)",
              borderRadius: 14,
              opacity: animated ? 1 : 0, transition: "all 0.8s ease 1s",
            }}>
              <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                💡 <strong style={{ color: "#60A5FA" }}>밀당 텐션</strong> 기준을 1점 낮추는 것이 가장 효율적입니다.
                외모나 향/감각을 양보하는 것보다 <strong style={{ color: "#F1F5F9" }}>19배 더 효과적</strong>입니다.
              </p>
            </div>
          </div>
        )}

        {/* Scenario Tab */}
        {activeTab === "scenario" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {comboScenarios.map((d, i) => {
                const barWidth = (d.rate / 45) * 100;
                const delay = 0.3 + i * 0.08;
                const isBase = d.type === "base";
                const isAllin = d.type === "allin";
                const isCombo = d.type === "combo";
                const people = d.rate > 0 ? `${Math.round(100 / d.rate)}명 중 1명` : "∞";
                return (
                  <div key={d.label} style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr 100px",
                    alignItems: "center", gap: 12,
                    padding: "12px 18px", borderRadius: 12,
                    background: isAllin ? "rgba(248,113,113,0.06)" : isCombo ? "rgba(52,211,153,0.05)" : "transparent",
                    border: isAllin ? "1px solid rgba(248,113,113,0.12)" : isCombo ? "1px solid rgba(52,211,153,0.1)" : "1px solid transparent",
                    opacity: animated ? 1 : 0,
                    transform: animated ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                  }}>
                    <span style={{
                      fontSize: 13,
                      fontWeight: isBase ? 400 : 600,
                      color: isBase ? "#64748B" : isAllin ? "#F87171" : isCombo ? "#34D399" : "#93C5FD",
                    }}>{d.label}</span>
                    <div style={{ position: "relative", height: 28, borderRadius: 6, background: "rgba(255,255,255,0.03)", overflow: "hidden" }}>
                      <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: animated ? `${barWidth}%` : "0%",
                        background: isAllin
                          ? "linear-gradient(90deg, #F87171, #EF4444)"
                          : isCombo
                            ? "linear-gradient(90deg, #34D399, #10B981)"
                            : isBase
                              ? "linear-gradient(90deg, #64748B, #475569)"
                              : "linear-gradient(90deg, #60A5FA, #3B82F6)",
                        borderRadius: 6,
                        transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      }} />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{
                        fontSize: 14, fontWeight: 700,
                        color: isAllin ? "#F87171" : isCombo ? "#34D399" : isBase ? "#64748B" : "#93C5FD",
                      }}>{d.rate.toFixed(1)}%</span>
                      <span style={{ fontSize: 10, color: "#64748B", display: "block", marginTop: 1 }}>
                        {people}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 24, padding: "18px 22px",
              background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.08)",
              borderRadius: 14,
              opacity: animated ? 1 : 0, transition: "all 0.8s ease 1s",
            }}>
              <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
                💡 모든 기준을 1점씩 낮추면 확률이 <strong style={{ color: "#F87171" }}>2.2배</strong> 뛰지만,
                <strong style={{ color: "#34D399" }}> 밀당 + 유머 조합</strong>만으로도 1.7배 효과를 얻을 수 있습니다.
                전부 타협할 필요 없이, 핵심 2개만 양보하는 게 가성비입니다.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center", fontSize: 11, color: "#475569",
          opacity: animated ? 1 : 0, transition: "opacity 1s ease 2s",
        }}>
          22 people · Compromise Simulator · Monte Carlo n=10,000
        </div>
      </div>
    </div>
  );
}
