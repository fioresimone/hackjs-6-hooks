import { useEffect, useState } from "react";

const useLocalStorage = (key, defaulValue) => {
  const [value, setValue] = useState(() => {
    let current;

    try {
      current = JSON.parse(localStorage.getItem(key) || String(defaulValue));
    } catch (error) {
      current = String(defaulValue);
    }
    return current;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
