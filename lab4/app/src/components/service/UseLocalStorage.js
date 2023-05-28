import React, {useEffect, useState} from "react";

const UseLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue || null;
      });      

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];


};

export default UseLocalStorage;