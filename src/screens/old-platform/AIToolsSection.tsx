import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const TEXT = "#323338";
const ICON = "#676879";

// ── SVG Icons ───────────────────────────────────────────────────────────────────

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7.5L8 2L14 7.5V14H10.5V10.5H5.5V14H2V7.5Z"
        stroke={ICON} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="2.5" width="5" height="5" rx="1" stroke={ICON} strokeWidth="1.2" />
      <path d="M2.75 5.25l1.25 1.25 2-2" stroke={ICON} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 5h6" stroke={ICON} strokeWidth="1.2" strokeLinecap="round" />
      <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke={ICON} strokeWidth="1.2" />
      <path d="M8.5 12h4" stroke={ICON} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" stroke={ICON} strokeWidth="1.2" />
      <path d="M3 8.5C3 11.26 5.24 13.5 8 13.5s5-2.24 5-5" stroke={ICON} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 13.5V15" stroke={ICON} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5L9.3 6.7L14.5 8L9.3 9.3L8 14.5L6.7 9.3L1.5 8L6.7 6.7L8 1.5Z" fill={ICON} />
      <path d="M13 1.5L13.6 3.4L15.5 4L13.6 4.6L13 6.5L12.4 4.6L10.5 4L12.4 3.4L13 1.5Z"
        fill={ICON} opacity="0.5" />
    </svg>
  );
}

function AgentsIcon() {
  return (
    <div style={{
      width: 16, height: 16, borderRadius: 3, flexShrink: 0,
      background: "conic-gradient(from 210deg, #9450FD, #0074FD, #00BAFF, #04F0FB)",
    }} />
  );
}

