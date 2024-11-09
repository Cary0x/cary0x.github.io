import React, { useState, useEffect } from "react";

const calculateTimeSince = (timestamp) => {
  const now = Date.now();
  const elapsed = now - timestamp;
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

const calculateProgress = (timestamp) => {
  const now = Date.now();
  const elapsed = now - timestamp;
  const progress = Math.min((elapsed / (48 * 60 * 60 * 1000)) * 100, 100); // Max 100%
  return progress;
};

const TimerGauge = ({ data }) => {
  const [timeSince, setTimeSince] = useState(calculateTimeSince(data.latest));
  const [progress, setProgress] = useState(calculateProgress(data.latest));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSince(calculateTimeSince(data.latest));
      setProgress(calculateProgress(data.latest));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data.latest]);

  const { days, hours, minutes, seconds } = timeSince;
  const progressColor = progress < 90 ? "#4CAF50" : "#FF4D4D"; // Green if under 48 hours, red otherwise

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p
        style={{
          fontSize: "1em",
          fontWeight: "bold",
          margin: "1px 10px 0px 0px",
        }}
      >
        Time Since Last Renewal:{" "}
        <span style={{ color: progressColor }}>
          {days > 0 && `${days}d `}
          {hours > 0 && `${hours}h `}
          {minutes}m {seconds}s
        </span>
      </p>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "10px",
          width: "300px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: progressColor,
            transition: "width 0.5s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default function ProStatusBar({
  url = "https://gist.githubusercontent.com/Cary0x/fe2160dfbf67a8439c212514acd5e2f7/raw/pondpro.json",
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

    return () => clearInterval(intervalId);
  }, [url]);

  return (
    <div style={containerStyle}>
      <div style={activityContainerStyle}>
        {loaded ? (
          <TimerGauge data={data} />
        ) : (
          <p
            style={{
              fontSize: "1em",
              fontWeight: "bold",
              margin: 0,
              marginRight: "1em",
            }}
          >
            Loading Pro Data...
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
  padding: "10px 20px",
  border: "1px solid white",
  borderRadius: "50px",
  width: "fit-content",
  margin: "2em 0",
  width: "430px",
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
