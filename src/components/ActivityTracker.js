import React, { useEffect, useState, useRef } from "react";

const HealthGauge = ({ rewardCount, minerCount, warmingUp }) => {
  const getStatus = () => {
    if (warmingUp && rewardCount < 3) return "Loading...";
    if (rewardCount === 0) return "Stopped";
    if (rewardCount < 3) return "Likely Active";
    return "Active";
  };

  const getGaugeColor = (reward) => {
    if (reward === 0) return "#FF4D4D"; // Red for stopped
    if (reward < 3) return "#B49600"; // Yellow for struggling
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
        <a href="https://www.pond0x.com/mining" target="_blank">
          Mining
        </a>
        : {getStatus()}{" "}
      </p>
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(rewardCount),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {rewardCount}
      </span>
      /
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: getGaugeColor(minerCount),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {minerCount}
      </span>
    </div>
  );
};

const ActivityTracker = () => {
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [rewardCount, setRewardCount] = useState(0);
  const [minerCount, setMinerCount] = useState(0);
  const [warmingUp, setWarmingUp] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const rewards = useRef([]);
  const hbIndex = useRef(1);

  useEffect(() => {
    setTimeout(() => {
      setWarmingUp(false);
    }, 60 * 1000);
  }, []);

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

      // Remove entries older than x seconds
      rewards.current = rewards.current.filter(
        (entry) => now - entry.timestamp <= 60 * 1000
      );

      // Count unique rewards over 100M in the last x seconds
      const uniqueRewards = new Set(
        rewards.current
          .filter((entry) => entry.reward > 10000000)
          .map((entry) => entry.signature)
      );
      const uniqueMiners = new Set(
        rewards.current.map((entry) => entry.signature)
      );
      setRewardCount(uniqueRewards.size);
      setMinerCount(uniqueMiners.size);
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
        <HealthGauge
          rewardCount={rewardCount}
          minerCount={minerCount}
          warmingUp={warmingUp}
        />
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
