import React from "react";
import { StatusType, PriorityType } from "./types";

interface StatusCellProps {
  status: StatusType | PriorityType;
  onClick?: () => void;
}

const getStatusColor = (status: StatusType | PriorityType): string => {
  switch (status) {
    case "Done":                return "var(--color-done-green)";
    case "Working on it":       return "var(--color-working_orange)";
    case "Stuck":               return "var(--color-stuck-red)";
    case "Waiting":             return "var(--color-dark_purple)";
    case "Sync with other team":return "var(--color-dark_indigo)";
    case "High":                return "var(--color-stuck-red)";
    case "Medium":              return "var(--color-egg_yolk)";
    case "Low":                 return "var(--color-bright-blue)";
    case "Critical":            return "var(--color-blackish)";
    default:                    return "var(--color-american_gray)";
  }
};

export const StatusCell: React.FC<StatusCellProps> = ({ status, onClick }) => {
  if (!status) return <div style={{ width: "100%", height: "100%" }} />;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: getStatusColor(status),
        width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <span style={{
        color: "var(--fixed-light-color)",
        fontSize: 13, fontWeight: 400,
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        padding: "0 4px",
      }}>
        {status}
      </span>
    </div>
  );
};
