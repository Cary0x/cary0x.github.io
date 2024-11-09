import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(defaultValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
          setState(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
      setIsHydrated(true);
    }
  }, [key]);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error setting localStorage:", error);
      }
    }
  }, [key, state, isHydrated]);

  return [state, setState, isHydrated];
}

export default useLocalStorage;
