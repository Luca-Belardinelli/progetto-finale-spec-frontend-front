import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
    const [compareItems, setCompareItems] = useState([]);


    const addToCompare = (console) => {
        // prev array coorente 
        setCompareItems((prev) => {
            if (prev.find((item) => item.id === console.id)) {
                alert("Questa console è già nella lista.");
                return prev;
            }
            if (prev.length >= 3) {
                alert("Puoi confrontare solo tre console.");
                return prev;
            }
            alert("Console aggiunta alla comparazione!");
            return [...prev, console];
        });
    };

    const removeFromCompare = (id) => {
        setCompareItems((prev) => prev.filter(item => item.id !== id));
    };

    const clearCompare = () => setCompareItems([]);


    function isInCompare(id) {
        return compareItems.some(item => item.id === id);
    }


    return (
        <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare, clearCompare, isInCompare }}>
            {children}
        </CompareContext.Provider>
    );
}

export const useCompare = () => useContext(CompareContext);
