import React, { useState, useEffect } from "react";

const HealthGauge = ({ rewardCount }) => {
  let tenMinutes = rewardCount.tenMinutes;
  let oneHour = rewardCount.oneHour;
  let threeHours = rewardCount.threeHours;

  const getStatus = () => {
    if (tenMinutes === 0) return "Stopped";
    if (tenMinutes < 3) return "Struggling";
    return "Active";
  };

  const getGaugeColor = (reward) => {
    if (reward === 0) return "#FF4D4D"; // Red for stopped
    if (reward < 10) return "#b49600"; // Yellow for struggling
    return "#4CAF50"; // Green for full strength
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
        <a
          href="https://pond0x.com/swap/solana?ref=7WTPWhjEfyDrJA5crD9naahKgMDKQUqoXTMpLW4T3kkGkmUFVWsFj2opZoM"
          target="_blank"
        >
          Swap
        </a>{" "}
        Rewards: {getStatus()}{" "}
      </p>
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(tenMinutes),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {tenMinutes}
      </span>
      /
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(oneHour),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {oneHour}
      </span>
      /
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(threeHours),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {threeHours}
      </span>
    </div>
  );
};

export default function SwapStatusBar({
  url = "https://gist.githubusercontent.com/Cary0x/fe2160dfbf67a8439c212514acd5e2f7/raw/pondswap.json",
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
          <HealthGauge rewardCount={data} />
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
