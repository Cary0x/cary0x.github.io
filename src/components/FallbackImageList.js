import React, { useState } from "react";
import FallbackImage from "./FallbackImage";
import useLocalStorage from "./hooks/useLocalStorage";
import styles from "./FetchData.module.css";

export default function FallbackImageList({ data }) {
  const [query, setQuery, isHydrated] = useLocalStorage("community", "");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "4px",
        }}
      >
        <label
          for="members"
          className={styles.fetchLabel}
          style={{ fontSize: "1.2em" }}
        >
          Search Members:
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.fetchInput}
          placeholder="Type here..."
          required
          minLength={0}
          maxLength={100}
          id="members"
          style={{ display: "block" }}
        />
      </div>
      {data.map((item) => (
        <FallbackImage
          data={item.name}
          refc={item.ref}
          hide={
            query !== "" &&
            !item.name.toLowerCase().includes(query.toLowerCase())
          }
        />
      ))}
      {data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).length === 0 ? (
        <p>No user found, please refine your search.</p>
      ) : (
        ""
      )}
    </>
  );
}
