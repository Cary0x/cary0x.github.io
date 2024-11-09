import { useState } from "react";
import styles from "./FetchData.module.css";

export function FetchComponent({
  apiUri,
  searchLabel,
  renderResults,
  minLength = 32,
  maxLength = 44,
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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
          disabled={
            loading || query.length < minLength || query.length > maxLength
          }
          className={`${styles.fetchButton} ${
            loading || query.length < minLength || query.length > maxLength
              ? styles.fetchButtonDisabled
              : ""
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
