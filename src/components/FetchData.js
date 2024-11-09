import { useState, useEffect, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import styles from "./FetchData.module.css";

export function FetchComponent({
  apiUri,
  searchLabel,
  renderResults,
  minLength = 32,
  maxLength = 44,
  localStorageName = "wallet",
  localStorageNameSelect = "walletselect",
}) {
  const [query, setQuery, isHydrated] = useLocalStorage(localStorageName, "");
  const [select, setSelect, isSelectHydrated] = useLocalStorage(
    localStorageNameSelect,
    []
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const saveDeleteIcon = select.some((item) => item.address === query)
    ? "delete"
    : "save";

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
      setResult(null);
      if (!!apiUri) {
        const response = await fetch(`${apiUri}${query}`);
        const data = await response.json();
        setResult(data);
      } else {
        setResult(query);
      }
    } catch (error) {
      setResult({ error: "Failed to fetch data" });
    }
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  };

  const saveDelete = () => {
    if (!query) return;

    setSelect((prevSelect) => {
      const exists = prevSelect.some((e) => e.address === query);

      if (exists) {
        const updated = prevSelect.filter((e) => e.address !== query);

        if (query === prevSelect.find((e) => e.address === query)?.address) {
          setQuery("");
        }

        return updated;
      } else {
        const name = prompt("Enter a name for this wallet:");
        if (!name) return prevSelect;

        return [...prevSelect, { name, address: query }].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
    });
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
        <label for="inputWallet" className={styles.fetchLabel}>
          {searchLabel}
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className={styles.fetchInput}
          placeholder="Type here..."
          required
          minLength={minLength}
          maxLength={maxLength}
          id="inputWallet"
        />
        <div className={`${styles.buttonRow}`}>
          <span>
            <select
              className={`${styles.selectWallets}`}
              name="wallets"
              id="wallets"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            >
              <option value="">Select a wallet</option>
              {select?.map((e) => (
                <option value={e.address}>{e.name}</option>
              ))}
            </select>

            <button
              type="button"
              title="Save Wallet"
              disabled={isDisabled}
              className={`${styles.saveButton} ${
                isDisabled ? styles.fetchButtonDisabled : ""
              }`}
              onClick={saveDelete}
            >
              {saveDeleteIcon === "save" ? "💾" : "❌"}
            </button>
          </span>
          <span>
            <button
              type="submit"
              disabled={isDisabled}
              className={`${styles.fetchButton} ${
                isDisabled ? styles.fetchButtonDisabled : ""
              }`}
            >
              {loading ? "..." : "Submit"}
            </button>
          </span>
        </div>
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

export function LinkField({ label, value, href }) {
  return (
    <div className={styles.dataField}>
      <span className={styles.scanLabel}>{label}:</span>
      <span className={styles.dataValue}>
        <a className={styles.linkField} href={href} target="_blank">
          {String(value)}
        </a>
      </span>
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
