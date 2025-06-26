import { useFavorites } from '../../context/FavoritesContext';
import ConsoleCard from '../../components/ConsoleCard/ConsoleCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <h1 className="no-favorites-message">
                Non hai ancora aggiunto nessuna console tra i preferiti.
            </h1>
        );
    }

    return (
        <div className="favorites-grid">
            {favorites.map((console) => (
                <ConsoleCard key={console.id} console={console} />
            ))}
        </div>
    );
};

export default FavoritesPage;
