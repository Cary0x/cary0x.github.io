import React, { useState, useEffect } from "react";

const HealthGauge = ({ data }) => {
  const getStatus = () => {
    if (data.locked === true) return "Locked";
    if (data.locked === false) return "Live!";
    return "N/A";
  };

  const getGaugeColor = () => {
    if (data.locked === true) return "#FF4D4D"; // Red for locked
    if (data.locked === false) return "#4CAF50"; // Green for unlocked
    return "#B49600"; // Yellow for N/A
  };

  return (
    <div style={{ display: "flex" }}>
      <p
        style={{
          fontSize: "1em",
          fontWeight: "bold",
          margin: "1px 10px 0px 0px",
        }}
      >
        <a href="https://www.pond0x.com/spawn" target="_blank">
          Spawn
        </a>{" "}
        Status: {getStatus()}{" "}
      </p>
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {data.progress}
      </span>
    </div>
  );
};

export default function SwapStatusBar({
  url = "https://gist.githubusercontent.com/Cary0x/fe2160dfbf67a8439c212514acd5e2f7/raw/pondspawn.json",
}) {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoaded(false);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setTimeout(() => {
        setData(jsonData);
        setLoaded(true);
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);
    // const intervalId = setInterval(fetchData, 10 * 1000); //test

    return () => clearInterval(intervalId);
  }, [url]);

  return (
    <div style={containerStyle}>
      <div style={activityContainerStyle}>
        {loaded ? (
          <HealthGauge data={data} />
        ) : (
          <p
            style={{
              fontSize: "1em",
              fontWeight: "bold",
              margin: 0,
              marginRight: "1em",
            }}
          >
            Loading Swap Data...
          </p>
        )}
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
