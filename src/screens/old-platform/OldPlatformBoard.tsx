import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { MainLayout } from "./MainLayout";
import { BoardHeader } from "./BoardHeader";
import { BoardGroup } from "./BoardGroup";
import { Group, ColumnWidths, StatusType, PriorityType } from "./types";
import { BOARD_GROUPS, StatusKey } from "../../data/boardData";
import { initProduct, type ConfigProductName } from "./productConfig";
import "./globals.css";

const PRODUCT: ConfigProductName = "work_management";

function mapStatus(s: StatusKey): StatusType {
  if (s === "phone" || s === "scheduled") return "Working on it";
  if (s === "new") return "Waiting";
  if (s === "offer") return "Done";
  return "";
}

const MAPPED_GROUPS: Group[] = BOARD_GROUPS.map((g) => ({
  id: g.id,
  title: g.label,
  color: g.color,
  items: g.rows.map((row, ri) => ({
    id: `${g.id}-${ri}`,
    name: row.name,
    priority: row.role as unknown as PriorityType,
    status: mapStatus(row.status),
    date: row.date,
    person: row.assignee.kind === "person" ? row.assignee.initials : undefined,
  })),
}));

/* ── Floating AI platform toggle ── */
function FloatingAIToggle() {
  const navigate = useNavigate();
  const [on, setOn] = useState(false);
  const [hovered, setHovered] = useState(false);

  function handleToggle() {
    if (on) return;
    setOn(true);
    setTimeout(() => navigate("/transition"), 420);
  }

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
      onClick={handleToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed", bottom: 24, left: 24, zIndex: 1000,
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "#fff",
        borderRadius: 100,
        padding: "8px 16px 8px 10px",
        boxShadow: hovered
          ? "0 6px 24px rgba(0,0,0,0.16)"
          : "0 2px 12px rgba(0,0,0,0.10)",
        cursor: on ? "default" : "pointer",
        userSelect: "none",
        transition: "box-shadow 200ms ease",
      }}
    >
      {/* Toggle track */}
      <div style={{
        width: 44, height: 26, borderRadius: 13, flexShrink: 0,
        background: on
          ? "linear-gradient(135deg, #9450FD, #0074FD)"
          : "#D8D8D8",
        position: "relative",
        transition: "background 300ms ease",
      }}>
        {/* Thumb */}
        <motion.div
          animate={{ x: on ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          style={{
            position: "absolute", top: 3,
            width: 20, height: 20, borderRadius: "50%",
            background: "white",
            boxShadow: "0 1px 4px rgba(0,0,0,0.22)",
          }}
        />
      </div>

      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1L8.3 5.7L13 7L8.3 8.3L7 13L5.7 8.3L1 7L5.7 5.7L7 1Z"
            fill="url(#tog-grad)" />
          <path d="M11.5 1L12 2.5L13.5 3L12 3.5L11.5 5L11 3.5L9.5 3L11 2.5L11.5 1Z"
            fill="url(#tog-grad)" opacity="0.55" />
          <defs>
            <linearGradient id="tog-grad" x1="1" y1="1" x2="13" y2="13" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9450FD" />
              <stop offset="1" stopColor="#0074FD" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: 13, fontWeight: 600, color: "#323338",
          whiteSpace: "nowrap",
        }}>
          Try AI monday
        </span>
      </div>
    </motion.div>
  );
}

export default function OldPlatformBoard() {
  const [groups] = useState<Group[]>(MAPPED_GROUPS);
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>({
    task: 160,
    owner: 100,
    status: 140,
    priority: 140,
    eta: 100,
  });

  const [product, setProduct] = useState<ConfigProductName>("work_management");

  useEffect(() => {
    initProduct(PRODUCT);
    setProduct(PRODUCT);
  }, []);

  const handleColumnResize = (columnId: keyof ColumnWidths, newWidth: number) => {
    setColumnWidths((prev) => ({ ...prev, [columnId]: Math.max(50, newWidth) }));
  };

  return (
    <>
      <MainLayout product={product}>
        <div style={{ width: "100%", paddingRight: "24px", overflow: "visible", position: "relative" }}>
          <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
            <BoardHeader />
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
            {groups.map((group) => (
              <BoardGroup
                product={product}
                key={group.id}
                group={group}
                columnWidths={columnWidths}
                onColumnResize={handleColumnResize}
              />
            ))}
          </div>
        </div>
      </MainLayout>
      <FloatingAIToggle />
    </>
  );
}
