import { useCallback, useState } from "react";

export function useLocalStorageState(key, initialState) {
  const [state, setState] = useState(() => {
    const fromStorage = localStorage.getItem(key);
    if (fromStorage) {
      return JSON.parse(fromStorage);
    }

    if (initialState) {
      localStorage.setItem(key, JSON.stringify(initialState));
    }
    return initialState;
  });

  const updateState = useCallback(
    function (value) {
      if (value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.removeItem(key);
      }
      setState(value);
    },
    [key]
  );
  return [state, updateState];
}
