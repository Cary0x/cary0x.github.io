import { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";

function useLocalStorageWithUrl(key, defaultValue) {
  const location = useLocation();
  const [state, setState] = useState(defaultValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (isHydrated || typeof window === "undefined") return;

    const params = new URLSearchParams(location.search);
    const valueFromUrl = params.get(key);

    let newValue;
    if (valueFromUrl !== null) {
      newValue = valueFromUrl;
    } else {
      try {
        const storedValue = localStorage.getItem(key);
        newValue =
          storedValue !== null ? JSON.parse(storedValue) : defaultValue;
      } catch {
        newValue = defaultValue;
      }
    }
    setState((prev) =>
      JSON.stringify(prev) !== JSON.stringify(newValue) ? newValue : prev
    );

    setIsHydrated(true);
  }, [key, location.search, defaultValue]);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  }, [key, state, isHydrated]);

  return [state, setState, isHydrated];
}

export default useLocalStorageWithUrl;
