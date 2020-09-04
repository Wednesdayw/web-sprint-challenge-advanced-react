import { useState } from "react";

//build the useLocalStorage function
export function useLocalStorage(key, initialValue) {
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
  // If that item doesn't exist, it will return undefined
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
      // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
//return storedValue from this hook in an array
  //setter
  const setValue = (newValue) => {
    //wrapper around setter
    setStoredValue(newValue); //save the state
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(newValue)); // JSON parses into a string
  };
  return [storedValue, setValue];
}