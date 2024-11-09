import React, { useState, useEffect } from "react";
import ActivityTracker from "@site/src/components/ActivityTracker";

export default function WebSocketActivityNavbarItem() {
  return (
    <div style={containerStyle}>
      <div style={activityContainerStyle}>
        <ActivityTracker />
      </div>
    </div>
  );
}

// Styles for the tracker in the navbar
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "10px",
  border: "1px solid white",
  borderRadius: "50px",
  width: "fit-content",
  margin: "2em 0",
};

const activityContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#333", // Dark text color for visibility
  marginBottom: "5px",
  textTransform: "uppercase", // Slight emphasis on the label
};

const statusStyle = {
  fontSize: "14px",
  color: "#007bff", // Blue for active status
  fontWeight: "bold",
};
