import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);


    const toggleFavorite = (console) => {
        setFavorites(prevFavorites =>
            prevFavorites.some((fav) => fav.id === console.id)
                ? prevFavorites.filter((fav) => fav.id !== console.id)
                : [...prevFavorites, console]
        );
    };


    const isFavorite = (id) => {
        return favorites.some((fav) => fav.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }

    return context;
};
