import React, { useEffect, useState, useRef } from "react";

const HealthGauge = ({ rewardCount }) => {
  const getStatus = () => {
    if (rewardCount === 0) return "Stopped";
    if (rewardCount < 10) return "Struggling";
    return "Active";
  };

  const getGaugeColor = () => {
    if (rewardCount === 0) return "#FF4D4D"; // Red for stopped
    if (rewardCount < 10) return "#FFD700"; // Yellow for struggling
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
        Mining: {getStatus()}{" "}
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
        {rewardCount}
      </span>
    </div>
  );
};

const ActivityTracker = () => {
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [rewardCount, setRewardCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const rewards = useRef([]);
  const hbIndex = useRef(1);

  useEffect(() => {
    const subdomain = "vkqjvwxzsxilnsmpngmc";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcWp2d3h6c3hpbG5zbXBuZ21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwODExMjMsImV4cCI6MjA0MTY1NzEyM30.u9gf6lU2fBmf0aiC7SYH4vVeWMRnGRu4ZZ7xOGl-XuI";

    const socket = new WebSocket(
      `wss://${subdomain}.supabase.co/realtime/v1/websocket?apikey=${token}`
    );

    socket.addEventListener("open", () => {
      setConnectionStatus("Connected");
      const joinChannelMessage = JSON.stringify({
        topic: "realtime:peersx",
        event: "phx_join",
        payload: {},
        ref: "1",
      });
      socket.send(joinChannelMessage);
    });

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      const reward = message?.payload?.payload?.reward || 0;
      const signature = message?.payload?.payload?.sig;

      // Update the rolling reward list
      const now = Date.now();
      rewards.current.push({ reward, signature, timestamp: now });

      // Remove entries older than 10 seconds
      rewards.current = rewards.current.filter(
        (entry) => now - entry.timestamp <= 10000
      );

      // Count unique rewards over 100M in the last 10 seconds
      const uniqueRewards = new Set(
        rewards.current
          .filter((entry) => entry.reward > 10000000)
          .map((entry) => entry.signature)
      );
      setRewardCount(uniqueRewards.size);
    });

    socket.addEventListener("close", () => {
      setConnectionStatus("Disconnected");
    });

    socket.addEventListener("error", () => {
      setConnectionStatus("Error");
    });

    const heartbeatInterval = setInterval(() => {
      const heartbeatMessage = JSON.stringify({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: `${hbIndex.current++}`,
      });
      socket.send(heartbeatMessage);
    }, 30 * 1000);

    return () => {
      clearInterval(heartbeatInterval);
      socket.close();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loaded ? (
        <HealthGauge rewardCount={rewardCount} />
      ) : (
        <p
          style={{
            fontSize: "1em",
            fontWeight: "bold",
            margin: 0,
            marginRight: "1em",
          }}
        >
          Loading Mining...
        </p>
      )}
    </>
  );
};

export default ActivityTracker;