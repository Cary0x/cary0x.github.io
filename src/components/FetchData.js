import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import styles from "./FetchData.module.css";

export function FetchComponent({
  apiUri,
  searchLabel,
  renderResults,
  minLength = 32,
  maxLength = 44,
  localStorageName = "wallet",
}) {
  const [query, setQuery, isHydrated] = useLocalStorage(localStorageName, "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const isDisabled =
    !isHydrated ||
    loading ||
    query.length < minLength ||
    query.length > maxLength;

  const fetchData = async () => {
    if (query.length < minLength || query.length > maxLength) {
      setResult({
        error: `Input must be between ${minLength} and ${maxLength} characters.`,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${apiUri}${query}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Failed to fetch data" });
    }
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  };

  return (
    <div className={styles.fetchContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
        className={styles.fetchForm}
      >
        <label className={styles.fetchLabel}>{searchLabel}</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.fetchInput}
          placeholder="Type here..."
          required
          minLength={minLength}
          maxLength={maxLength}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`${styles.fetchButton} ${
            isDisabled ? styles.fetchButtonDisabled : ""
          }`}
        >
          {loading ? "..." : "Submit"}
        </button>
      </form>
      {result && renderResults(result)}
    </div>
  );
}

export function DataField({ label, value }) {
  return (
    <div className={styles.dataField}>
      <span className={styles.dataLabel}>{label}:</span>
      <span className={styles.dataValue}>{String(value)}</span>
    </div>
  );
}

export function DataFieldWithProgress({ label, value }) {
  const progress = Math.min(Math.max((value / 7) * 100, 0.5), 100);

  return (
    <div className={styles.dataFieldWithProgress}>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      <span className={styles.dataLabel}>{label}:</span>
      <span className={styles.dataValue}>{String(value)}</span>
    </div>
  );
}
