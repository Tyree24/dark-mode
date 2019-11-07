import React, { useState, useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage.js";

// setting state
export const useDarkMode = () => {
    const[storedValue, setValue] = useLocalStorage('darkMode', false);

    const body = document.querySelector('body');

    useEffect (() => {
        //creating an if else statement to give option for darkmode
        if(storedValue) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [storedValue])

    return [storedValue, setValue];
}