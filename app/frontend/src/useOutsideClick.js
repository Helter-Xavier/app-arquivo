import { useState, useEffect } from "react";


//Function Dropdown
export const useOutsedeClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const onClick = e => {
            if(el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        }

        if(isActive) {
            window.addEventListener("click", onClick);
        }
    }, [isActive, el])

    return [isActive, setIsActive];
}