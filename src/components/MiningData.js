import { useState } from "react";
import styles from "./FetchData.module.css";

export function BoostCalculator() {
  const [miningSessions, setMiningSessions] = useState("");
  const [swaps, setSwaps] = useState("");
  const [result, setResult] = useState(null);

  const calculateBoost = () => {
    const numSessions = parseInt(miningSessions) || 0;
    const numSwaps = parseInt(swaps) || 0;

    const totalSwapBoost = numSwaps * (1 / 6);
    const totalSessionBoost = numSessions * -3;
    const currentBoost = totalSwapBoost + totalSessionBoost;

    let swapsNeeded = 0;
    let tempBoost = currentBoost;

    while (tempBoost < 415) {
      tempBoost += 1 / 6;
      swapsNeeded++;
    }

    let sessionsToBelow415 = 0;
    if (currentBoost > 415) {
      let tempBoostAbove415 = currentBoost;
      while (tempBoostAbove415 >= 415) {
        tempBoostAbove415 -= 3;
        sessionsToBelow415++;
      }
    }

    let sessionsToZero = 0;
    let tempBoostToZero = currentBoost;
    while (tempBoostToZero > 0) {
      tempBoostToZero -= 3;
      sessionsToZero++;
    }

    setResult({
      totalSwapBoost,
      totalSessionBoost,
      currentBoost: `~ ${currentBoost.toFixed(2)}`,
      swapsNeeded,
      sessionsToBelow415,
      sessionsToZero,
    });
  };

  return (
    <div className={styles.fetchContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBoost();
        }}
        className={styles.fetchForm}
      >
        <label className={styles.fetchLabel}>Mining Sessions</label>
        <input
          type="number"
          value={miningSessions}
          onChange={(e) => setMiningSessions(e.target.value)}
          className={styles.fetchInput}
          placeholder="Enter Mining Sessions..."
          required
        />

        <label className={styles.fetchLabel}>Swaps</label>
        <input
          type="number"
          value={swaps}
          onChange={(e) => setSwaps(e.target.value)}
          className={styles.fetchInput}
          placeholder="Enter Swaps..."
          required
        />

        <button type="submit" className={styles.fetchButton}>
          Calculate
        </button>
      </form>

      {result && (
        <div className={styles.dataContainer}>
          <DataField
            label="Total Swap Boost"
            value={result.totalSwapBoost.toFixed(2)}
          />
          <DataField
            label="Total Session Boost"
            value={result.totalSessionBoost.toFixed(2)}
          />
          <DataField label="Current Boost" value={result.currentBoost} />
          <DataField label="Swaps Needed" value={result.swapsNeeded} />
          <DataField
            label="Sessions to 415"
            value={result.sessionsToBelow415}
          />
          <DataField label="Sessions to 0" value={result.sessionsToZero} />
        </div>
      )}
    </div>
  );
}

export function DataField({ label, value }) {
  return (
    <div className={styles.dataField}>
      <span className={styles.dataLabel2}>{label}:</span>
      <span className={styles.dataValue}>{String(value)}</span>
    </div>
  );
}
