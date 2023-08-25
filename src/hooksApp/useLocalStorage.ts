import {useState, useEffect} from "react";

export const useLocalStorage = (inValue: string | number, key: string) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }

        return inValue;
    }

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}