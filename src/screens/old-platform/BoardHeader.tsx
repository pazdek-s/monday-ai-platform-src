import React from "react";
import { ChevronDown, Zap, GitBranch, Search, User, Filter, ArrowUpDown, EyeOff, LayoutGrid, MoreHorizontal, UserPlus } from "lucide-react";

const btnStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 6, height: 32, padding: "0 8px",
  background: "transparent", border: "none", cursor: "pointer",
  borderRadius: "var(--border-radius-small)", fontSize: 14,
  color: "var(--primary-text-color)",
};

export const BoardHeader: React.FC = () => (
  <div style={{ background: "var(--primary-background-color)", padding: "18px 0 8px" }}>
    {/* Title row */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600, fontFamily: "Poppins, sans-serif", color: "var(--primary-text-color)" }}>
          Recruitment pipeline
        </h2>
        <button style={{ ...btnStyle, padding: "0 4px" }}><ChevronDown size={16} color="var(--secondary-text-color)" /></button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button style={btnStyle}><GitBranch size={16} color="var(--secondary-text-color)" /> Integrate</button>
        <button style={btnStyle}><Zap size={16} color="var(--secondary-text-color)" /> Automate</button>
        <div style={{ width: 1, height: 20, background: "var(--ui-border-color)", margin: "0 4px" }} />
        <button style={{ ...btnStyle, border: "1px solid var(--ui-border-color)" }}>
          <UserPlus size={15} /> Invite
        </button>
        <button style={{ ...btnStyle, padding: "0 6px" }}><MoreHorizontal size={18} color="var(--secondary-text-color)" /></button>
      </div>
    </div>

    {/* Toolbar */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6, height: 32, padding: "0 8px",
          border: "1px solid var(--ui-border-color)", borderRadius: "var(--border-radius-small)",
          fontSize: 14, color: "var(--secondary-text-color)", background: "#fff", cursor: "pointer",
        }}>
          <LayoutGrid size={16} /> Main table <ChevronDown size={14} />
        </div>
        <div style={{ width: 1, height: 24, background: "var(--ui-border-color)" }} />

        <div style={{ display: "flex", height: 32, borderRadius: "var(--border-radius-small)", overflow: "hidden" }}>
          <button style={{ background: "var(--primary-color)", border: "none", padding: "0 10px", fontSize: 14, color: "#fff", cursor: "pointer" }}>
            New Item
          </button>
          <button style={{ background: "var(--primary-color)", border: "none", borderLeft: "1px solid rgba(0,0,0,0.2)", width: 24, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronDown size={12} color="#fff" />
          </button>
        </div>

        {[
          { icon: <Search size={15} />, label: "Search" },
          { icon: <User size={15} />, label: "Person" },
          { icon: <Filter size={15} />, label: "Filter" },
          { icon: <ArrowUpDown size={15} />, label: "Sort" },
          { icon: <EyeOff size={15} />, label: "Hide" },
          { icon: <LayoutGrid size={15} />, label: "Group By" },
        ].map(({ icon, label }) => (
          <button key={label} style={{ ...btnStyle, color: "var(--primary-text-color)" }}>
            <span style={{ color: "var(--secondary-text-color)", display: "flex" }}>{icon}</span>
            {label}
          </button>
        ))}
        <button style={{ ...btnStyle, padding: "0 6px" }}><MoreHorizontal size={18} color="var(--secondary-text-color)" /></button>
      </div>
      <button style={{ ...btnStyle, padding: "0 6px" }}><ChevronDown size={16} color="var(--secondary-text-color)" /></button>
    </div>
  </div>
);
