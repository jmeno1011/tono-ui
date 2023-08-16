import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key='theme', initialState: T) {
    const [state, setState] = useState(
        () => {
            try{
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialState
            }catch(e){
                return initialState
            }
        }
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])
    return [state, setState];
}