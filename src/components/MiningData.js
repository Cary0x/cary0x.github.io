import { useState } from "react";
import styles from "./FetchData.module.css";
import useLocalStorage from "./hooks/useLocalStorage";

export function BoostCalculator() {
  const [miningSessions, setMiningSessions] = useLocalStorage(
    "dataSessions",
    ""
  );
  const [swaps, setSwaps] = useLocalStorage("dataSwaps", "");
  const [result, setResult] = useState(null);

  const calculateBoost = () => {
    const numSessions = parseInt(miningSessions) || 0;
    const numSwaps = parseInt(swaps) || 0;

    const totalSwapBoost = numSwaps * (1 / 6);
    const totalSessionBoost = numSessions * -3;
    const currentBoost = totalSwapBoost + totalSessionBoost;

    let swapsNeeded = 0;
    let tempBoost = currentBoost;

    while (tempBoost < 515) {
      tempBoost += 1 / 6;
      swapsNeeded++;
    }

    let sessionsToBelow515 = 0;
    if (currentBoost > 515) {
      let tempBoostAbove515 = currentBoost;
      while (tempBoostAbove515 >= 515) {
        tempBoostAbove515 -= 3;
        sessionsToBelow515++;
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
      sessionsToBelow515,
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
          <DataField label="Swaps Needed for 515" value={result.swapsNeeded} />
          <DataField
            label="Sessions until 515"
            value={result.sessionsToBelow515}
          />
          <DataField label="Sessions until 0" value={result.sessionsToZero} />
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
