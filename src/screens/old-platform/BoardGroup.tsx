import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Group, ColumnWidths } from "./types";
import { StatusCell } from "./StatusCell";
import type { ConfigProductName } from "./productConfig";

interface BoardGroupProps {
  group: Group;
  columnWidths: ColumnWidths;
  product: ConfigProductName;
  onColumnResize: (columnId: keyof ColumnWidths, newWidth: number) => void;
}

const ResizeHandle = ({ onResizeStart }: { onResizeStart: (e: React.MouseEvent) => void }) => (
  <div
    onMouseDown={onResizeStart}
    style={{
      position: "absolute", right: -4, top: 0, bottom: 0,
      width: 9, cursor: "col-resize", zIndex: 10,
    }}
  >
    <div style={{ width: 1, height: "100%", backgroundColor: "var(--primary-color)", margin: "0 auto" }} />
  </div>
);

function InitialsAvatar({ initials }: { initials: string }) {
  const colors = ["#0073ea","#a25ddc","#fdab3d","#00c875","#e2445c","#579bfc","#784bd1"];
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % colors.length;
  return (
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: colors[idx],
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export const BoardGroup: React.FC<BoardGroupProps> = ({ group, columnWidths, onColumnResize }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  const gridTemplate = `50px ${columnWidths.task}px ${columnWidths.owner}px ${columnWidths.status}px ${columnWidths.priority}px ${columnWidths.eta}px 40px`;

  const handleResize = (columnId: keyof ColumnWidths) => (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = columnWidths[columnId];
    const onMove = (ev: MouseEvent) => onColumnResize(columnId, startWidth + ev.clientX - startX);
    const onUp = () => { document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const allSelected = group.items.length > 0 && selectedItemIds.length === group.items.length;

  const headerCell = (label: string, col: keyof ColumnWidths) => (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: 36, borderRight: "1px solid var(--layout-border-color)",
      position: "relative", fontSize: 13, color: "var(--secondary-text-color)",
    }}>
      {label}
      <ResizeHandle onResizeStart={handleResize(col)} />
    </div>
  );

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, cursor: "pointer", color: group.color }}
      >
        <span style={{ display: "flex", transition: "transform 0.2s", transform: isCollapsed ? "rotate(-90deg)" : "none" }}>
          <ChevronDown size={16} strokeWidth={2.5} />
        </span>
        <span style={{ fontSize: 15, fontWeight: 700 }}>{group.title}</span>
        <span style={{
          fontSize: 11, fontWeight: 600, color: "var(--secondary-text-color)",
          background: "var(--ui-background-color)", borderRadius: 10, padding: "1px 7px",
        }}>
          {group.items.length}
        </span>
      </div>

      {!isCollapsed && (
        <>
          {/* Column headers */}
          <div style={{
            display: "grid", gridTemplateColumns: gridTemplate,
            borderLeft: `6px solid ${group.color}`,
            borderTop: "1px solid var(--layout-border-color)",
            borderBottom: "1px solid var(--layout-border-color)",
            background: "var(--secondary-background-color)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 36, borderRight: "1px solid var(--layout-border-color)" }}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => setSelectedItemIds(allSelected ? [] : group.items.map(i => i.id))}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", height: 36, paddingLeft: 8, borderRight: "1px solid var(--layout-border-color)", position: "relative", fontSize: 13, color: "var(--secondary-text-color)" }}>
              Task
              <ResizeHandle onResizeStart={handleResize("task")} />
            </div>
            {headerCell("Owner", "owner")}
            {headerCell("Status", "status")}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              height: 36, borderRight: "1px solid var(--layout-border-color)",
              position: "relative", fontSize: 13, color: "var(--secondary-text-color)",
            }}>
              Role
              <ResizeHandle onResizeStart={handleResize("priority")} />
            </div>
            {headerCell("ETA", "eta")}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 36, color: "var(--secondary-text-color)" }}>
              <Plus size={15} />
            </div>
          </div>

          {/* Rows */}
          {group.items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "grid", gridTemplateColumns: gridTemplate,
                borderLeft: `6px solid ${group.color}`,
                borderBottom: "1px solid var(--layout-border-color)",
                background: "var(--secondary-background-color)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 38, borderRight: "1px solid var(--layout-border-color)" }}>
                <input
                  type="checkbox"
                  checked={selectedItemIds.includes(item.id)}
                  onChange={() => setSelectedItemIds(prev =>
                    prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id]
                  )}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", height: 38, paddingLeft: 16, borderRight: "1px solid var(--layout-border-color)", overflow: "hidden" }}>
                <span style={{ fontSize: 13, color: "var(--primary-text-color)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.name}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 38, borderRight: "1px solid var(--layout-border-color)" }}>
                {item.person ? (
                  <InitialsAvatar initials={item.person} />
                ) : (
                  <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1.5px dashed var(--ui-border-color)", opacity: 0.4 }} />
                )}
              </div>
              <div style={{ height: 38, borderRight: "1px solid var(--layout-border-color)" }}>
                <StatusCell status={item.status} />
              </div>
              <div style={{ display: "flex", alignItems: "center", height: 38, paddingLeft: 8, borderRight: "1px solid var(--layout-border-color)", overflow: "hidden" }}>
                <span style={{ fontSize: 13, color: "var(--secondary-text-color)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.priority}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 38, borderRight: "1px solid var(--layout-border-color)" }}>
                <span style={{ fontSize: 13, color: "var(--secondary-text-color)" }}>{item.date}</span>
              </div>
              <div style={{ height: 38 }} />
            </div>
          ))}

          {/* Add item row */}
          <div style={{
            display: "flex", alignItems: "center", height: 36,
            borderLeft: `6px solid ${group.color}`,
            borderBottom: "1px solid var(--layout-border-color)",
            paddingLeft: 56, gap: 6, cursor: "pointer", opacity: 0.6,
          }}>
            <Plus size={13} color="var(--secondary-text-color)" />
            <span style={{ fontSize: 13, color: "var(--secondary-text-color)" }}>+ Add item</span>
          </div>
        </>
      )}
    </div>
  );
};
