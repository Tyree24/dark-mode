import React, { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage.js";

// setting state
export const useDarkMode = () => {
    const[storedValue, setValue] = useLocalStorage('darkMode', false);

    const body = document.querySelector('body');

    useEffect (() => {
        //creating an if else statement to give option for darkmode
        storedValue ? 
        body.classList.add('dark-mode') : 
            body.classList.remove('dark-mode');
        }
, [storedValue, body.classList])

    return [storedValue, setValue];
}