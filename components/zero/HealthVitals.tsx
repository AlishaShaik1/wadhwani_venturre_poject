"use client"

import { motion, type Variants } from "framer-motion"
import { useState } from "react"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const vitals = [
  {
    id: "heartrate",
    emoji: "❤️",
    title: "Heart Rate",
    badge: "24/7 Continuous",
    color: "#FF4D6D",
    desc: "High-frequency PPG sensor samples your pulse 250 times per second. Detect irregular rhythms, resting heart rate trends, and activity zones — all without lifting a finger.",
    metrics: [
      { label: "SAMPLE RATE", val: "250 Hz" },
      { label: "ACCURACY", val: "±1 BPM" },
      { label: "ALERT DELAY", val: "< 3 sec" },
      { label: "MONITORING", val: "All Day" },
    ]
  },
  {
    id: "spo2",
    emoji: "🫁",
    title: "SpO2 (Blood Oxygen)",
    badge: "Medical Grade",
    color: "#00C8FF",
    desc: "Dual-wavelength red and infrared LEDs measure blood oxygen saturation with clinical precision. Sends emergency alerts when SpO2 drops below 90%, no button presses needed.",
    metrics: [
      { label: "WAVELENGTHS", val: "2 LEDs" },
      { label: "RANGE", val: "70–99%" },
      { label: "PRECISION", val: "±1.5%" },
      { label: "CHECK RATE", val: "Every min" },
    ]
  },
  {
    id: "fall",
    emoji: "🛡️",
    title: "Fall Detection",
    badge: "AI-Powered",
    color: "#FF9500",
    desc: "The 6-axis IMU captures freefall, sudden deceleration, and impact vectors. An on-device AI model classifies real falls from false positives — then fires an SOS with GPS coordinates to your emergency contacts.",
    metrics: [
      { label: "SENSOR", val: "6-Axis IMU" },
      { label: "LATENCY", val: "< 800 ms" },
      { label: "AI MODEL", val: "On-Device" },
      { label: "GPS", val: "Included" },
    ]
  },
  {
    id: "stress",
    emoji: "🧠",
    title: "Stress & HRV",
    badge: "Nervous System",
    color: "#9B59B6",
    desc: "Heart Rate Variability (HRV) is the most accurate physiological marker of stress and recovery. Innovexa tracks your HRV throughout the day and nudges you to breathe, rest, or hydrate when tension spikes.",
    metrics: [
      { label: "METRIC", val: "RMSSD/HRV" },
      { label: "TRACKING", val: "Continuous" },
      { label: "COACHING", val: "AI Nudges" },
      { label: "HISTORY", val: "90 Days" },
    ]
  },
]

export default function HealthVitals() {
  const [active, setActive] = useState(vitals[0].id)
  const current = vitals.find(v => v.id === active) ?? vitals[0]

  return (
    <motion.section
      id="vitals"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={{ background: "#0A0A0A", padding: "72px 0", overflow: "hidden", width: "100%" }}
    >
      {/* Header */}
      <div style={{ padding: "0 20px", maxWidth: 1100, margin: "0 auto 48px" }}>
        <p style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#00C8FF", fontWeight: 700, marginBottom: 10 }}>
          VITAL MONITORING
        </p>
        <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: "clamp(34px, 7vw, 54px)", letterSpacing: "-2.5px", color: "#F4F3EF", lineHeight: 1.0, margin: "0 0 10px" }}>
          Every metric. <span style={{ color: "#00C8FF" }}>Every second.</span>
        </h2>
        <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15, color: "#888880", maxWidth: 480 }}>
          Hospital-grade sensors packed into a ring. Tap any vital to learn how Innovexa keeps you safe.
        </p>
      </div>

      {/* Tab Switcher */}
      <div style={{ padding: "0 20px", maxWidth: 1100, margin: "0 auto 36px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {vitals.map(v => (
            <button
              key={v.id}
              id={`vital-tab-${v.id}`}
              onClick={() => setActive(v.id)}
              style={{
                background: active === v.id ? v.color : "transparent",
                color: active === v.id ? "#FFFFFF" : "#888880",
                border: `1.5px solid ${active === v.id ? v.color : "#333330"}`,
                borderRadius: 8,
                padding: "8px 18px",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 200ms",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (active !== v.id) (e.currentTarget as HTMLButtonElement).style.borderColor = v.color }}
              onMouseLeave={e => { if (active !== v.id) (e.currentTarget as HTMLButtonElement).style.borderColor = "#333330" }}
            >
              {v.emoji} {v.title}
            </button>
          ))}
        </div>
      </div>

      {/* Detail Card */}
      <div style={{ padding: "0 20px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            background: "#141414",
            border: `2px solid ${current.color}40`,
            borderRadius: 20,
            boxShadow: `0 0 40px ${current.color}18`,
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left: description */}
            <div style={{ flex: 1, padding: "36px 32px 36px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: current.color + "18", border: `1.5px solid ${current.color}40`, borderRadius: 8, padding: "5px 12px", marginBottom: 20 }}>
                <span style={{ fontSize: 14 }}>{current.emoji}</span>
                <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: current.color }}>{current.badge}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: "clamp(24px, 4vw, 36px)", color: "#F4F3EF", letterSpacing: "-1px", margin: "0 0 16px" }}>
                {current.title}
              </h3>
              <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15, color: "#888880", lineHeight: 1.7, maxWidth: 480 }}>
                {current.desc}
              </p>
            </div>

            {/* Right: metrics */}
            <div style={{ width: "100%", maxWidth: 280, background: "#0F0F0F", borderLeft: `1px solid #222220`, padding: "36px 28px", display: "flex", flexDirection: "column", gap: 20, flexShrink: 0 }} className="md:w-64">
              {current.metrics.map(m => (
                <div key={m.label}>
                  <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 9, letterSpacing: "2px", color: "#555550", textTransform: "uppercase", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontFamily: "var(--font-space-mono)", fontWeight: 800, fontSize: 18, color: current.color }}>{m.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Pulse Bar Visualisation */}
          <div style={{ padding: "16px 32px 24px", borderTop: "1px solid #222220" }}>
            <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 9, letterSpacing: "2px", color: "#555550", textTransform: "uppercase", marginBottom: 10 }}>LIVE SENSOR SIMULATION</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
              {[8,14,10,18,12,7,22,16,9,24,15,11,20,8,13,17,10,19,14,9,21,12,8,16,11].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 4 }}
                  animate={{ height: h }}
                  transition={{ duration: 0.4, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  style={{ flex: 1, background: current.color, borderRadius: 2, opacity: 0.7 + (i % 3) * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
