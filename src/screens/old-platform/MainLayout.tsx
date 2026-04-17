import React from "react";
import { ConfigProductName } from "./productConfig";
import ExpandedLeftPaneContent from "./imports/LeftPane-116-2361";
import TopBarInternal from "./imports/TopBarInternal";
import { AIToolsSection } from "./AIToolsSection";
import { ChevronRight } from "lucide-react";

function LeftPane() {
  const [isExpanded, setIsExpanded] = React.useState(true);
  return (
    <div style={{
      width: isExpanded ? 248 : 30, height: "100%", flexShrink: 0,
      position: "relative", borderTopLeftRadius: 12,
      boxShadow: "inset -5px -20px 20px 0 var(--primary-surface-color)",
      backgroundImage: "linear-gradient(135deg, var(--primary-background-color) 5%, var(--primary-surface-color) 100%)",
      transition: "width 0.25s ease", overflow: "visible",
    }}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          position: "absolute", right: -13, top: 16,
          width: 26, height: 26, borderRadius: "50%",
          background: "var(--primary-surface-color)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", zIndex: 3,
        }}
      >
        <span style={{ transform: isExpanded ? "rotate(180deg)" : "none", display: "flex", transition: "transform 0.25s" }}>
          <ChevronRight size={14} color="var(--secondary-text-color)" />
        </span>
      </div>

      {isExpanded && (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* AI Tools section — always first */}
          <div style={{ paddingTop: 12, paddingBottom: 4, flexShrink: 0 }}>
            <AIToolsSection />
          </div>
          {/* Divider */}
          <div style={{ height: 1, background: "var(--layout-border-color)", margin: "4px 16px" }} />
          {/* Figma-generated nav content */}
          <div className="leftpane-content" style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            <ExpandedLeftPaneContent />
          </div>
        </div>
      )}
    </div>
  );
}

export const MainLayout: React.FC<{ children: React.ReactNode; product: ConfigProductName }> = ({ children }) => (
  <div className="old-platform-root" style={{
    background: "var(--primary-surface-color)",
    display: "flex", flexDirection: "column",
    height: "100vh", overflow: "hidden",
  }}>
    <div className="topbar-wrapper" style={{ height: 48, flexShrink: 0 }}>
      <TopBarInternal />
    </div>
    <div style={{ flex: 1, display: "flex", overflow: "hidden", paddingLeft: 12 }}>
      <LeftPane />
      <div style={{
        flex: 1, background: "var(--primary-background-color)",
        borderTopLeftRadius: 16, overflow: "auto",
        padding: "0 0 32px 36px",
      }}>
        {children}
      </div>
    </div>
  </div>
);