function VibeIcon() {
  return (
    <div style={{
      width: 16, height: 16, borderRadius: 3, flexShrink: 0,
      background: "linear-gradient(116deg, #F0C020, #FF9E52, #FF74CD, #FF92E8)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 0.5L0.5 7H4L3 11.5L8.5 5H5L5.5 0.5Z" fill="white" />
      </svg>
    </div>
  );
}

function WorkflowsIcon() {
  return (
    <div style={{
      width: 16, height: 16, borderRadius: 3, flexShrink: 0,
      background: "conic-gradient(from 197deg, #480DD8, #9450FD, #FF84E4)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.8" cy="5" r="1.5" fill="white" />
        <circle cx="8.2" cy="2" r="1.5" fill="white" />
        <circle cx="8.2" cy="8" r="1.5" fill="white" />
        <path d="M3.3 5L5.5 2.3" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M3.3 5L5.5 7.7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h12M2 8h12M2 12h12" stroke={ICON} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── ToolItem ───────────────────────────────────────────────────────────────────

interface ToolItemProps {
  icon: React.ReactNode;
  label: string;
  activeBackground?: string;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
}

function ToolItem({ icon, label, activeBackground, onClick, rightIcon }: ToolItemProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 200, height: 32, borderRadius: 4, boxSizing: "border-box",
        display: "flex", alignItems: "center",
        padding: "0 8px", gap: 8,
        fontFamily: "'Figtree', sans-serif", fontSize: 14, color: TEXT,
        cursor: onClick ? "pointer" : "default",
        background: activeBackground ?? (hovered ? "rgba(0,0,0,0.05)" : "transparent"),
        flexShrink: 0,
      }}
    >
      {icon}
      <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
      {rightIcon}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 200, padding: "10px 8px 4px",
      fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#676879",
      fontFamily: "'Figtree', sans-serif",
    }}>
      {children}
    </div>
  );
}

// ── Tipseen ────────────────────────────────────────────────────────────────────

function Tipseen({ anchor, onClose, onConfirm }: {
  anchor: DOMRect;
  onClose: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const POPOVER_WIDTH = 300;
  const left = anchor.right + 12;
  const top = anchor.top + anchor.height / 2;

  const popover = (
    <>
      {/* Invisible click-outside overlay */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 1000 }}
      />

      {/* Tipseen card */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -8 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={e => e.stopPropagation()}
        style={{
          position: "fixed",
          left,
          top,
          transform: "translateY(-50%)",
          zIndex: 1001,
          width: POPOVER_WIDTH,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08)",
          fontFamily: "'Figtree', sans-serif",
          overflow: "visible",
        }}
      >
        {/* Left-pointing caret */}
        <div style={{
          position: "absolute",
          left: -7,
          top: "50%",
          transform: "translateY(-50%)",
          width: 0, height: 0,
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderRight: "7px solid #fff",
          filter: "drop-shadow(-2px 0 2px rgba(0,0,0,0.06))",
        }} />

        <div style={{ padding: "18px 18px 14px" }}>
          {/* NEW badge */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "linear-gradient(90deg, #6B3FE7, #0073EA)",
            borderRadius: 20, padding: "2px 9px",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
            color: "#fff", marginBottom: 10,
          }}>
            NEW
          </div>

          {/* Headline */}
          <div style={{ fontSize: 16, fontWeight: 700, color: "#1f1f2e", marginBottom: 6, lineHeight: 1.3 }}>
            Meet your AI Agents
          </div>

          {/* Subtext */}
          <div style={{ fontSize: 13, color: "#676879", lineHeight: 1.5, marginBottom: 14 }}>
            monday AI built agents from your boards. Ready to work — no setup needed.
          </div>

          {/* Agent card preview */}
          <div style={{
            border: "1px solid #e6e9ef", borderRadius: 8, padding: "10px 12px",
            display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
            background: "#fafbfc",
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              background: "conic-gradient(from 197deg, #480DD8, #9450FD, #FF84E4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="10" r="3.5" fill="white" />
                <circle cx="15" cy="5" r="3.5" fill="white" />
                <circle cx="15" cy="15" r="3.5" fill="white" />
                <path d="M8.5 10L11.5 5.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M8.5 10L11.5 14.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1f1f2e", marginBottom: 2 }}>
                Interviews Analyst
              </div>
              <div style={{ fontSize: 12, color: "#676879", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Tracks scheduling and sends reminders
              </div>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 4, flexShrink: 0,
              background: "#f0f4ff", borderRadius: 20, padding: "3px 8px",
              fontSize: 11, fontWeight: 600, color: "#4353ff",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4353ff" }} />
              Ready
            </div>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onConfirm}
            style={{
              width: "100%", height: 38, borderRadius: 7,
              background: "linear-gradient(90deg, #6B3FE7, #0073EA)",
              border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              marginBottom: 6,
            }}
          >
            See your agents on the new platform <span>→</span>
          </button>

          {/* Secondary */}
          <button
            onClick={onClose}
            style={{
              width: "100%", height: 32,
              background: "transparent", border: "none", cursor: "pointer",
              fontSize: 12, color: "#676879",
            }}
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </>
  );

  return ReactDOM.createPortal(popover, document.body);
}

// ── Section ────────────────────────────────────────────────────────────────────

export function AIToolsSection() {
  const navigate = useNavigate();
  const [anchor, setAnchor] = React.useState<DOMRect | null>(null);
  const agentsRef = React.useRef<HTMLDivElement>(null);

  function handleAgentsClick() {
    if (agentsRef.current) {
      setAnchor(agentsRef.current.getBoundingClientRect());
    }
  }

  return (
    <>
      <div style={{ width: 232, display: "flex", flexDirection: "column", padding: "0 8px" }}>
        <ToolItem icon={<HomeIcon />}      label="Home" />
        <ToolItem icon={<CheckListIcon />} label="My work" />

        <SectionLabel>monday AI</SectionLabel>
        <ToolItem icon={<MicIcon />}     label="AI Notetaker" />
        <ToolItem icon={<SparkleIcon />} label="AI" />

        <div ref={agentsRef}>
          <ToolItem
            icon={<AgentsIcon />}
            label="Agents"
            activeBackground="rgba(0,115,234,0.1)"
            onClick={handleAgentsClick}
          />
        </div>

        <ToolItem icon={<VibeIcon />}      label="Vibe" />
        <ToolItem icon={<WorkflowsIcon />} label="Workflows" />

        <div style={{ height: 4 }} />
        <ToolItem
          icon={<MenuIcon />}
          label="More"
          rightIcon={<ChevronRight size={14} color="#676879" />}
        />
      </div>

      <AnimatePresence>
        {anchor && (
          <Tipseen
            key="tipseen"
            anchor={anchor}
            onClose={() => setAnchor(null)}
            onConfirm={() => { setAnchor(null); navigate("/transition"); }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
