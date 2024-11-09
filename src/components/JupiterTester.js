import React, { useState } from "react";

const WalletEligibilityChecker = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEligibility = async () => {
    setError(""); // Clear previous errors
    setResult(null); // Clear the result box
    setLoading(true); // Set loading state

    if (!walletAddress) {
      setError("Please enter a valid wallet address.");
      setLoading(false);
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `https://cary0x.com/api/jupiter/${walletAddress}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setResult(result);
    } catch (err) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      <h3>Wallet Eligibility Checker</h3>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter wallet address"
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={checkEligibility}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: loading ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Loading..." : "Check Eligibility"}
      </button>
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          <strong>{error}</strong>
        </p>
      )}
      <textarea
        readOnly
        value={result ? JSON.stringify(result, null, 2) : ""}
        placeholder="Results will appear here"
        style={{
          width: "100%",
          height: "200px",
          marginTop: "10px",
          padding: "10px",
          fontSize: "14px",
          fontFamily: "monospace",
          color: "#333", // Text color
          backgroundColor: "#f9f9f9", // Background color
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      ></textarea>
    </div>
  );
};

export default WalletEligibilityChecker;
