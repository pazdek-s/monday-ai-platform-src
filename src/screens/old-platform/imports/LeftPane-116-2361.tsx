import React from "react";

const TEXT = "#323338";
const LABEL = "#676879";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: "10px 8px 4px",
      fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: LABEL,
      fontFamily: "'Figtree', sans-serif",
    }}>
      {children}
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: 32, borderRadius: 4, display: "flex", alignItems: "center",
        padding: "0 8px", gap: 8,
        fontFamily: "'Figtree', sans-serif", fontSize: 14, color: TEXT,
        cursor: "pointer",
        background: hovered ? "rgba(0,0,0,0.05)" : "transparent",
      }}
    >
      {icon}
      <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L9.6 6.2H14L10.7 8.8L11.9 13L8 10.5L4.1 13L5.3 8.8L2 6.2H6.4L8 2Z"
        stroke={LABEL} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke={LABEL} strokeWidth="1.2" />
      <path d="M8 5.5V8L9.5 9.5" stroke={LABEL} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 5C2 4.45 2.45 4 3 4H6.5L8 5.5H13C13.55 5.5 14 5.95 14 6.5V12C14 12.55 13.55 13 13 13H3C2.45 13 2 12.55 2 12V5Z"
        stroke={LABEL} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function BoardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke={LABEL} strokeWidth="1.2" />
      <path d="M2 6h12" stroke={LABEL} strokeWidth="1.2" />
      <path d="M6 6v8" stroke={LABEL} strokeWidth="1.2" />
    </svg>
  );
}

export default function ExpandedLeftPaneContent() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", width: "100%",
      padding: "0 8px",
      fontFamily: "'Figtree', sans-serif",
    }}>
      {/* Favorites */}
      <SectionLabel>Favorites</SectionLabel>
      <NavItem icon={<BoardIcon />} label="Recruitment Pipeline" />
      <NavItem icon={<BoardIcon />} label="Q2 Roadmap" />

      {/* Recently Viewed */}
      <SectionLabel>Recently Viewed</SectionLabel>
      <NavItem icon={<ClockIcon />} label="Onboarding Tasks" />

      {/* Workspaces */}
      <SectionLabel>Workspaces</SectionLabel>
      <NavItem icon={<FolderIcon />} label="Product" />
      <NavItem icon={<FolderIcon />} label="Marketing" />
      <NavItem icon={<FolderIcon />} label="Engineering" />
    </div>
  );
}
