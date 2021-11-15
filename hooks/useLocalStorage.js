import React from "react";

const getStorageValue = (key, initialValue) => {
  if (typeof window === "undefined") return initialValue;
  const savedValue = localStorage.getItem(key);

  return savedValue ? JSON.parse(savedValue) : initialValue;
};

const useLocalStorage = (key, data) => {
  const [value, setValue] = React.useState(() => {
    return getStorageValue(key, data);
  });

  const setData = (data) => {
    try {
      window.localStorage.setItem(key, data);
      setValue(data);
    } catch (error) {
      setValue(data);
    }
  };

  return [value, setData];
};

export default useLocalStorage;
