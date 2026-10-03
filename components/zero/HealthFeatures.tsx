"use client"

import { motion } from "framer-motion"

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}
function OxygenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8M12 8v8"/>
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function BrainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.14z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.14z"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

const healthFeatures = [
  {
    num: "01",
    Icon: HeartIcon,
    name: "Heart Rate Monitor",
    desc: "Continuous 24/7 optical heart rate sensing with high-frequency PPG. Detect arrhythmia, bradycardia, and tachycardia patterns in real time.",
    color: "#FF4D6D"
  },
  {
    num: "02",
    Icon: OxygenIcon,
    name: "Blood Oxygen (SpO2)",
    desc: "Medical-grade SpO2 sensing measures blood oxygen saturation every minute. Alerts fire instantly when levels drop below safe thresholds.",
    color: "#00C8FF"
  },
  {
    num: "03",
    Icon: ShieldIcon,
    name: "Fall Detection",
    desc: "6-axis IMU with AI fall-classification detects sudden impact and freefall. Automatically notifies emergency contacts with GPS location.",
    color: "#FF9500"
  },
  {
    num: "04",
    Icon: BrainIcon,
    name: "Stress & HRV Analysis",
    desc: "Heart Rate Variability (HRV) tracks your autonomic nervous system. Real-time stress scoring helps you breathe, pause, and recover.",
    color: "#9B59B6"
  },
  {
    num: "05",
    Icon: MoonIcon,
    name: "Sleep Quality Tracking",
    desc: "Detects REM, light, and deep sleep stages via actigraphy and SpO2. Morning insights score your recovery and surface sleep debt.",
    color: "#3498DB"
  },
  {
    num: "06",
    Icon: AlertIcon,
    name: "Emergency SOS",
    desc: "Long-press 3 seconds to trigger silent SOS. Shares real-time GPS location and health data with your emergency contacts instantly.",
    color: "#E74C3C"
  },
]

export default function HealthFeatures() {
  return (
    <motion.section
      id="health"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ background: "#F4F3EF", borderTop: "2px solid #0A0A0A" }}
      className="px-5 py-14 md:px-6 md:py-20"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#00C8FF", marginBottom: 12 }}>
          HEALTH INTELLIGENCE
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 800,
            fontSize: "clamp(34px, 7vw, 52px)",
            color: "#0A0A0A",
            letterSpacing: "-2px",
            margin: "0 0 4px",
          }}
        >
          Your health, protected.
        </h2>
        <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15, color: "#666660", margin: "0 0 48px", maxWidth: 520 }}>
          Clinical-grade sensors in a ring you barely notice. Innovexa watches your vitals 24/7 — so you don't have to.
        </p>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-3">
          {healthFeatures.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ paddingRight: 8 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 38, height: 38,
                  background: card.color + "18",
                  border: `1.5px solid ${card.color}40`,
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: card.color, flexShrink: 0
                }}>
                  <span style={{ transform: "scale(0.88)" }}><card.Icon /></span>
                </div>
                <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15, fontWeight: 700, color: "#0A0A0A", margin: 0, lineHeight: 1.2 }}>{card.name}</p>
              </div>
              <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, color: "#666660", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
