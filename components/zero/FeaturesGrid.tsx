"use client"

import { motion } from "framer-motion"

function HeartPulseIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
}
function OxygenIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 1 0 8 0"/><line x1="12" y1="8" x2="12" y2="10"/></svg>
}
function FallIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><path d="M12 7v5l3 3"/><path d="M9 19l3-4 3 4"/></svg>
}
function SleepIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
}
function StressIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.14z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.14z"/></svg>
}
function SOSIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
}
function AITaskIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h3l2 4 2-4h3"/></svg>
}
function LangIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}

const cards = [
  { num: "01", Icon: HeartPulseIcon, name: "Heart Rate Monitor", desc: "Continuous optical PPG tracks pulse 24/7. Get alerts for irregular rhythms and abnormal BPM.", color: "#FF4D6D" },
  { num: "02", Icon: OxygenIcon, name: "Blood Oxygen (SpO2)", desc: "Dual-LED infrared sensing measures oxygen saturation every minute with ±1.5% precision.", color: "#00C8FF" },
  { num: "03", Icon: FallIcon, name: "Fall Detection", desc: "AI-powered 6-axis IMU instantly detects falls and alerts your emergency contacts with GPS.", color: "#FF9500" },
  { num: "04", Icon: SleepIcon, name: "Sleep Tracking", desc: "Automatic REM, deep, and light sleep staging. Wake up to a recovery score and sleep debt analysis.", color: "#3498DB" },
  { num: "05", Icon: StressIcon, name: "Stress & HRV", desc: "Heart Rate Variability analysis reveals your stress level in real time. AI coaches you to recover.", color: "#9B59B6" },
  { num: "06", Icon: SOSIcon, name: "Emergency SOS", desc: "Long-press 3 seconds to send silent SOS with GPS and live health data to your emergency contacts.", color: "#E74C3C" },
  { num: "07", Icon: AITaskIcon, name: "AI Digital Assistant", desc: "Set reminders, send messages, and control smart devices — all from your ring with a gesture or voice command.", color: "#27AE60" },
  { num: "08", Icon: LangIcon, name: "Multilingual Support", desc: "Real-time translation and voice responses in 30+ languages, powered by on-device AI.", color: "#F39C12" },
]


export default function FeaturesGrid() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ background: "#F4F3EF", borderTop: "2px solid #0A0A0A" }}
      className="px-5 py-12 md:px-6 md:py-16"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#00C8FF", marginBottom: 12 }}>
          HEALTH FEATURES
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 800,
            fontSize: "clamp(34px, 7vw, 48px)",
            color: "#0A0A0A",
            letterSpacing: "-2px",
            margin: "0 0 4px",
          }}
        >
          Protect what matters.
        </h2>
        <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 14, color: "#666660", margin: "0 0 36px" }}>
          Six life-saving capabilities. One ring.
        </p>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ paddingRight: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{
                  width: 36, height: 36,
                  background: card.color + "18",
                  border: `1.5px solid ${card.color}40`,
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: card.color, flexShrink: 0
                }}>
                  <span style={{ transform: "scale(0.8)" }}><card.Icon /></span>
                </div>
                <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15, fontWeight: 700, color: "#0A0A0A", margin: 0, lineHeight: 1.2 }}>{card.name}</p>
              </div>
              <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, color: "#666660", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
