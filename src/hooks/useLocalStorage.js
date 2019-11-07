import React, { useState } from "react";

export const useLocalStorage = ( key, initialValue) => {

    const item = JSON.parse(localStorage.getItem(key))

    const [storedValue, setStoredValue] = useState(item || initialValue);
  
    //define setter function that sets a value to localStorage when called & sets state property to new value that needs to be returned as a string with JSON.stringify(value)
    const setValue = value => {
      window.localStorage.setItem(key, JSON.stringify(value)) 
      setStoredValue(value);
    }
  
    return [storedValue, setValue];
  }