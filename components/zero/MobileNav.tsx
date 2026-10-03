'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, HeartPulse, Activity, Cpu, Tag } from 'lucide-react'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  onPreorder: () => void
}

const navLinks = [
  { label: 'Vitals & Sensors', sub: 'Heart rate, SpO2 & fall detection', href: '/#vitals', icon: HeartPulse },
  { label: 'Health Features', sub: 'Sleep, stress, SOS & AI assistant', href: '/#features', icon: Activity },
  { label: 'Technical Specs', sub: 'Titanium, battery & connectivity', href: '/#specs', icon: Cpu },
  { label: 'Pricing & Plans', sub: 'Early Bird ₹2,900 & Standard', href: '/#pricing', icon: Tag },
]

export default function MobileNav({ open, onClose, onPreorder }: MobileNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mob-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[190] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.nav
            key="mob-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 360, damping: 36 }}
            className="fixed right-0 top-0 bottom-0 z-[200] w-[320px] sm:w-[380px] max-w-[85vw] flex flex-col bg-[#F4F3EF] border-l-2 border-[#0A0A0A] shadow-[-16px_0_40px_rgba(0,0,0,0.15)]"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#0A0A0A] bg-white">
              <div>
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#00C8FF] font-bold block">
                  INNOVEXA RING
                </span>
                <span className="text-base font-extrabold text-[#0A0A0A]">
                  Navigation
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-[#F4F3EF] border-1.5 border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-3">
              <p className="px-1 text-[10px] font-mono font-bold tracking-[2px] uppercase text-[#888880] mb-2">
                SECTIONS
              </p>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border-2 border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 transition-transform text-decoration-none group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-[#00C8FF] flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0A0A0A] leading-tight">
                        {item.label}
                      </div>
                      <div className="text-[11.5px] text-[#666660] mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#888880] group-hover:text-[#0A0A0A] transition-colors" />
                </a>
              ))}
            </div>

            {/* Bottom Preorder Action */}
            <div className="p-5 border-t-2 border-[#0A0A0A] bg-white">
              <button
                onClick={() => {
                  onClose()
                  onPreorder()
                }}
                className="w-full py-3.5 px-4 bg-[#0A0A0A] text-white border-2 border-[#0A0A0A] rounded-xl font-bold text-sm shadow-[3px_3px_0_#00C8FF] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#00C8FF] transition-all cursor-pointer"
              >
                Pre-order Now — ₹3,200
              </button>
              <p className="text-center font-mono text-[10.5px] text-[#888880] mt-2">
                Ships Q3 2026 · Limited First Batch
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
